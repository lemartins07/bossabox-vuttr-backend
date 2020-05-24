import { Router } from 'express';
import { getRepository } from 'typeorm';

import Tool from '../models/Tool';
import CreateToolService from '../services/CreateToolService';
import DeleteToolService from '../services/DeleteToolService';

const toolsRouter = Router();

toolsRouter.get('/', async (request, response) => {
  const toolRepository = getRepository(Tool);

  const tools = await toolRepository.find();

  return response.json(tools);
});

toolsRouter.post('/', async (request, response) => {
  const createTool = new CreateToolService();

  const { title, link, description, tags } = request.body;

  const tool = await createTool.execute({ title, link, description, tags });

  return response.status(201).json(tool);
});

toolsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteTool = new DeleteToolService();

  await deleteTool.execute({ id });

  return response.send(204);
});

export default toolsRouter;
