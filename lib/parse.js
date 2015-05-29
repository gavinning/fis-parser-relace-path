var path = require('path');
var lib = require('./lib.js');

module.exports = function(type, content, conf){
	var arr;
	var reg = new RegExp(type + ' +([^\n]+)', 'ig');
	var dirname = fis.project.getProjectPath();
	arr = content.match(reg) || [];
	arr.forEach(function(item){
		var src, target, common, url, arr;

		// 过滤不符合处理条件的情况
		if(item.indexOf(type) < 0 || item.indexOf(':') < 0) return;

		url = item.replace(type + ' ', '');
		arr = url.split(':');
		src = arr[1];
		common = arr[0];

		target = lib.target(type, conf.replace[common], src, conf);
		content = content.replace(item, target);
	});
	return content;
}