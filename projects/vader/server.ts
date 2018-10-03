// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';

import * as express from 'express';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import { join } from 'path';

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');
const APP_NAME = 'vader';

const {
    AppServerModuleNgFactory,
    LAZY_MODULE_MAP
} = require(`../../dist/${APP_NAME}-server/main`);

enableProdMode();
console.log('exporting vaderApp from ts file');
const app = express();

// Set the engine
app.engine(
    'html',
    ngExpressEngine({
        bootstrap: AppServerModuleNgFactory,
        providers: [provideModuleMap(LAZY_MODULE_MAP)]
    })
);

app.set('view engine', 'html');

app.get('/**/*', (req, res) => {
    res.render(join(DIST_FOLDER, APP_NAME, 'index'), {
        req,
        res
    });
});

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, APP_NAME));

// Static Assets
app.get('*.*', express.static(join(DIST_FOLDER, APP_NAME)));

// Point all routes to Universal
const vaderApp = app.get('*', (req, res) => {
    console.log(`${APP_NAME} theme connected`);
    res.render('index', { req });
    // res.render(join(DIST_FOLDER, APP_NAME, 'index.html'), { req });
});

// Start Express Server
/* vaderApp.listen(PORT, () => {
    console.log(`Node Express server listening on http://localhost:${PORT}`);
}); */

module.exports = vaderApp;