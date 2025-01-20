const http = require("http");
const nodemailer = require("nodemailer");

const auth = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
        user: "hhsksonu@gmail.com",
        pass: "wlyr ogsp xgym rmrf"
        }
    });

const server = http.createServer((request, response) => {    
    const receiver = {
        from: "hhsksonu@gmail.com",
        to: "sonukumaryz463@gmail.com",
        subject: "Mail testing in Node Js",
        text: "Hello this is text mail in Node Js by Nodemailer!"
    };

    auth.sendMail(receiver, (error, emailResponse) => {
        if(error){
            console.error("Error sending email:", error);
            response.writeHead(500, {"Content-Type:": "text/plain"});
            response.end("Error sending email");
            return;
        }
        console.log("Email sent successfully:", emailResponse);
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end("Email sent successfully!");
    });

});

server.listen(8080, () => {
    console.log("Server is listening on port 8080");
});

// create responsive navbar