Rainbow Cli
===========

[![Build Status](https://travis-ci.org/evle/rainbow-ssr.svg?branch=master)](https://travis-ci.org/evle/rainbow-ssr) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Create react SSR App with no build configuration.

If something doesn’t work and need help please [file an issue](https://github.com/evle/rainbow-ssr/issues/new)

## Quick Overview

```javascript
npx rainbow-cli init app-name
cd app-name
npm start
```

Then open http://localhost:4000/ to see your app. When you’re ready to deploy to production, create a minified bundle with npm run build. 

**Important!!!**: don't use it in production environment, Rainbow SSR is not reliable and stable, some known issues not fixed yet and I'm working on it.

## Why Rainbow 

Rainbow was created for building react SSR fast, you don’t need to install or configure tools like webpack or Babel. They are preconfigured and hidden so that you can focus on the code.

On the other hand, Rainbow SSR provide you using `suspense` on the server side, it means no need extra library like loadable.js for dynmaic loading.

## License

Rainbow SSR is open source software licensed as MIT.