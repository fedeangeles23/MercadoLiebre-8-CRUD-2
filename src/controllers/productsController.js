const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		
		res.render('products', {
			products,
			toThousand
		})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const id = +req.params.id;

		let product = products.find(product => product.id === id)

		return res.render('detail', {
			product,
			toThousand
		})
	},

	// Create - Form to create
	create: (req, res) => {
		return res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		return res.send(req.body)	/* Checkear los datos del [{}] */
	},

	// Update - Form to edit
	edit: (req, res) => {
		const id = +req.params.id;

		let product = products.find(product => product.id === id)

		return res.render('product-edit-form', {
			productToEdit: product,
			toThousand
		})
	},
	// Update - Method to update
	update: (req, res) => {
		return res.send("Producto a actualizar")
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		return res.send("Producto a eliminar")
	}
};

module.exports = controller;