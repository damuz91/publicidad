const fs = require('fs');

// Esta función recibe los datos desde el Frontend y los guarda en un archivo de texto
exports.create_legal = async (req, res) => {
  try {
    // Declaro en variables los parámetros que vienen desde el frontend
    const texto_creado = req.body.texto_creado;
    const marca = req.body.marca;
    const nombre_usuario = req.body.nombre_usuario;
    const tipoEvento = req.body.evento;
    
    // Declarar una variable fecha para obtener la cantidad de segundos
    const date = new Date();
    const segundos = date.getTime().toString();
    
    // Crear el nombre del archivo con los segundos para que sea único. Por ej: legales_123123123123.txt
    const nombre_archivo = "legales_" + segundos + ".txt";
    const carpeta = 'legales/';

    // Crear un diccionario con el contenido del archivo
    const contenido_archivo = {
      "fecha_hora": date.toLocaleString(),
      "legal": texto_creado,
      "marca": marca,
      "nombre_usuario": nombre_usuario,
      "evento": tipoEvento,
    };

    // Crear la carpeta si no existe
    if (!fs.existsSync(carpeta)) {
      fs.mkdirSync(carpeta);
    }

    // Crear el archivo de texto
    fs.writeFile(carpeta + nombre_archivo, JSON.stringify(contenido_archivo), (error) => {
      if (error) {
        console.error('Ocurrió un error al guardar el archivo:', error);
        res.status(500).json({ error: 'Error al guardar el archivo' });
      } else {
        console.log('Se creó el archivo exitosamente!');
        res.json({ success: true, message: 'Legal creado' });
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Esta función presenta una interfaz para que el usuario pueda ver los legales que se han creado
exports.admin_legal = async (req, res) => {
  try {
    // Leo los archivos de la carpeta 'legales'
    const archivos = fs.readdirSync('legales/');
    const legales = [];

    // Recorro los archivos y lleno el array de legales con el contenido de los archivos
    archivos.forEach(archivo => {
      const contenido = fs.readFileSync('legales/' + archivo, 'utf-8');
      legales.push(JSON.parse(contenido));
    });

    console.log(legales)

    // Renderizo la vista admin y le paso el array de legales
    res.render('admin', { legales: legales });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Esta función presenta una vista para que un abogado pueda ver solo los legales correspondientes a sus marcas
exports.vista_abogado = async (req, res) => {
  try {
    const { abogado } = req.params;

    // Definir las marcas que cada abogado puede ver
    const marcasPorAbogado = {
      'Maria': ["Naf Naf", "Vt"],
      'Jota': ['AE', "Gs"],
      'Valen': ['BS', 'Che', 'MNG'],
      "Pao": ["Es", "Kl", "Cr"],
      "Cami": ["Rf", "AB"],
      "Cata": ["Su", "Ou", "Amcno"]
    };
// Validación abogado
if (!marcasPorAbogado.hasOwnProperty(abogado)) {
  return res.status(404).json({ error: 'Abogado no encontrado' });
}
    

    const marcasExistentes = marcasPorAbogado[abogado] || []; // Marcas que el abogado puede ver
    const archivos = fs.readdirSync('legales/');
    const legales = [];

    archivos.forEach(archivo => {
      const contenido = fs.readFileSync('legales/' + archivo, 'utf-8');
      const legal = JSON.parse(contenido);

      // Filtrar los legales según las marcas permitidas para el abogado
      if (marcasExistentes.includes(legal.marca)) {
        legales.push(legal);
      }
    });

    res.render('vista_abogado', { legales: legales, abogado: abogado });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
