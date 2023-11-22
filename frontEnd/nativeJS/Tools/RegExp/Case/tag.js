const tag = {
	'a': /<a\s[\s\S]*?href=(('|")([\s\S]+?)\2)[\s\S]*?>[\s\S]*?<\/a>/, // 能匹配页面中所有a标签，以及a标签中href链接地址
	'script': /<script[\s>][\s\S]+?<\/script>/
};
