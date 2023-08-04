import React from "react";

export default function LinkToNewTab({
  text,
  url,
  textStyle = "text-slate-600 dark:text-white/80",
}) {
  return (
    <a
      href={url}
      target="_blank"
      className={`${textStyle} no-underline hover:underline-offset-2`}
    >
      {text} &#8599;
    </a>
  );
}
