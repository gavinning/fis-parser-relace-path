# fis-parser-replace-path

----

#### 替换源码文件中的自定义组件路径

```
npm install fis-parser-replace-path -g
```


```
// example 1
// fis setting
fis.config.set('modules.parser.jade', ['replace-path']);
fis.config.set('settings.parser.replace-path', {
    extname: 'jade',
    // 默认查询include和extends，可覆盖
    query: ['include', 'extends'],
    replace: {
        "common": "Modules"
    }
});

// index.jade
extends common:layout 				=> extends Modules/layout/layout.jade
include common:header 				=> include Modules/header/header.jade
include common:header.test 			=> include Modules/header/header.test.jade
include common:nav.jade 			=> include Modules/nav/nav.jade
include common:nav/nav.jade 		=> include Modules/nav/nav.jade
include common:nav/nav-live.jade 	=> include Modules/nav/nav-live.jade
```

```
// example 2
// fis setting
fis.config.set('modules.parser.jade', ['replace-path']);
fis.config.set('settings.parser.replace-path', {
    query: ['include'],
    replace: {
        "common": "Modules/src"
    }
});

// index.jade
extends common:layout 				=> extends common:layout
include common:header 				=> include Modules/src/header/header
include common:header.test 			=> include Modules/src/header/header.test
include common:nav.jade 			=> include Modules/src/nav/nav.jade
include common:nav/nav.jade 		=> include Modules/src/nav/nav.jade
include common:nav/nav-live.jade 	=> include Modules/src/nav/nav-live.jade
```