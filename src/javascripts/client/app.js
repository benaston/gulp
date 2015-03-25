window.rootNamespace = {};

window.module = {
    set exports(value) {
        if (!value.name || !value.namespace) {
            throw 'name and namespace must be present.';
        }

        window.rootNamespace[value.namespace + '/' +  value.name] = value;
    }
}

/**
 * cb is optional.
 */
window.require = function(name, cb) {
    if (cb) {
        return cb(window.rootNamespace[name]);
    }

    return window.rootNamespace[name];
};
