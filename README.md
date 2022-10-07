# leopitt

Inside `/docroot/app`, you can run several commands:

* `npm start`: Starts the development server.
* `npm run build`: Bundles the app into static files for production.
* `npm test`: Starts the test runner.
* `npm run eject`: Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

```bash
cd app
npm start
```

## Docksal

Ideally this should all be run via a Docksal machine.

But `npm start` must be run directly on a local machine, because ... it doesn't work via Docksal.

The following do work:
* `fin exec npm run build`: Build the app.
* `fin exec npx stylelint ./src/**/*.css`: Run CSS Linting.

## Code standards.

The project is configured with ESLint (which watches for changes while running the development server - see `npm start` avove).

I am also using stylelint to lint CSS files. Run this using `npx stylelint ./src/**/*.css` (also see above).
