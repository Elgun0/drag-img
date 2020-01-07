var drp=document.querySelector(".drop")
drp.addEventListener("dragover",function(e){
    e.preventDefault();
    this.classList.add("active");
})
drp.addEventListener("dragleave",function(){
    this.classList.remove("active");
})
drp.addEventListener("drop",function(e){
    e.preventDefault();
    this.classList.remove("active");

    FillTable(e.dataTransfer.files)
})

function FillTable(images){
    for(var img of images){
        if(img.type.match("image*")){
            const tr=document.createElement("tr")
            const reader=new FileReader();
            reader.onload=function(fl){
                const imgtd=document.createElement("td")
                const myimg=document.createElement("img")
                myimg.src=fl.target.result;
                myimg.width=200;
                myimg.height=200;
                imgtd.appendChild(myimg)
                tr.insertBefore(imgtd,tr.firstChild)
            }
            reader.readAsDataURL(img);
            const nametd=document.createElement("td");
            nametd.innerText=img.name
            const lastdatetd=document.createElement("td")
            lastdatetd.innerText=img.lastModifiedDate;
            const typetd=document.createElement("td")
            typetd.innerText=img.type;
            const removetd=document.createElement("td")
            let itag=document.createElement("i")
            itag.className="fas fa-times fa-2x";
            itag.style="color:red;cursor:pointer"
            removetd.appendChild(itag)
            
            tr.appendChild(nametd)
            tr.appendChild(lastdatetd)
            tr.appendChild(typetd)
            tr.appendChild(removetd)
            itag.onclick=function(){
                this.parentNode.parentNode.remove()
            }
            
            document.querySelector(".main-table tbody").appendChild(tr)
        }
    }
}