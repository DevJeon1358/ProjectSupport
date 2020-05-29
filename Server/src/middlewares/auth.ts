import { Request, Response } from 'express';

const middleware = async (req: Request, res: Response, next: Function) => {
  const tokenHeader = req.headers['x-access-token'];
  if (!tokenHeader) {
    res.status(403).json({
      status: 403,
      message: 'Authendation header is required',
    });

    return null;
  }

  await next();
  return null;
};

export default middleware;
