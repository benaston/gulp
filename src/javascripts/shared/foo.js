;(function(module) {
	console.log(module);

	function Foo() {}
	Foo.namespace = 'shared';

	module.exports = Foo;
}(module))