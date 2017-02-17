var show = function(...args){

  args = args || '';
  if (args.length > 0) {
    console.log('' + args.join(', ') + this);
  } else {
    console.log(this);
  }
  return this;

  // var constructify = function(obj){
  //   var result = ''
  //   for (var i in obj){
  //     if ((typeof obj[i] === 'object') && (obj[i] !== null)){
  //       constructify(obj[i]);
  //     } else {
  //       result += i + ': ' + obj[i];
  //     }
  //   }
  //   return result;
  // }

  // var message = constructify(this) + args.join('');
  // console.log(message);
  // return this;
}

// var showObj = function(...args){
//   if (args.length > 0){
//     console.log(this + JSON.stringify(args.join(',')));
//   } else {
//     console.log(this);
//   }
//   return this;
// }

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
  var acc;
  if (arguments.length === 1){
    acc = {keys[0]: this[keys[0]]}
  }
  for (var i = 0; i < keys.length; i++){
    acc = func(acc, this[keys[i]], keys[i], this)
  }
  return acc;
}

var exec = function(func, i){
  if (arguments.length < 2) {
    var i = 1;
  }
  for (; i > 0; i--) {
    func(this)
  }
  return this;
}

Object.defineProperty(Array.prototype, 'show', {
  enumerable: false,
  value: show
});

Object.defineProperty(Object.prototype, 'exec', {
  enumerable: false,
  value: exec
})

Object.defineProperty(Array.prototype, 'exec', {
  enumerable: false,
  value: exec
})

Object.defineProperty(Object.prototype, 'show', {
  enumerable: false,
  value: show
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
newify.reduce(function(a, b, c){
  a[b] = c + 1
  return a;
}, {}).show();
//todo:
//map, each, reduce, filter for Object
//repeat for Object and Array
//
//