import { Router, Request, Response } from 'express';

const router = Router();
const articlesRouter = Router();

// Root route
router.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Home Page');
  });
  
// About route
router.get('/about', (req: Request, res: Response) => {
    res.send('This is the About Page');
  });
  
// Route with URL parameter
router.get('/users/:id', (req: Request, res: Response) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

// Grouped routes for articles
articlesRouter.get('/', (req, res) => {
  res.send('List of articles');
});

articlesRouter.get('/:id', (req, res) => {
  const articleId = req.params.id;
  res.send(`Details of article with ID: ${articleId}`);
});

// Use the router for all requests starting with "/articles"
router.use('/articles', articlesRouter);

export default router;