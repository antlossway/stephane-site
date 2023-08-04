import { NextResponse } from "next/server";
import fs from "fs"
import path from "path"
import sendEmail from "@/lib/sendEmail";

const filePath = path.join(process.cwd(), 'emailList')

const getEmailList = () => {
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const result = fileContent.split('\n')
    return result //array
}

export const POST = async(req) => {
    const data = await req.json() //{email: 'abc@abc.com'}
    const newEmail = data.email

    const emailList = getEmailList()
    let msg = 'Email is added'
    let statusCode = 201

    if(emailList.includes(newEmail)) {
        msg = `Email ${newEmail} already exists in the mailing list`
        statusCode = 200
    } else {
        try {
            fs.appendFileSync(filePath, `${newEmail}\n`)

                    // send confirmation email
            const emailData = {
                    to: newEmail,
                    from: process.env.EMAIL_FROM,
                    subject: `Thank you for your subscription`,
                    html: `Hello, I will gladly share my update with you. Keep in touch!`,
            }
            const result = await sendEmail(emailData)
            // console.log("debug api/newsletter sendEmail result: ", typeof(result), result)

        } catch (error) {
            msg = `It's so embarassing, something is wrong, we will come back to you.`
            console.error(error)
            statusCode = 200
        }
    }
    //it seems the msg is not accessible from client
    return new NextResponse(msg, {status: statusCode})
}