var path = require('path');
var config = {};

module.exports = {

	// 添加后缀名
	extname: function(src){
		return path.extname(src) === config.extname ? src : src += config.extname;
	},

	// 获取组件id
	id: function(src){
		return path.basename(src) === src ?
			src.split('.')[0]:
			src.split('/')[0];
	},

	// 获取相对地址
	src: function(src, conf){
		return src === path.basename(src) ?
			path.join(this.id(src), this.extname(src)) : this.extname(src);
	},

	target: function(type, repo, src, conf){
		config.extname = conf.extname ? '.' + conf.extname.replace(/^\./, '') : '';
		return [type, path.join(repo, this.src(src))].join(' ');
	}
}