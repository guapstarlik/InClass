console.log("hi")

// Import the express library and assign it to a variable
import express from 'express'

// Create an instance of an express application 
const app = express()

// Set the port the application will be running on
const port = process.env.PORT || 3001

// Set up a response for the root path of the application
app.get('/', (req, res) => {
  res.send("Get that money, Stack your guap, do your thing.")
})

// Set the application to listen a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}` )
})

app.get('/country/:name', (req, res) => {
    const countryName = req.params.name; // Access the country name
    res.send(`USA: ${countryName}`);
});