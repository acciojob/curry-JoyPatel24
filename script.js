function curry(callback) {
  function curriedFn(...args){
	  if(args.length >= callback.length){
		  return callback(...args);
	  }else{
		  return (...moreArgs) => curriedFn(...args, ...moreArgs);
	  }
  }
	return curriedFn;
}

module.export=curry
