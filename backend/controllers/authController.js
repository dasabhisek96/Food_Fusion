const User = require('../models/User');
const { hashPassword, generateToken } = require('../utils/jwt');

exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await hashPassword(password);
    const user = await User.create({ name, email, password: hashedPassword });
    const token = generateToken(user._id);
    res.status(201).json({ token });
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        const token = generateToken(user._id);
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};
