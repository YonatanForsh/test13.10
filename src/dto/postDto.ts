interface postDTO {
    title: string,
    content: string,
    autherId: {bio: string, socialLink: string},
    comments: string[]
}

export {
    postDTO 
}