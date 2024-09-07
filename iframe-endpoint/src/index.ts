import express, { Request, Response } from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
const webpackConfig = require('../webpack.config.js');

const app = express();
const PORT = 3333;

// Use Webpack middleware for hot-reloading
const compiler = webpack(webpackConfig);
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  })
);

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Handle all paths
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
