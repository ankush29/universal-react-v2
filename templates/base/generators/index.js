/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const componentGenerator = require('./component/index.js');
const hooksGenerator = require('./hooks/index.js');

module.exports = (plop) => {
  plop.setGenerator('components', componentGenerator);
  plop.setGenerator('hooks', hooksGenerator);
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};
