const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = process.env.NODE_ENV !== 'production' ? require('../webpack.dev.js') : require('../webpack.prod.js');

const app           = express(),
      DIST_DIR      = path.join(__dirname, "../dist"),
      HTML_FILE     = path.join(DIST_DIR, "index.html"),
      DEFAULT_PORT  = 3000,
      compiler      = webpack(config);

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
	// Tell express to use the webpack-dev-middleware and use the webpack.config.js
	// configuration file as a base.
	app.use(webpackDevMiddleware(compiler, {
	  publicPath: config.output.publicPath
	}));

	app.get("*", (req, res, next) => {
		compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
			if (err) {
				return next(err);
			}
			res.set('content-type', 'text/html');
			res.send(result);
			res.end();
		});
	});
} else {
	app.use(express.static(DIST_DIR));

	app.get("*", (req, res) => res.sendFile(HTML_FILE));
}

// Serve the files on port 3000.
app.listen(DEFAULT_PORT, function () {
  console.log(`Example app listening on port ${DEFAULT_PORT}!\n`);
});
