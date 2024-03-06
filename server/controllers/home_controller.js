// Import any required services or models here
// const homeService = require('../services/home_service');
const fs = require('fs');

exports.create_legal = async (req, res) => {
  try {
    const { params } = req.params;
    contenido = req.body.texto_creado;
    
    nombre_archivo = 'legal.txt';
    // Write to the file
    fs.writeFile(nombre_archivo, contenido, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('File has been successfully written.');
      }
    });

    // const newExample = await exampleService.createExample(name);
    console.log("He recibido desde el frontend: ", req.body.texto_creado);
    res.json({success: true, mensage: 'Legal creado'});
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


