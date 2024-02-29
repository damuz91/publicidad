// Import any required models here
// const Example = require('../models/example');

exports.createExample = async (name) => {
  const example = new Example({ name });
  // return await example.save();
  return true;
};