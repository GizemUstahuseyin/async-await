async function postGetir(){
    const cevap = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await cevap.json();

    console.log(data);
}
postGetir();