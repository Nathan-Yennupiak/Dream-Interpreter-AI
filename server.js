// require('dotenv').config();
// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');
// const { OpenAIApi } = require('openai'); // Corrected import

// const app = express();
// const port = process.env.PORT || 5000;
// const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// const openai = new OpenAIApi({
//     apiKey: OPENAI_API_KEY,
// });

// app.use(cors());
// app.use(express.json());

// // OpenAI API Function
// async function getDreamInterpretation(userInput) {
//     console.log("Received user input:", userInput); // Debug statement

//     const containsDream = /dream/i.test(userInput); // Check if "dream" is in input

//     if (!containsDream) {
//         console.log("User input does not contain 'dream'"); // Debug statement
//         return "Please include the word 'dream' in your request so I can interpret it properly.";
//     }

//     const systemPrompt = `
//         You are a Christian Prophet and a dream interpreter, like Joseph and Daniel in the Bible, with over four decades of experience interpreting dreams for believers in Christ.
//         Your interpretations are based on biblical principles, wisdom, and divine insights.

//         Users must include the word 'dream' (case-insensitive) in their input for you to respond. 
//         If their message does not contain 'dream,' kindly prompt them to include it before proceeding.

//         At the end of every interpretation, remind the user: 
//         'Though the interpretation of your dream is relevant, as a believer, you still need to pray for the Holy Spirit’s guidance.'
//     `;

//     try {
//         console.log("Sending request to OpenAI API"); // Debug statement
//         const response = await openai.createChatCompletion({
//             model: "gpt-3.5-turbo", // ✅ Change from "gpt-4"
//             messages: [{ role: "system", content: systemPrompt }, { role: "user", content: userInput }],
//         });

//         console.log("Received response from OpenAI API:", response.data); // Debug statement

//         const aiResponse = response.data.choices[0].message.content;

//         return aiResponse + "\n\nThough the interpretation of your dream is relevant, as a believer, you still need to pray for the Holy Spirit’s guidance.";
//     } catch (error) {
//         console.error("Error with OpenAI API:", error.response?.data || error.message);
//         return "Sorry, something went wrong. Please try again later.";
//     }
// }

// // API Route
// app.post('/interpret', async (req, res) => {
//     const { message } = req.body;
    
//     console.log("Received request with message:", message); // Debug statement

//     if (!message) {
//         console.log("Message is missing in the request body"); // Debug statement
//         return res.status(400).json({ error: "Message is required." });
//     }

//     const interpretation = await getDreamInterpretation(message);
//     res.json({ interpretation });
// });

// // Start Server
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });


const app = require('./app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Dream AI API is running on http://localhost:${PORT}`);
});