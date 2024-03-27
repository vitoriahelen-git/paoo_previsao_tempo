require('dotenv').config()
const axios = require ('axios')

// const APPID = process.env.APPID
// const Q = process.env.Q
// const UNITS = process.env.UNITS

const {
    APPID,
    Q,
    UNITS,
    LANGUAGE,
    CNT,
    URL_BASE
} = process.env

const url = `${URL_BASE}?appid=${APPID}&q=${Q}&units=${UNITS}=&lang=${LANGUAGE}&cnt=${CNT}`


//usando aync/await, exibir as decrições de todas as previsoes que tenham 
//minima ou maximo de 25 
const exercicioAsyncAwait = async() => {
    const resultado = await axios.get(url)
    const data = resultado.data
    const list = data.list
    list.forEach(e => {
        console.log(e)
        console.log('************************')
    })
    list.forEach((e) => {
        console.log(e['main']['temp_min'] <= 27? e ['weather'][0][discription]  : '')
    })
}

//console.log(url)
// axios.get(url)
// .then(res =>{
//     console.log('data')
//     console.log(res.data)
//     console.log('***************************')
//     return res.data
// })
// .then(outroNome =>{
//     console.log('cnt')
//     console.log(outroNome.cnt)
//     console.log('***************************')
//     return outroNome
// })
// .then(res => {
//     console.log('list')
//     console.log(res.list)
//     console.log('***************************')
//     return res
// })
// .then(res =>{
//     console.log('temp min do primeiro')
//     console.log(res.list[0].main['temp_min'])
//     console.log('***************************')
// })
// .then(res => {
//     const list = res ['list']
//     for(let previsao of list){
//         const main = previsao.main
//         const temp_min = main.temp_min
//         const temp_max = main.temp_max
//         const humidity = main.humidity
//         console.log(`
//             Temp min: ${temp_min},
//             Temp max: ${temp_max},
//             Humidity: ${humidity}
//         `)
//     }
//     console.log('********************************')
//     return res
//     //interar sobre a lista, mostrando temperatura maxima, minima e umidade de cada previsao
// })
// .then(res => {
//     //interar sobre a lista, mostrando a descricao de cada previsao
//     for(let i = 0; i < res.list.leght; i++){
//         console.log(`
//             Description: ${res.list[i].weather[0].description}
//         `)
//     }
//     console.log('___________________________________')
//     return res
// })
// .then(res => {
//     //responder se tem pelo menos uma previsao cuja senscao temica seja menor que 30 
//     if(res.list.find(e => e.main.fells_like < 30))
//         console.log(`Sim: ${esultado.main.feels_like}`)

// })
// // console.log(process.env.APPID)

// const appid =  '1df97c02171f43ca3f6c88f7d758180f'
