let args = process.argv.slice(2);
let firstwrd = args[0];
let secondwrd = args[1];

// pour me faire pardonner sur l'exercice du sort, j'ai fait un truc un peu plus technique pour les anagrammes. ;)

function anagrame(firstwrd, secondwrd)
{
    firstwrd = firstwrd.replace(/\s/g, '').toLowerCase().split('').sort().join('')   
    secondwrd = secondwrd.replace(/\s/g, '').toLowerCase().split('').sort().join('')   
    console.log(firstwrd)
    console.log(secondwrd)

    if(JSON.stringify(firstwrd)==JSON.stringify(secondwrd)){
        console.log('ce sont des anagramme')
    }else {
        console.log('nop');
    }
}



anagrame(firstwrd, secondwrd)