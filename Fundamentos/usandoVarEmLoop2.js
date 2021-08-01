var funcs = []

for (var i = 0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()
funcs[8]()     // IMprimi 10 nos dois casos por que o var nao respeita escopo de função