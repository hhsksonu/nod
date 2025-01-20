# Email Sending Server using Node.js and Nodemailer

## Overview
This project is a simple Node.js server that uses the `nodemailer` package to send emails. The server listens on port 8080 and sends an email whenever it receives a request.

## Prerequisites
- Node.js installed on your system.
- A Gmail account with less secure app access enabled or app password generated.

## Installation

1. Clone or download this repository.
2. Navigate to the project directory.
3. Install the required dependencies by running:
   ```bash
   npm install nodemailer
   ```

## Code Explanation

### Dependencies
The code uses two main modules:
- `http`: To create an HTTP server.
- `nodemailer`: To send emails through an SMTP server.

### Nodemailer Configuration
The `nodemailer.createTransport` method is used to configure the email transporter. In this example:
- Gmail is the email service.
- Secure SMTP is enabled with port 465.
- Authentication credentials (`user` and `pass`) for the Gmail account are provided.

### Server Logic
- The HTTP server listens on port 8080.
- When a request is received, it sends an email using the pre-configured transporter.
- The email details (like sender, recipient, subject, and body) are specified in the `receiver` object.
- If the email is sent successfully, a success message is logged and sent back as the HTTP response.
- If an error occurs, an error message is logged and sent as the HTTP response.

## Usage

1. Replace the `user` and `pass` fields in the transporter configuration with your Gmail credentials or app password.
2. Replace the `to` field in the `receiver` object with the recipient's email address.
3. Start the server:
   ```bash
   node server.js
   ```
4. Open a browser or use a tool like `curl` to send a request to `http://localhost:8080`. For example:
   ```bash
   curl http://localhost:8080
   ```
5. Check the recipient's inbox for the email.

## Example Email Details
- **From**: `hhsksonu@gmail.com`
- **To**: `sonukumaryz463@gmail.com`
- **Subject**: "Mail testing in Node Js"
- **Body**: "Hello this is text mail in Node Js by Nodemailer!"

## Security Note
- Never hardcode your email credentials in the source code. Use environment variables or a configuration file to store sensitive data.
- If you are using Gmail, generate an **App Password** instead of using your actual account password.

## License
This project is open-source and available under the MIT License.

