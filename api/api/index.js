const express = require('express');
const app = express();
require('express-async-errors');
const connectDB = require('./db/connect')
const cors = require('cors')
const dotenv = require('dotenv')
const multer = require('multer');
const path = require('path');

// Routes
const authRouter = require('./routes/auth')
const followerRouter = require('./routes/followers')

// Middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

dotenv.config({path: "./vars/.env"})
app.use(cors())
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '/images')));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");        
    }, filename: (req, file, cb) => {
        cb(null, req.body.name);
    }
});

const upload = multer({ storage: storage });

// Api routes
app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

app.post("/api/v1/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', followerRouter)

// Using the middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();