let args = process.argv.slice(2);

let n = args[0];

    
for(let i = 1 ; i <= n ; i ++){

    for (let s = n-1; s >= i; s--) {
        process.stdout.write(' ')
    }
    for (let h = 1; h <= i; h++) {
        process.stdout.write('#')
    }
    process.stdout.write('\n')

}


