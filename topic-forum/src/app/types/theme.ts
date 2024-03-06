import { Post } from "./post";
import { UserId } from "./user-id";

export interface Theme {
    subscribers: string[],
    posts: any | string[] | Post[],
    _id: string,
    themeName: string,
    // imageUrl: string - TODO check if I want it
    userId: UserId,
    created_at: string,
    updatedAt: string,
    __v: number
}
