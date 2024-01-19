import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from "mongoose";


export type CertifDocument = Certif & Document;

@Schema()
export class Certif  {
   @Prop({required: true})
   name:string;

   @Prop({required: true})
   date:string;

   @Prop({required: true})
   place:string;

   @Prop({required: true})
   duration:string;

   @Prop({required: true})
   target:string;

   @Prop({required: true})
   languages:string;

   @Prop({required: true})
   description:string;

}
export const CertifSchema = SchemaFactory.createForClass(Certif);