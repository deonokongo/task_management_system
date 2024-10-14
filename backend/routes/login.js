app.post('/api/auth/login', async (req, res) => {
  try {
      const { email, password } = req.body;
      // Validate the user's credentials and generate a token
      const user = await User.findOne({ email });
      if (!user || !(await user.comparePassword(password))) {
          return res.status(401).json({ message: 'Invalid credentials' });
      }

      const token = user.generateAuthToken(); // Assume this function generates a JWT
      res.json({ token, user: { id: user.id, email: user.email } }); // Send JSON response
  } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' }); // Handle server error
  }
});
