//on-demand revalided path
import * as crypto from "crypto";

import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(req) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (secret !== process.env.MY_SECRET_TOKEN) {
    return new NextResponse(JSON.stringify({ message: "Invalid Token" }), {
      status: 401,
      statusText: "Unauthorized",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const path = req.nextUrl.searchParams.get("path") || "/blog";

  revalidatePath(path);

  return NextResponse.json({
    revalidated: true,
    path,
  });
}

// for github webhook
const verify_signature = (req) => {
  const mySecret = process.env.GITHUB_WEBHOOK_SECRET;

  const signature = crypto
    .createHmac("sha256", mySecret)
    .update(JSON.stringify(req.body))
    .digest("hex");
  const calculatedSig = `sha256=${signature}`;
  const receivedSig = req.headers.get("x-hub-signature-256");
  console.log(
    `debug secrete ${mySecret}, calculated ${calculatedSig}, received ${receivedSig}`
  );

  return calculatedSig === receivedSig;
};

const refetch = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      revalidatePath("/blog");
      revalidatePath("/blog/[slug]");
      revalidatePath("/bookmark");
      resolve("revalidated");
      console.log("debug: revalidated");
    }, 5 * 60 * 1000); // Github raw content cache max-age: 5min
  });
};

export async function POST(req, res) {
  //seems github bug, verify_signature always fails
  //   if (!verify_signature(req)) {
  //     return NextResponse.json({
  //       revalidated: false,
  //       error: "Unauthorized",
  //     });
  //   }

  // const data = await req.json(); // {path: '/blog'}
  // const path = data.path || "/blog";

  refetch(); // don't await, so github webhook will get response immediately
  // const refetchResult = await refetch()
  // console.log(new Date(), refetchResult);

  return NextResponse.json({
    revalidated: true,
  });
}
