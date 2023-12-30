import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import multer from "multer";
import helmet from 'helmet';
import morgan from "morgan";
import path from 'path';
import { fileURLToPath } from "url";

/*LOCAL FILE/MODULE IMPORTS*/
import { register } from './controller/auth.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';
import { verifyToken } from "./middleware/auth.js";
import { createPost } from './controller/posts.js'


/*TEST DATA AAD */
// import { User } from "./models/User.js";
// import Post from "./models/posts.js";
// import { posts, users } from "./data/index.js";
/*CONFIGRATION  */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
// app.use(helmet());
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            imgSrc: ["'self'", 'blob:', 'data:'],
            // Add other directives as needed
        },
    })
);

app.use(morgan('common'));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
// Serve static assets
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

// Serve the React application
app.use('/', express.static(path.join(__dirname, 'public/build')));
// we assume that every backend route start with the /api/ and other than is for frontend 
// and we handle the 404 on the frontend
app.get('*', (req, res, next) => {
    if (req.path.includes('/api')) {
        next();
    } else {
        res.sendFile(path.join(__dirname, 'public/build', 'index.html'));
    }

});

/*FILE STORAGE */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/assets');
    },
    filename: function (req, file, cb) {
        const fileName = Date.now() + (file.originalname);
        req.body.picturePath = fileName;
        cb(null, fileName);
    }
});
const upload = multer({ storage });


/*ROUTE WITH FILES */
app.post('/api/auth/register', upload.single('picture'), register);
app.post('/api/posts', verifyToken, upload.single('picture'), createPost);
/*ROUTES */
app.use('/api/auth', authRoutes);
app.use("/api/users", userRoutes);
app.use('/api/posts', postRoutes)

// Handle all other routes by serving the main HTML file
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/build', 'index.html'));
// });
/*MONGOOSE CONNECTION */
const port = process.env.PORT;
mongoose.connect(process.env.MONGO_URL)
    .then((respose) => {
        console.log('connection successfull');
        // User.insertMany(users);
        // Post.insertMany(posts);
    })
    .catch((err) => { console.log(err) });
app.listen(port, () => console.log('server runn on ', port))




