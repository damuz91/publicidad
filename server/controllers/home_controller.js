// Import any required services or models here
// const homeService = require('../services/home_service');
const fs = require('fs');

exports.create_legal = async (req, res) => {
  try {
    const { params } = req.params;
    contenido = req.body.texto_creado;
    marca = req.body.marca;
    
    // Obtener el epoch en milisegundos
    date = new Date();
    fecha_hora = date.getTime().toString();
    // Crear el nombre del archivo con el epoch
    nombre_archivo = "legales/" + fecha_hora + ".txt";
    contenido_archivo = {
      "fecha_hora": date.toLocaleString(),
      "legal": contenido,
      "marca": marca
    }
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


