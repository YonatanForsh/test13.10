import PostModel, {IPost} from "../models/postModel" 




const createPost = async (post: IPost) => {
    try {
        const newPost = new PostModel(post)
        await newPost.save()
        return post
    } catch (err) {
        throw new Error("something went wrong");
    }
}


const getPostById = async (user: typeof PostModel) => {
    
}


const getPosts = async (user: typeof PostModel) => {

}


const updatePostDetails = async (user: typeof PostModel) => {

}

const deletePost = async (user: typeof PostModel) => {

}


const createComment = async (user: typeof PostModel) => {

}



export default {
    createPost,
    getPostById,
    getPosts,
    updatePostDetails,
    deletePost,
    createComment
}