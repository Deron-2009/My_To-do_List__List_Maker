const text=document.querySelector("#text")
const push=document.querySelector("#push")
const pop=document.querySelector("#pop")
const shift=document.querySelector("#shift")
const unshift=document.querySelector("#unshift")
const list=document.querySelector("#list")
const listItems = []
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