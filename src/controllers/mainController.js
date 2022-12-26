const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); /* Función que pide un número y a ese número lo va a transformar a un string y le va a hacer un reemplazo */
/* Expresiones regulares para validaciones front */

const controller = {
	index: (req, res) => {
		let productsInSale = products.filter( product => product.category === "in-sale");
		let productVisit = products.filter(product => product.category === "visited")

		/* res.send(productsInSale) */
		/* res.send(productVisit) */
		res.render('index',{
			productsInSale,
			productVisit,
			toThousand
		});
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
