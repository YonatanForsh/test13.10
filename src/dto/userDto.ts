import { postDTO } from "./postDto"

interface userDTO {
    user_name: string,
    email: string,
    ptofile?: {bio: string, socialLink: string},
}

export {
    userDTO
}