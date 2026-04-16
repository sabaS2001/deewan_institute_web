const express = require("express"); // Web framework for Node.js
const nodemailer = require("nodemailer"); // Sending emails
const multer = require("multer"); //Handling file uploads
const cors = require("cors"); //Allows frontend to talk to backend
require("dotenv").config(); //Loads .env variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173", // local development
      "https://www.deewaninstitute.com", // production
    ],
  }),
);
app.use(express.json());

// Nodemailer transporter
// With this:
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const {
      fullName,
      email,
      phoneNumber,
      message
    } = req.body;

    const path = require("path");

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: [process.env.RECEIVER_EMAIL, process.env.RECEIVER_EMAIL_2],
      subject: `Deewan Website: Message from ${fullName}`,
      html: `
    <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
      
      <!-- Logo using cid (Content ID) -->
      <div style="text-align: center; padding: 20px 0;">
        <img 
          src="cid:deewanlogo" 
          alt="Deewan Institute Logo" 
          style="width: 65%;"
        />
      </div>

      <hr/>

      <h2>Deewan Website Message</h2>
      <hr/>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phoneNumber}</p>
      <hr/>
      <p><strong>Inquiry:</strong></p>
      <p>${message}</p>

      <hr/>
      <div style="text-align: center; padding: 20px 0; color: #888; font-size: 12px;">
        <p>Deewan Institute for Languages and Cultural Studies</p>
        <p>Al - Baouneyah St. 14, Amman 11191</p>
      </div>

    </div>
  `,

      // ✅ Attach the logo as an embedded image
      attachments: [{
        filename: "LogoDeewan.webp",
        path: path.join(
          __dirname,
          "..",
          "frontend",
          "public",
          "assets",
          "images",
          "logos",
          "LogoDeewan.webp",
        ),
        cid: "deewanlogo", // must match src="cid:deewanlogo"
      }, ],
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      message: "Error sending message.",
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Checkout form endpoint
app.post("/api/checkout", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      address,
      region,
      paymentMethod,
      cart,
      totalPrice,
    } = req.body;

    const DELIVERY_FEE = 3;

    // ✅ Payment method message
    const paymentInstructions = {
      cash: `
        <div style="background-color: #fff8e1; padding: 15px; border-radius: 8px; margin-top: 10px;">
          <h3 style="color: #f57f17;">💵 Cash on Delivery</h3>
          <p>Please have the exact amount ready upon delivery.</p>
          <p><strong>Total to pay:</strong> ${totalPrice + DELIVERY_FEE} JOD</p>
        </div>
      `,
      cliq: `
        <div style="background-color: #e8f5e9; padding: 15px; border-radius: 8px; margin-top: 10px;">
          <h3 style="color: #2e7d32;">📱 CliQ Payment</h3>
          <p>Please send the payment via CliQ to:</p>
          <p><strong>CliQ Alias:</strong> DeewanInstitute</p>
          <p><strong>Amount:</strong> ${totalPrice + DELIVERY_FEE} JOD</p>
          <p>Please send a screenshot of the payment to confirm your order.</p>
        </div>
      `,
      paypal: `
        <div style="background-color: #e3f2fd; padding: 15px; border-radius: 8px; margin-top: 10px;">
          <h3 style="color: #1565c0;">💳 PayPal Payment</h3>
          <p>Please send the payment via PayPal to:</p>
          <p><strong>PayPal Email:</strong> payments@deewaninstitute.com</p>
          <p><strong>Amount:</strong> ${totalPrice + DELIVERY_FEE} JOD</p>
          <p>Please send a screenshot of the payment to confirm your order.</p>
        </div>
      `,
    };

    const selectedPaymentInstruction = paymentInstructions[paymentMethod] || "";

    // ✅ Cart items HTML
    const cartItemsHtml = cart
      .map(
        (item) => `
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #eee;">${item.title} ${item.subtitle || ""}</td>
        <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
        <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: right;">${(item.price || 0) * item.quantity} JOD</td>
      </tr>
    `,
      )
      .join("");

    // ✅ Email to Customer
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Deewan Institute - Book Order Confirmation`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">      
          <!-- Logo -->
          <div style="text-align: center; padding: 20px 0;">
            <img src="cid:deewanlogo" alt="Deewan Institute" style="width: 50%;" />
          </div>

          <hr/>
          <h2>Thank you for your order, ${firstName}!</h2>
          <p>Here is a summary of your order:</p>

          <!-- Order Details -->
          <h3>Order Summary:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background-color: #f5f5f5;">
                <th style="padding: 8px; text-align: left;">Item</th>
                <th style="padding: 8px; text-align: center;">Quantity</th>
                <th style="padding: 8px; text-align: right;">Price</th>
              </tr>
            </thead>
            <tbody>
              ${cartItemsHtml}
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" style="padding: 8px; text-align: right;"><strong>Subtotal:</strong></td>
                <td style="padding: 8px; text-align: right;">${totalPrice} JOD</td>
              </tr>
              <tr>
                <td colspan="2" style="padding: 8px; text-align: right;"><strong>Delivery:</strong></td>
                <td style="padding: 8px; text-align: right;">${DELIVERY_FEE} JOD</td>
              </tr>
              <tr style="background-color: #f5f5f5;">
                <td colspan="2" style="padding: 8px; text-align: right;"><strong>Total:</strong></td>
                <td style="padding: 8px; text-align: right;"><strong>${totalPrice + DELIVERY_FEE} JOD</strong></td>
              </tr>
            </tfoot>
          </table>

          <!-- Shipping Details -->
          <h3>Shipping Details:</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Region:</strong> ${region}</p>

          <!-- Payment Instructions based on method -->
          <h3>Payment Instructions:</h3>
          
          ${selectedPaymentInstruction}

          <hr/>
          <div style="text-align: center; padding: 20px 0; color: #888; font-size: 12px;">
            <p>Deewan Institute for Languages and Cultural Studies</p>
            <p>Al - Baouneyah St. 14, Amman 11191</p>
          </div>

        </div>
      `,
      attachments: [{
        filename: "LogoDeewan.webp",
        path: require("path").join(
          __dirname,
          "..",
          "frontend",
          "public",
          "assets",
          "images",
          "logos",
          "LogoDeewan.webp",
        ),
        cid: "deewanlogo",
      }, ],
    };

    // ✅ Email to Admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: [process.env.RECEIVER_EMAIL, process.env.RECEIVER_EMAIL_2],
      subject: `Deewan Website: New Book Order from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">

          <!-- Logo -->
          <div style="text-align: center; padding: 20px 0;">
            <img src="cid:deewanlogo" alt="Deewan Institute" style="width: 50%;" />
          </div>

          <hr/>
          <h2>New Order Received!</h2>

          <!-- Customer Details -->
          <h3>Customer Details:</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Region:</strong> ${region}</p>
          <p><strong>Payment Method:</strong> ${paymentMethod.toUpperCase()}</p>

          <!-- Order Details -->
          <h3>Order Summary:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background-color: #f5f5f5;">
                <th style="padding: 8px; text-align: left;">Item</th>
                <th style="padding: 8px; text-align: center;">Qty</th>
                <th style="padding: 8px; text-align: right;">Price</th>
              </tr>
            </thead>
            <tbody>
              ${cartItemsHtml}
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" style="padding: 8px; text-align: right;"><strong>Subtotal:</strong></td>
                <td style="padding: 8px; text-align: right;">${totalPrice} JOD</td>
              </tr>
              <tr>
                <td colspan="2" style="padding: 8px; text-align: right;"><strong>Delivery:</strong></td>
                <td style="padding: 8px; text-align: right;">${DELIVERY_FEE} JOD</td>
              </tr>
              <tr style="background-color: #f5f5f5;">
                <td colspan="2" style="padding: 8px; text-align: right;"><strong>Total:</strong></td>
                <td style="padding: 8px; text-align: right;"><strong>${totalPrice + DELIVERY_FEE} JOD</strong></td>
              </tr>
            </tfoot>
          </table>

          <hr/>
          <div style="text-align: center; padding: 20px 0; color: #888; font-size: 12px;">
            <p>Deewan Institute for Languages and Cultural Studies</p>
          </div>

        </div>
      `,
      attachments: [{
        filename: "LogoDeewan.webp",
        path: require("path").join(
          __dirname,
          "..",
          "frontend",
          "public",
          "assets",
          "images",
          "logos",
          "LogoDeewan.webp",
        ),
        cid: "deewanlogo",
      }, ],
    };

    // ✅ Send both emails
    await transporter.sendMail(customerMailOptions);
    await transporter.sendMail(adminMailOptions);

    res.status(200).json({
      message: "Order placed successfully!",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      message: "Error placing order.",
    });
  }
});

// Multer - store in memory
// const upload = multer({
//   storage: multer.memoryStorage(),
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
//   fileFilter: (req, file, cb) => {
//     const allowedTypes = [
//       'application/pdf',
//       'application/msword',
//       'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
//     ];
//     if (allowedTypes.includes(file.mimetype)) {
//       cb(null, true);
//     } else {
//       cb(new Error('Only PDF, DOC, DOCX files are allowed'));
//     }
//   },
// });

// Career form endpoint
// app.post('/api/career', upload.single('cv'), async (req, res) => {
//   try {
//     const { firstName, lastName, email, phoneNumber, position } = req.body;
//     const cvFile = req.file;

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: [process.env.RECEIVER_EMAIL, process.env.RECEIVER_EMAIL_2],
//       subject: `New Career Application - ${position}`,
//       html: `
//         <h2>New Career Application</h2>
//         <hr/>
//         <p><strong>Name:</strong> ${firstName} ${lastName}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phoneNumber}</p>
//         <p><strong>Position:</strong> ${position}</p>
//         <hr/>
//         <p>CV attached below.</p>
//       `,
//       attachments: cvFile ? [
//         {
//           filename: cvFile.originalname,
//           content: cvFile.buffer,
//           contentType: cvFile.mimetype,
//         },
//       ] : [],
//     };

//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'Application sent successfully!' });

//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ message: 'Error sending application.' });
//   }
// });