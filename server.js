const express = require("express");
const authRoutes = require("./routes/authRoute.js") 

// Create an Express application
const app = express();

//routes
app.use("/api/v1/auth", authRoutes);

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send("<h1>Welcome to my Ecommerce Website</h1>");
});

// Define the port to listen on
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`);
});
