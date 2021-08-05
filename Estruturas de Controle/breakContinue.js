const nums = [1, 2 , 3 , 4 , 5, 6 , 7, 8, 9, 10]

for (x in nums) {
    if (x == 5){
     break  // break vai funcionar no for e nao no if
    }
    console.log(` x = ${nums[x]}`)
    
}

for (y in nums ) {
    if(y == 5){
        continue    //ele vai pular o valor que interrompe
    }
    console.log(`${y}  === ${nums[y]}`)
}


externo: for (a in nums){ //nao usar isso
    for(b in nums){
        if (a == 2 && b ==3){
        break externo}
        console.log(` = ${a}, ${b}`)
    }
    
}