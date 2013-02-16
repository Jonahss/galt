Function.prototype.galt = function(){
	if (this.callback)
		this.callback.call(this.callback);
};

var funcs = [];
funcs.push(function(){
	console.log("foo1");
	this.galt();
	console.log("moo1");
	}
);funcs.push(function(){
	console.log("foo2");
	this.galt();
	console.log("moo2");
	}
);funcs.push(function(){
	console.log("foo3");
	this.galt();
	console.log("moo3");
	}
);funcs.push(function(){
	console.log("foo4");
	this.galt();
	console.log("moo4");
	}
);funcs.push(function(){
	console.log("foo5");
	this.galt();
	console.log("moo5");
	}
);funcs.push(function(){
	console.log("foo6");
	this.galt();
	console.log("moo6");
	}
);

var func_i = 0;
for(var x = 0; x < funcs.length; x++){
	if (x < funcs.length-1){
		console.log(x);
		funcs[x].callback = funcs[x+1];
	}
};
funcs[0].call(funcs[0]);