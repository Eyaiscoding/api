import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type FormationDocument = Formation & Document;

@Schema()
export class Formation {
    
    @Prop({required: true})
    title: string;

    @Prop({required: true})
    level: string;

    @Prop({required: true})
    description: string;

    @Prop({required: true})
    topics: string;

    @Prop({required: true})
    duration: string;

    @Prop({required: true})
    languages: string;

    @Prop({required: true})
    target: string;

}

export const FormationSchema = SchemaFactory.createForClass(Formation);