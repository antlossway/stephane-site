import sendEmail from "@/lib/sendEmail";
import { NextResponse } from "next/server";

export const POST = async(req) => {
    const data = await req.json()

    const type = data.type
    // newSubscriber(from me to new subscriber, confirm their subscription)
    // newsLetter (from me to subscriber)
    // newMessage (from me to myself: when user fill send me a message form)

    let to = ''
    let from = ''

    if (type === 'newMessage') {
        to = process.env.EMAIL_PERSONAL
        from = process.env.EMAIL_FROM
    } else {
        to = data.to
        from = process.env.EMAIL_FROM
    }

    const emailData = {
        to: to,
        from: from,
        subject: data.subject,
        text: data.message,
        html: `<div>${data.message}</div>`
    }

    return await sendEmail(emailData).then( (response) => {
                return new NextResponse(
                    response, {status: 200}
                )}).catch( (err) => {
                    return new NextResponse(err, {status: 500})
                })
}