;(function(module) {
	console.log(module);

	function Foo() {}
	Foo.prototype.namespace = 'shared';

	module.exports = namespaceify(Foo);
}(typeof module !== 'undefined' ? module : app))