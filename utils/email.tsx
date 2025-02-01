import nodemailer from "nodemailer";

export const sendEmail = async (to: string, subject: string, text: string) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Gunakan App Password
    },
  });

  await transporter.sendMail({
    from: '"Curug Nangka Booking" <no-reply@curugnangka.com>',
    to,
    subject,
    text,
  });
};
