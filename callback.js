const yapilacaklar = [
    { baslik: "Yapılacak 1", aciklama: "Kedilerin kumunu temizle" },
    { baslik: "Yapılacak 2", aciklama: "Derse git" },
    { baslik: "Yapılacak 3", aciklama: "Vakit kalırsa evi temizle" },
];


function listYazdir(){

    var yapilacakSey = "";

    setTimeout(() => {
        yapilacaklar.forEach(yapilacak => {
            yapilacakSey += `
                <li>    
                    <b> ${yapilacak.baslik} </b> 
                    <p> ${yapilacak.aciklama} </p>
                </li> `;
        });

        yapilacakEleman.innerHTML = yapilacakSey;
    }, 1000)
}

let yapilacakEleman = document.getElementById("yapilacakList");


function yeniYapilacak(is){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            yapilacaklar.push(is);

            const err = false;
            if(!err){
                resolve(yapilacaklar);
            }
            else{
                reject("Bir hata oluştu");
            }
        }, 2000);
    })
}

var yeniIs = { baslik: "Yapılacak 4", aciklama: "Esinin dogum gununu kutla" }

yeniYapilacak(yeniIs)
.then(response => {
    console.log("Yeni liste ", response);
    listYazdir();
}).catch(hata =>{
    console.log(hata);
}); 

listYazdir();


//Promise ALL kullanımı

const p1 = Promise.resolve("P1");
const p2 = new Promise((resolve, reject) => {
    //setTimeout(resolve, 2000, "p2sonuc"));        
    setTimeout(() => {
        resolve("P2 sonuc");
    }, 2000)
});
const p3 = 123456;
const p4 = fetch("https://jsonplaceholder.typicode.com/comments")
                .then(response => response.json()) 

Promise.all([p1, p2, p3, p4]).then(promises => {
    console.log("Promises", promises);
})