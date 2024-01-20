import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CertifDocument } from './certif.schema';
import { Model } from 'mongoose';
import { DeleteResult } from 'mongodb';

@Injectable()
export class CertifsService {

  constructor(@InjectModel('Certif') private readonly certifModel: Model<CertifDocument>) {}
 

  create(name : string, date: string, place: string, duration: string, target: string, languages: string,  description: string):
    Promise<CertifDocument>{
    const newCertif = new this.certifModel({ name, date , place, duration, target, languages, description})
    return newCertif.save();
 }


  async findOne(id: string) : Promise<CertifDocument> {
  return this.certifModel.findById(id).exec();
  }
  async findAll() : Promise<CertifDocument[]> {
  return this.certifModel.find().exec();
  }


 async update(
  id: string,
  newName?: string,
  newDate?: string,
  newPlace?: string,
  newDuration?: string,
  newTarget?: string,
  newLanguages?: string,
  newDescription?: string,
   ): Promise<CertifDocument> {

  let existingCertif = await this.findOne(id);
  
  existingCertif.name = newName !== undefined ? newName : existingCertif.name;
  existingCertif.date = newDate !== undefined ? newDate : existingCertif.date;
  existingCertif.place = newPlace !== undefined ? newPlace : existingCertif.place;
  existingCertif.duration = newDuration !== undefined ? newDuration : existingCertif.duration;
  existingCertif.target = newTarget !== undefined ? newTarget : existingCertif.target;
  existingCertif.languages = newLanguages !== undefined ? newLanguages : existingCertif.languages;
  existingCertif.description = newDescription !== undefined ? newDescription : existingCertif.description;
 
  return existingCertif.save();
 }

 async delete(id: string): Promise<DeleteResult> {
    try {
      console.log(`Deleting certification with id: ${id}`);
      const result = await this.certifModel.deleteOne({ _id: id }).exec();
      console.log(`Deletion result: ${JSON.stringify(result)}`);
      return result;
    } catch (error) {
      console.error(`Error deleting certification with id ${id}: ${error.message}`);
      throw error;
    }
  }


}
 
