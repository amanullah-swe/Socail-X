import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

/*REGISTER USER */
const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            location,
            occupation,
        } = req.body;

        if (!firstName || !lastName || !email || !password || !picturePath || !occupation || !location) {
            return res.status(400).json({ message: 'all fields are required' });
        }
        const hashpassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashpassword,
            picturePath,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random() * 10000),
            impressions: Math.floor(Math.random() * 10000)
        })

        const savedUser = await newUser.save();
        const responseData = { ...savedUser._doc };
        responseData.password = '';
        res.status(201).json(responseData);

    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error);
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) return res.status(400).json({ message: 'user not exist.' });

        const match = bcrypt.compare(password, user.password);
        if (!match) return res.status(400).json({ message: 'invalid credentail' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        user.password = '';

        res.status(200).json({ token, user });
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error);
    }

}



export { register, login };