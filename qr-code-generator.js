//QR Code scanner application

//Pre Coding tasks 
//1. Install the qrcode package (npm install qrcode) - Done 



//Coding task 
//1. Import the qr code package.
//2.  Create a function to generate a QR code 
//3. Use the function to generate and display a QR code in the console 


//import the qr code package
const QRcode = require('qrcode'); //QRcode is an object from the qrcode package we imported.

//function to generate a qr code 
function generateQRcode(text) {
    //generate the qr code and print it to the console (Mail Project Logic) 
    QRcode.toString(text, {type: 'terminal'}, //The .tostring method is used to generate the qr code as a string. 
    //The .toString method carries 3 parameters 1. a TEXT -   text, 2. An options object - Type: terminal, 3. a callback function -  (err, url).

    (err, url) => {
        if (err) {
            console.log ('error generating QR code:', 
        err);
        return;
        }
        console.log(url);
    });
    }


    const text = 'https://www.livescores.com/?tz=-4';
    generateQRcode(text);