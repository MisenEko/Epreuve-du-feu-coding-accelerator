let args = process.argv.slice(2);

let array = args;

//désolé pour les bonus, j'en ai trop mangé du tri pendant mes formations, je vais utiliser sort de javascript haha

console.log(array.sort(function(a, b) {
    return b - a;
  }));

