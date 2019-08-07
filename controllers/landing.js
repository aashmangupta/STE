exports.get_landing = function(req, res, next) {
	res.render('landing', { title: 'Express' });
}

exports.submit_lead = function(req, res, next) {
	console.log("lead_email:", req.body.lead_email); 
	console.log("Done printing email...\n");
	res.redirect('/');
}
