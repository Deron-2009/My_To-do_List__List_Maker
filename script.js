const text=document.querySelector("#text")
const push=document.querySelector("#push")
const pop=document.querySelector("#shift")
const shift=document.querySelector("#unshift")
const unshift=document.querySelector("#pop")
const list=document.querySelector("#list")
const listItems = []
let index = 0
function my(){
    list.innerHTML = "";
    text.value = ""
    for (let i = 0; i < listItems.length; i++) {
        const item = document.createElement("p")
        item.textContent = listItems[i]
        list.append(item)
    }
}
unshift.addEventListener("click",
function(){
    if(text.value){
        listItems.unshift(text.value)
        my()
    }
})
shift.addEventListener("click",
function(){
    listItems.shift()
    my()
})
push.addEventListener("click",
function(){
    if(text.value){
        listItems.push(text.value)
        my()
    }
})
pop.addEventListener("click",
function(){
    listItems.pop()
    my()
})