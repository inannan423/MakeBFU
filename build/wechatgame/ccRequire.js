let moduleMap = {
'assets/internal/index.js' () { return require('assets/internal/index.js') },
'assets/font/index.js' () { return require('assets/font/index.js') },
// tail
};

window.__cocos_require__ = function (moduleName) {
    let func = moduleMap[moduleName];
    if (!func) {
        throw new Error(`cannot find module ${moduleName}`);
    }
    return func();
};