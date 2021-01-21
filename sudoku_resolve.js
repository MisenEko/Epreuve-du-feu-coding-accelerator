//il n'y pas 36 façon pour résoudre un tableau. 
//J'avais déjà fait cet exercice il y a longtemps et après comparaison avec mon ancien fichier, j'ai pas trop changé ma façon de penser.

let grid = [
    [0,0,0,0,7,0,0,0,1],
    [0,0,7,9,1,0,6,0,4],
    [6,0,0,0,4,3,9,0,8],
    [9,3,8,0,6,5,0,0,2],
    [7,0,0,4,2,0,0,0,0],
    [0,0,2,0,0,0,0,6,0],
    [0,9,0,0,5,0,1,0,0],
    [0,0,0,1,0,0,5,4,6],
    [0,5,0,0,8,0,2,9,0]
  ]

  function show(grid){
    if(!Array.isArray(grid)){
      if(!Array.isArray(grid[0])){
        console.log("Format invalide")
        return false
      }
      console.log("L'argument doit être un tableau")
      return false
    }
    grid.forEach( (y, i) => {
      if(i % 3 == 0) console.log("------------")
      line = []
      y.forEach( (v, index) => {
        if(index % 3 == 0) line.push("|")
        line.push(v)
      })
      console.log(line.join(""))
    })
    return true
  }
  
  function possible(grid, y, x, n){
    for(let i = 0 ; i < 9 ; i++){
      if(grid[y][i] == n){
        return false
      }
    }
    for(let i = 0 ; i < 9 ; i++){
      if(grid[i][x] == n){
        return false
      }
    }
    x0 = Math.floor(x/3) * 3
    y0 = Math.floor(y/3) * 3
    for(let i = 0 ; i < 3 ; i++){
      for(let j = 0 ; j < 3 ; j++){
        if(grid[y0 + i][x0 + j] == n){
          return false
        }
      }
    }
  
    return true
  }
  let result = 0
  function solve(grid){

    for(let y = 0 ; y < 9 ; y++){

      for(let x = 0 ; x < 9 ; x++){

        if(grid[y][x] == 0){

          for(let n = 1 ; n < 10 ; n++){

            if(possible(grid, y, x, n)){

              grid[y][x] = n
              solve(grid)
              grid[y][x] = 0

            }
          }
          return
        }
      }
    }
    
    result += 1
    console.log(result)
    show(grid) 
    console.log("------------")
  }
  

  console.log("")
  solve(grid)