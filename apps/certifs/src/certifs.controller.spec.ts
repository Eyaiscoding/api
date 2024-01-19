import { Test, TestingModule } from '@nestjs/testing';
import { CertifsController } from './certifs.controller';
import { CertifsService } from './certifs.service';

describe('CertifsController', () => {
  let certifsController: CertifsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CertifsController],
      providers: [CertifsService],
    }).compile();

    certifsController = app.get<CertifsController>(CertifsController);
  });

  //describe('root', () => {
    //it('should return "Hello World!"', () => {
     // expect(certifsController.getHello()).toBe('Hello World!');
    //});
  //});
});
