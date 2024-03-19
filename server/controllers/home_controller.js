// Import any required services or models here
// const homeService = require('../services/home_service');
const fs = require('fs');

exports.create_legal = async (req, res) => {
  try {
    const { params } = req.params;
    // Declaro en variales los parámetros que vienen desde el frontend
    texto_creado = req.body.texto_creado;
    marca = req.body.marca;
    // usuario = req.body.usuario
    
    // Declarar una variable fecha para obtener la cantidad de segundos
    date = new Date();
    segundos = date.getTime().toString();
    
    // Crear el nombre del archivo con los segundos para que sea único. Por ej: legales_123123123123.txt
    nombre_archivo = "legales_" + segundos + ".txt";
    
    // Crear un diccionario con el contenido del archivo
    contenido_archivo = {
      "fecha_hora": date.toLocaleString(),
      "legal": texto_creado,
      "marca": marca,
      // "usuario": usuario
    }
    carpeta = 'legales/'

    // Crear el archivo de texto
    // El primer parámetro es donde se guarda, es decir la carpeta + el nombre del archivo
    // El segundo parámetro es el contenido del archivo, representado en String
    // El tercer parámetro es una función que se ejecuta cuando se termina de crear el archivo
    fs.writeFile(carpeta + nombre_archivo, JSON.stringify(contenido_archivo), (error) => {
      // Si hay un error, imprimalo en la consola del servidor
      if (error) {
        console.error('Ocurrió un error al guardar el archivo:', error);
      } else {
        console.log('Se creó el archivo exitosamente!');
      }
    });

    // Renderizo un JSON con un mensaje de éxito, que se mostrará en el frontend
    res.json({success: true, mensage: 'Legal creado'});
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.admin_legal = async (req, res) => {
  try {
    const { params } = req.params;
    // Leo los archivos de la carpeta legales
    const archivos = fs.readdirSync('legales/');
    // Creo un array vacio de legales
    const legales = [];
    // Recorro los archivos y lleno el array de legales con el contenido de los archivos
    archivos.forEach(archivo => {
      // Leo el archivo
      const contenido = fs.readFileSync('legales/' + archivo, 'utf-8');
      // Parseo el contenido del archivo y lo agrego al array de legales
      legales.push(JSON.parse(contenido));
    });
    // Renderizo la vista admin y le paso el array de legales
    res.render('admin', { legales: legales });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};