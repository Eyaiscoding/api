import { Test, TestingModule } from '@nestjs/testing';
import { TodolistController } from './todolist.controller';
import { TodolistService } from './todolist.service';

describe('TodolistController', () => {
  let todolistController: TodolistController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TodolistController],
      providers: [TodolistService],
    }).compile();

    todolistController = app.get<TodolistController>(TodolistController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(todolistController.getHello()).toBe('Hello World!');
    });
  });
});
