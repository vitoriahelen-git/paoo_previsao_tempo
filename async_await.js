const fatorial = (n) => {
    if(n<0) return Promise.reject('Valor nao ser negativo')
    let res = 1 
    for(let i = 2; i <= n; i++)
    return Promise.resolve(res)
}

function fatorialComThenCatch(){
    fatorial(5)
    .then(res=> console.log(res))
    .catch(erro=> console.log(erro))

    fatorial(-1)
    .then(res=> console.log(res))
    .catch(erro=> console.log(erro))
}

fatorialComThenCatch()
//async/await
async function fatorialComAsyncAwait(){
    const res1 = await fatorial(5)
    console.log(res1)
    try{
        const res2 = fatorial(-1)
        console(res2)
    }
    catch(e){
        console.log(e)
    }
}
fatorialComAsyncAwait()


//async 
// function hello(nome){
//     return `Olá, ${nome}`
// }
// //exercicio: escrever a função hello de modo que ela desenvolva uma promise ja resolvida 
// //que da acesso ao texto que atual produz 
// hello(`Ana`).then(texto=> console.log(texto))
// console.log(hello('Ana'))
// console.log('Terminar....')
