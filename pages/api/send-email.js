// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { name, email, message } = req.body;

//     console.log("Received request body:", { name, email, message });

//     try {
//       const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//           user: process.env.EMAIL_USER,
//           pass: process.env.EMAIL_PASS,
//         },
//         debug: true,
//         logger: true,
//       });

//       const mailOptions = {
//         from: email,
//         to: process.env.EMAIL_USER,
//         subject: `Message from ${name} (Contact Form)`,
//         text: message,
//       };

//       console.log("Mail options:", mailOptions);

//       await transporter.sendMail(mailOptions);

//       console.log("Email sent successfully");

//       res.status(200).json({ message: "Email sent successfully" });
//     } catch (error) {
//       console.error("Error sending email:", error);
//       res
//         .status(500)
//         .json({ message: "Error sending email", error: error.message });
//     }
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }
