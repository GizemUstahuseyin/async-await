const yapilacaklar =
[
    {
        baslik:"Yapilacak 1", aciklama:"Sporunu Yap"
    },
    {
        baslik:"Yapilacak 2", aciklama:"Kahvaltını Yap"
    },
    {
        baslik:"Yapilacak 3", aciklama:"Kod Yaz"
    },
    {
        baslik:"Yapilacak 4", aciklama:"Uyu"
    }
];

let yapilacakEleman = document.getElementById("yapilacakList")

function listYazdir(){
    var yapilacakSey = "";
    setTimeout(() => 
    {
        yapilacaklar.forEach(yapilacak => 
        {
                yapilacakSey +=
                `<li>
                    <b>${yapilacak.baslik}</b>
                    <p>${yapilacak.aciklama}</p>
                </li>`;
        })
        yapilacakEleman.innerHTML = yapilacakSey;
    },1000)
};

function yeniYapilacak(is)
{
    return new Promise((resolve,reject) => {
        setTimeout(() => 
            {
                yapilacaklar.push(is);
                const err=false;
                if(!err)
                {
                    resolve(yapilacaklar);
                }
                else
                {
                    reject("Bir hata olustu...");
                }
            },5000)
    });
    
}

var yeniIs ={baslik:"Yapilacak 5", aciklama:"Evlen :)"}

yeniYapilacak(yeniIs)
    .then(response => 
    {
        console.log("Yeni Liste", response);
        listYazdir();
    })
    .catch(hata =>
    {
        console.log(hata);
    })

    listYazdir();

    const p1=Promise.resolve("P1");
    const p2=new Promise((resolve,reject) => 
    // setTimeout(resolve,2000,"P2sonuc"));
    {
        setTimeout(() => {
        resolve("P2 Sonuc");
    },2000);
});
    const p3=123456;
    const p4=fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json());
    
    Promise.all([p1,p2,p3,p4]).then(promises => 
        {
            console.log("promises",promises);
        });