const { openai } = require('../config/config');
const { DREAM_PROMPT, CLOSING_MESSAGE } = require('../utils/constants');

const interpretDream = async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: process.env.AZURE_DEPLOYMENT_NAME, // Use deployment name
      messages: [
        { role: 'system', content: DREAM_PROMPT },
        { role: 'user', content: message },
      ],
    });

    const interpretation = response.choices[0].message.content;

    res.status(200).json({
      interpretation,
      reminder: CLOSING_MESSAGE,
      Author: 'Nathan Yennupiak',
    });
  } catch (error) {
    console.error('Azure OpenAI Error:', error);
    res.status(500).json({ error: 'Failed to interpret the dream. Please try again.' });
  }
};

module.exports = { interpretDream };