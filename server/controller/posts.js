import { User } from '../models/User.js';
import Post from '../models/posts.js';
import fs from 'fs';
import { sortByKey } from '../helpers/sorting.js';
const createPost = async (req, res) => {
    try {
        const { userId, description, picturePath } = req.body;
        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {},
            comments: []
        });
        await newPost.save();

        const posts = await Post.find();
        sortByKey(posts, "createdAt");
        res.status(201).json(posts);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

/*READ */
const getFeedPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        sortByKey(posts, "createdAt");
        res.status(201).json(posts);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

const getUserPosts = async (req, res) => {
    try {

        const { userId } = req.params;
        const post = await Post.find({ userId });
        res.status(201).json(post);
    } catch (error) {
        res.status(409).json({ error: error.message });

    }

}


/*UPDATE */
const likePost = async (req, res) => {
    try {
        const { userId, postId } = req.params;
        const post = await Post.findById(postId);
        if (post.likes.get(userId)) {
            post.likes.delete(userId);
        }
        else {
            post.likes.set(userId, true);
        }
        const updatedPost = await Post.findByIdAndUpdate(
            postId,
            { likes: post.likes },
            { new: true }
        )
        res.status(201).json(updatedPost);

    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

const commentsOnPost = async (req, res) => {
    try {
        const { postId, userId } = req.params;
        const { comment } = req.body;
        console.log(comment);
        const post = await Post.findByIdAndUpdate(
            { _id: postId },
            { $push: { comments: { $each: [comment], $position: 0 } } },
            { new: true }
        );
        res.status(200).json(post);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }

}

/*DELETE */

const deletePost = async (req, res) => {
    try {
        const { userId, postId } = req.params;
        const post = await Post.findById(postId);
        if (post.userId === userId) {
            const response = await Post.findByIdAndDelete(postId);
            fs.unlink(`public/assets/${response.picturePath}`, (err) => {
                if (err) {
                    console.log(err);
                    return res.status(404).json(err);
                }
                else {
                    return res.status(200).json(response);
                }
            })
        }
        else {
            res.status(404).json({ message: 'anuthorized acces' });
        }
    } catch (error) {
        res.status(409).json({ error: error.message });
    }

}
export { createPost, getFeedPosts, getUserPosts, likePost, deletePost, commentsOnPost };