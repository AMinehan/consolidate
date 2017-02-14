var show = function(...args){
  args = args || '';
  console.log('' + args.join('') + this);
  return this;
}
var show = function(...args){

  var constructify = function(obj){
    var result = ''
    for (var i in obj){
      if ((typeof obj[i] === 'object') && (obj[i] !== null)){
        constructify(obj[i]);
      } else {
        result += i + ': ' + obj[i];
      }
    }
    return result;
  }

  var message = constructify(this) + args.join('');
  console.log(message);
  return this;
}

var showObj = function(...args){
  console.log(this + JSON.stringify(args.join(',')));
  return this;
}

var debug = function() {
  debugger;
  return this;
}

var conc = function(...args) {
  args.forEach(arg=>{
    for (var key in arg){
      this[key] = arg[key];
    }
  });
  return this;
}

var reduce = function(func, acc){
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

Object.defineProperty(Array.prototype, 'show', {
  enumerable: false,
  value: function(...args){
  args = args || '';
  console.log(''+args.join(', ')+this);
  return this;
}
});

Object.defineProperty(Object.prototype, 'show', {
  enumerable: false,
  value: showObj
});

Object.defineProperty(String.prototype, 'show', {
  enumerable: false,
  value: show
});

Object.defineProperty(Number.prototype, 'show', {
  enumerable: false,
  value: show
});

Object.defineProperty(Object.prototype, 'concat', {
  enumerable: false,
  value: conc
});

Object.defineProperty(Object.prototype, 'reduce', {
  enumerable: false,
  value: reduce
});

Object.defineProperty(Object.prototype, 'debug', {
  enumerable: false,
  value: debug
});

Object.defineProperty(Array.prototype, 'debug', {
  enumerable: false,
  value: debug
});

Object.defineProperty(Number.prototype, 'debug', {
  enumerable: false,
  value: debug
});

Object.defineProperty(String.prototype, 'debug', {
  enumerable: false,
  value: debug
});




var newify = {'213': 213}
newify.show();
//todo:
//map, each, reduce, filter for Object
//repeat for Object and Array
//
//