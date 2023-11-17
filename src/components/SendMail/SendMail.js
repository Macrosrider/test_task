import React from 'react'
import nodemailer from 'nodemailer'

const SendMail = (data, e) => {

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: '495285495097-kdpn53c2cq24gv7bbo9ovel9bckalkqv.apps.googleusercontent.com',
        pass: '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' // naturally, replace both with your real credentials or an application-specific password
      }
    });
    
    const mailOptions = {
      from: data.email,
      to: 'marikzub72060@gmail.com', //put your email here to get form results
      subject: data.name,
      text: data.projectDescription
    };

  return (
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      })
  )
}

export default SendMail