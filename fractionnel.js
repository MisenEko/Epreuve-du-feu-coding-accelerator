let args = process.argv.slice(2);
let n = args[0];
let number = 1
let result = 1

function factoriel(n) {

    result = result * (number+1)
    number++
    let nextNumber = n - 1;
    
    console.log(result)

    if (nextNumber > 1) {
        factoriel(nextNumber);
    }
}

factoriel(n)