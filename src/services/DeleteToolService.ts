import { getRepository, DeleteResult } from 'typeorm';
import Tool from '../models/Tool';
import AppError from '../error/AppError';

interface Request {
  id: string;
}

class DeleteToolService {
  public async execute({ id }: Request): Promise<DeleteResult> {
    const toolRepository = getRepository(Tool);

    const tool = await toolRepository.findOne({ where: { id } });

    if (!tool) {
      throw new AppError('Tool not found.');
    }

    return toolRepository.delete(id);
  }
}

export default DeleteToolService;
