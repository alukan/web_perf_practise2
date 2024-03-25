const express = require('express');
const compression = require('compression');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const distPath = path.join(__dirname, '../dist');

app.use(compression());

app.use((req, res, next) => {
    if (req.path.endsWith('.html')) {
        console.log("html")
        const gzippedFilePath = path.join(distPath, `${req.path}.gz`);

        fs.access(gzippedFilePath, fs.constants.F_OK, (err) => {
            if (!err) {
                res.setHeader('Content-Encoding', 'gzip');
                res.setHeader('Content-Type', 'text/html');
                return fs.createReadStream(gzippedFilePath).pipe(res);
            }
            return next();
        });
    } else {
        next();
    }
});

app.use(express.static(distPath));

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
