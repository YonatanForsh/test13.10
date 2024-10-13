import { Request, Response, NextFunction } from "express";
import Post, { IPost } from "../models/postModel";
import postService from "../services/postService";




// Create a new post
export const createPost = async (req: Request, res: Response): Promise<void> => {
  try {
    const resolt = await postService.createPost(req.body)
    res.status(201).json({
        msg: "post created succesfully",
        resolt
    })   
} catch (err) {
    res.status(400).json(err)
}
};


// Delete a post
export const deletePost = async (req: Request, res: Response): Promise<void> => {
  try {
    const resolt = await postService.deletePost
    res.status(200).json(resolt)   
} catch (err) {
    res.status(400).json(err)
}
};



// Get all posts
export const getPosts = async (req: Request, res: Response): Promise<void> => {
  try {
    const resolt = await postService.getPosts
    res.status(200).json(resolt)   
} catch (err) {
    res.status(400).json(err)
}
};


// Get a single post by ID
export const getPost = async (req: Request, res: Response): Promise<void> => {
  try {
    const resolt = await postService.getPostById
    res.status(200).json(resolt)   
} catch (err) {
    res.status(400).json(err)
}
};


// Update a post
export const updatePost = async (req: Request, res: Response): Promise<void> => {
  try {
    const resolt = await postService.updatePostDetails
    res.status(200).json(resolt)   
} catch (err) {
    res.status(400).json(err)
}
};


// Add a comment to a post
export const addComment = async (req: Request, res: Response): Promise<void> => {
  try {
    const resolt = await postService.createComment
    res.status(200).json(resolt)   
} catch (err) {
    res.status(400).json(err)
}
};


