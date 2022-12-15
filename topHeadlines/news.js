let india_top_headlines="https://newsapi.org/v2/top-headlines?country=in&apiKey=fcd34a001606454d9a4b713c7e0784dc";
fetch(india_top_headlines)
.then((res)=>{
    return res.json();
}).then((res)=>{
    renderDom(res.articles);
})
let renderDom = (data)=>{
    let cont = document.querySelector("#top");
    cont.innerHTML="";
     let data1 = data.slice(0,10);
     data1.forEach((el)=>{
       let div = document.createElement("div");
       let div1= document.createElement("div");
       let div2= document.createElement("div");
       let img=document.createElement("img");
       img.src=el.urlToImage;
       let h1=document.createElement("h1");
       h1.innerText=el.title;
       let p= document.createElement("p");
       p.innerText=el.content;
       let p1=document.createElement("p");
       p1.innerText=el.description;
       div.append(img);
       div1.append(h1,p,p1);
       div2.append(div,div1);
       cont.append(div2);
     })
}

 
let search = ()=>{
    let tesla="https://newsapi.org/v2/top-headlines?q=tesla&apiKey=fcd34a001606454d9a4b713c7e0784dc";
    fetch(tesla)
    .then((res)=>{
        return res.json();
    }).then((res)=>{
        renderDom(res.articles);
    })
}
let id;
let debounce=(func,delay)=>{
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(()=>{
        func()
    },delay);
}