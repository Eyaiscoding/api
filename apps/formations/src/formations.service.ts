import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FormationDocument } from './formation.schema';
import { Model } from 'mongoose';

@Injectable()
export class FormationsService {
constructor(@InjectModel('Formation') private readonly formationModel: Model<FormationDocument>) {}

create(title : string, level: string, description: string, topics: string, duration: string, languages : string,  target: string):
 Promise<FormationDocument>{
  const newFormation = new this.formationModel({ title, level, description, topics, duration, languages, target})
  return newFormation.save();
}

async findOne(id: string) : Promise<FormationDocument> {
  return this.formationModel.findById(id).exec();
}

async findAll() : Promise<FormationDocument[]> {
  return this.formationModel.find().exec();
}

async update(
  id: string,
  newTitle?: string,
  newLevel?: string,
  newDescription?: string,
  newTopics?: string,
  newDuration?: string,
  newLanguages?: string,
  newTarget?: string,
): Promise<FormationDocument> {

  let existingFormation = await this.findOne(id);

  existingFormation.title = newTitle !== undefined ? newTitle : existingFormation.title;
  existingFormation.level = newLevel !== undefined ? newLevel : existingFormation.level;
  existingFormation.description = newDescription !== undefined ? newDescription : existingFormation.description;
  existingFormation.topics = newTopics !== undefined ? newTopics : existingFormation.topics;
  existingFormation.duration = newDuration !== undefined ? newDuration : existingFormation.duration;
  existingFormation.languages = newLanguages !== undefined ? newLanguages : existingFormation.languages;
  existingFormation.target = newTarget !== undefined ? newTarget : existingFormation.target;

  return existingFormation.save();
}


}
