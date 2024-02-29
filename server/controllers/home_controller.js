// Import any required services or models here
// const homeService = require('../services/home_service');

exports.create_legal = async (req, res) => {
  try {
    debugger;
    const { params } = req.params;
    // const newExample = await exampleService.createExample(name);
    console.log("He recibido desde el frontend: ", req.body.texto_creado);
    res.json({success: true, mensage: 'Legal creado'});
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};