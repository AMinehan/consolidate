Object.defineProperty(Array.prototype, 'log', {
  enumerable: false,
  value: function(a){console.log(''+a+this); return this;}
});

Object.defineProperty(Object.prototype, 'log', {
  enumerable: false,
  value: function(a){console.log(''+a+this); return this;}
});
