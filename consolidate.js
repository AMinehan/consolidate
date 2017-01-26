var log = function(arg){
  arg = arg || '';
  console.log(''+arg+this);
  return this;
}

Object.defineProperty(Array.prototype, 'log', {
  enumerable: false,
  value: log
});

Object.defineProperty(Object.prototype, 'log', {
  enumerable: false,
  value: log
});

Object.defineProperty(Object.prototype, 'concat', {
  enumerable: false,
  value: function(...args) {
    args.forEach(arg=>{
      for (var key in arg) {
        this[key] = arg[key];
      }
    });
  }
  return this;
});

Object.defineProperty(Object.prototype, 'reduce', {
  enumerable: false,
  value: function(func, acc){
    var keys = Object.keys(this);
    var i;
    if (arguments.length === 1){
      i = 1;
      var acc = this[keys[0]]
    } else {
      i = 0;
    }
    for (; i < keys.length; i++){
      acc = func(acc, keys[i], this[keys[i]], i, this)
    }
    return acc;
  }
});



//todo:
//map, each, reduce, filter for Object
//repeat for Object and Array
//
//