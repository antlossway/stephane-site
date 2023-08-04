import nodemailer from "nodemailer"

export default async function sendEmail(data) {
    const transporter = nodemailer.createTransport(process.env.EMAIL_SERVER)

    // console.log("lib/sendEmail.js receive data: ", typeof(data), data)

  return await transporter.sendMail({
        // from: process.env.EMAIL_FROM,
        ...data //to, from, subject, text, html
    })
}
