import { Router } from 'express';

import CreateToolService from '../services/CreateToolService';

const toolsRouter = Router();

toolsRouter.get('/', (request, response) => {
  return response.json({ ok: true });
});

toolsRouter.post('/', async (request, response) => {
  const createTool = new CreateToolService();

  const { title, link, description, tags } = request.body;

  const tool = await createTool.execute({ title, link, description, tags });

  return response.json(tool);
});

export default toolsRouter;
