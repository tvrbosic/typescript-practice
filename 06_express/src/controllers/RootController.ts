import { Request, Response } from 'express';

import { controller, use, get } from './decorators';

function requireAuthentication(req: Request, res: Response, next: e.NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send('Unauthorized!');
}

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
        <div>
          <div>You are logged in</div>
          <a href="/auth/logout">Logout</a>
        </div>
      `);
    } else {
      res.send(`
        <div>
          <div>You are not logged in</div>
          <a href="/auth/login">Login</a>
        </div>
      `);
    }
  }

  @get('/protected')
  @use(requireAuthentication)
  getProtected(req: Request, res: Response) {
    res.send('Welcome to protected route, logged in user!');
  }
}
