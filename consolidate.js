Object.defineProperty(Array.prototype, 'log', {
  enumerable: false,
  value: function(a){console.log(''+a+this); return this;}
});

Object.defineProperty(Object.prototype, 'log', {
  enumerable: false,
  value: function(a){console.log(''+a+this); return this;}
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