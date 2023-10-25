import express, { Router } from 'express';
import { createPost, getFeedPosts, getUserPosts, likePost, deletePost, commentsOnPost } from '../controller/posts.js';
import { verifyToken } from '../middleware/auth.js';

const router = Router();

/*READ*/
router.get('/', verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/*UPDATE*/
router.patch("/:userId/:postId/like", likePost);
router.patch("/:userId/:postId/comment", verifyToken, commentsOnPost);

/*DELETE*/
router.delete("/:userId/:postId/delete", verifyToken, deletePost);

export default router