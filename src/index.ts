import express, { Application, NextFunction, Request, Response } from 'express';
import router from './routes';
import { CustomError } from './errors/CustomError';

//#region 01-setup-express

const app: Application = express();
const PORT = 3000;

//#endregion

//#region 02-first-app

// Basic route to return a message
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript!');
});

//#endregion

//#region 03-middlewares

// Middleware to log request method and URL
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} request to ${req.url}`);
    next(); // Proceed to the next middleware or route handler
});

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Route to handle JSON data (POST request)
app.post('/json-data', (req: Request, res: Response) => {
    const { name, age } = req.body;
    res.json({ message: `Hello, ${name}. You are ${age} years old.` });
});

// Route to handle form data (POST request)
app.post('/form-data', (req: Request, res: Response) => {
    const { username, password } = req.body;
    res.json({ message: `Username: ${username}, Password: ${password}` });
});

//#endregion

//#region 04-routing

app.use('/', router);

//#endregion

//#region 05-request-response

// Route with query parameters
app.get('/search', (req: Request, res: Response) => {
    const { q } = req.query;
    if (q) {
        res.json({ message: `Search results for: ${q}` });
    } else {
        res.status(400).json({ error: 'Query parameter "q" is required' });
    }
});

// POST route to handle JSON data
app.post('/submit', (req: Request, res: Response) => {
    const { name, age } = req.body;
    if (!name || !age) {
        res.status(400).json({ error: 'Name and age are required' });
    } else {
        res.json({ message: `Received data: ${name}, Age: ${age}` });
    }
});

// Redirect example
app.get('/old-route', (req: Request, res: Response) => {
    res.redirect('/new-route');
});

// The new route
app.get('/new-route', (req: Request, res: Response) => {
    res.send('You have been redirected to the new route!');
});

//#endregion

//#region 06-error-handling

app.post('/data', (req: Request, res: Response) => {
    console.log('Received JSON data:', req.body);
  res.json({ message: 'Data received successfully', data: req.body });
});

// Route that causes an error
app.get('/error', (req: Request, res: Response, next: NextFunction) => {
    const err = new CustomError('This is a custom error!', 500);
    next(err); // Pass the error to the custom error handler
});

// POST route that can trigger validation errors
app.post('/validate', (req: Request, res: Response, next: NextFunction) => {
    console.log('Received JSON data:', req.body);
    const { name, email } = req.body;
    if (!name || !email) {
      const validationError = new CustomError('Both name and email are required', 400);
      return next(validationError); // Pass the error to the custom error handler
    }
    res.send(`Name: ${name}, Email: ${email}`);
});

// Custom error handler
app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message); // Log the error
    res.status(statusCode).json({
      error: {
        message: err.message,
        statusCode: statusCode,
      },
    });
});

// 404 Error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ error: 'Route not found' });
});

//#endregion

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});