let args = process.argv.slice(2);
let value = args.join(' ')
let length = 0
value = value.toLowerCase();

value = value.split('')
length = value.length


for(let i = 0 ; i < length; i++){
    if(i%2!=0){
        value[i]=value[i].toUpperCase()        
    }    
}
console.log( value.join(' ') )



