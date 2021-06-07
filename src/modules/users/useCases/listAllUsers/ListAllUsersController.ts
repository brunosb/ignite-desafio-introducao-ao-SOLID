import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = <{ user_id: string }>request.headers;
    try {
      return response.json(this.listAllUsersUseCase.execute({ user_id }));
    } catch ({ message }) {
      return response.status(400).json({ error: message });
    }
  }
}

export { ListAllUsersController };
