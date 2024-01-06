import { Document } from "mongoose";

export interface ILikes extends Document{
    url: string;
    nro_likes: number;
    nro_dislikes: number;
}