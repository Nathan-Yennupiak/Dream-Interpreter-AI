const validateDreamInput = (req, res, next) => {
    const { message } = req.body;
  
    if (!message || !message.toLowerCase().includes('dream')) {
      return res.status(400).json({
        error: "Please include the word 'dream' in your request so I can interpret it properly.",
      });
    }
  
    next();
  };
  
  module.exports = { validateDreamInput };