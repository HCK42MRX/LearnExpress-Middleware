import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// middleware body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// today lesson is how to create GET request
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
});

app.post('/submit', (req,res) => {
  console.log(req.body)
})

// challenge make endpoint, /(home), /contact, /about

// last lesson learn how to use http method from express(GET)
app.get("/contact", (req, res) => {
  res.send("<h1>this my phone number");
});

app.get("/about", (req, res) => {
  res.send("<h1>ini halaman about</h1>");
});

// last lesson making a server from express
app.listen(port, () => {
  console.log(`server is running in:localhost: http://localhost:${port}`);
});
