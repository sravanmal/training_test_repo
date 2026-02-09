const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
	const { ProductsSet } = this.entities;
	const service = await cds.connect.to('Northwind');


	this.on('READ', ProductsSet, request => {
		return service.tx(request).run(request.query);
	});

	this.on('CREATE', ProductsSet, async (req) => {
		// here you call the remote API or implement logic
		const payload = req.data;
		console.log("PO create request:", payload);
		console.log(req.query)
		return service.run(INSERT.into(ProductsSet).entries(payload));
	});

});