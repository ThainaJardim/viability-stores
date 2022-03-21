const axios = require('axios');
const fs = require('fs').promises
// const dataJson = require("./dataJson.json");
// const result = require("./message.json");
const dataJson = require("./dataJsonExtra.json");
const result = require("./extraApi.json");


// let ceps = ['01150000','11025003','11700020','03635001','05324110','03180001','01220010','01523010','06036007','64019870','06310240','11075001','02120000','07042040','08210230','50731000','51021020','52021180','07130000','60411260','20910060','11702200','25515270','20560000','22220001','28890000','04280010','04617006','03057040','04010000','04136000','04132002','04447020','09951550','09911160','02430000','21021522','03156000','12942530','11533000','11065001','11085202','11025000','11020000','11750000','11701500','11320001','09611000','02919100','04355000','05858000','04144000','11704520','13405011','08766000','04366001','04836130','04888190','04920005','06850000','04844610','04846010','20230015','20250450','25645320','02991000','02924000','27937590','04948030','27910340','28970000','04165001','09190360','06380021','02810000','11440001','05107001','02811000','06260070','09572300','01511001','02861190','09820000','11443411','08210590','03717000','11730000','11740000','06016004','11618107','53030010','50070070','58052200','01502000','05777001','25950000','01307001','03363000','28013140','21230354','24420005','25953007','28909001']

// async function getStore(cep){
//     try {
//         const { data } = await axios.get(
//             'https://api.gpa.digital/ex/v2/delivery/ecom/' + cep,
//           );
//           const storeName = data.content.deliveryTypes.map(delivery => ({name: delivery.storeName, id:delivery.storeid}))

//           const result = {
//             cep,
//             stores: storeName
//             }

//          await fs.appendFile('extra.txt', `${JSON.stringify(result)},`, function (err) {
//             if (err) throw err;
//             console.log('Saved!');
//           });
        
//     } catch (error) {
//         console.log('Erro cep ' + cep)
//     }
   
// }
// function run(){
// for (c of ceps){

// getStore(c)

// }}

//console.log(run())

console.log(checkStore())

function checkStore(){

    for (loja of dataJson){
        let cepPlanilha = loja.CEP
        let lojasEncontradas = result.filter(x => 
            x.cep === cepPlanilha
        )
        if (lojasEncontradas.length > 0){
        lojasEncontradas[0].stores.forEach(x => {
            var nomeDaLoja = loja["NOME DA LOJA"].toLocaleLowerCase('en-US').normalize('NFD').replace(/[\u0300-\u036f]/g, "")
            var xname = x.name.toLocaleLowerCase('en-US').normalize('NFD').replace(/[\u0300-\u036f]/g, "")
//        console.log('x' + xname)
// console.log('nome' + nomeDaLoja)s
            if (nomeDaLoja.includes(xname) | xname.includes(nomeDaLoja) )
            console.log(x.id )
           
        })

    } else {
        console.log('Não encontrada lojas para o cep ' + loja.CEP + ' de nome ' + loja["NOME DA LOJA"])
    
    }
  
    }

}


