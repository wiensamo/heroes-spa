# React + Vite + react-routerV6
clone repository

  later cloned repo write 
      * npm install
      * npm run dev

  Install test library follow the  next steps:
    1. With commands in terminal write:
        yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
        yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
    2. If use the Fetch API in the project 
        yarn add --dev whatwg-fetch
    3. update scripts in the package.json
       "test": "jest --watchAll"
    4. create the babel config babel.config.js
         module.exports ={
            presets: [
              [ '@babel/preset-env', { targets: { esmodules: true } } ],
              [ '@babel/preset-react', { runtime: 'automatic' } ],
          ],
          };
    5.Optional but eventualy needly crrate jest config and setup
      jest.config.js
        module.exports = {
           testEnvironment: 'jest-environment-jsdom',
           setupFiles: ['./jest.setup.js']
            }
      jest.setup.js
      only if you need FetchAPI testing
        import 'whatwg-fetch'; // <-- yarn add whatwg-fetch

  This application is an example of SPA or single page application; method for making web pages with the feature of not changing pages and resulting in a faster page compared to others. 
