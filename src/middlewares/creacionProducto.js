const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req,file,callback) => { /* Ruta hacia donde llevo los archivos del formulario */
        callback(null, './public/images/products')
    }, 
    filename:  (req,file,callback) => {/* Nombre del elemento al ser cargado y procesado por multer */
        callback(null, `img-${Date.now()}${path.extname(file.originalname)}`)
    }   
})

const upload = multer({
    storage
})

module.exports = multer({
    storage
})