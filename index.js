var path = require('path');
var parse = require('./lib/parse.js');

module.exports = function(content, file, conf){
	var query;

	query = conf.query || ['include', 'extends'];
	query.forEach(function(item){
		content = parse(item, content, conf)
	});

	return content;
}







































