import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Likes{
    @Prop()
    url: string;
    @Prop()
    nro_likes: number;
    @Prop()
    nro_dislikes: number;
}

export const LikesSchema = SchemaFactory.createForClass(Likes);