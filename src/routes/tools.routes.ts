import { Router } from 'express';

const toolsRouter = Router();

toolsRouter.get('/', (request, response) => {
  return response.json({ ok: true });
});

toolsRouter.post('/', (request, response) => {
  const body = request.body;

  return response.json(body);
});

export default toolsRouter;
