import { Test, TestingModule } from '@nestjs/testing';
import { FormationsController } from './formations.controller';
import { FormationsService } from './formations.service';

describe('FormationsController', () => {
  let formationsController: FormationsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FormationsController],
      providers: [FormationsService],
    }).compile();

    formationsController = app.get<FormationsController>(FormationsController);
  });

  //describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(formationsController.getHello()).toBe('Hello World!');
    });
//});
});
