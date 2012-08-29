
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Test Update' });
};

exports.indexWithId = function (req, res){
	res.send(req.params.id);
};