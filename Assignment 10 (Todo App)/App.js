var list  = document.getElementById("list");

function AddTodo(){
    var Todoitem = document.getElementById("Todo-item")

    //create li tag  with text node 
    var li = document.createElement("li");
    var liText = document.createTextNode(Todoitem.value)
    li.appendChild(liText)

    //create Delete Button 
    var dltBtn= document.createElement("button") 
    var deleteText = document.createTextNode("DELETE") 
    dltBtn.setAttribute("class","btn")
    dltBtn.setAttribute("onclick","deleteItem(this)")
    dltBtn.appendChild(deleteText)

    //create Edit Button 
    var editBtn= document.createElement("button") 
    var editText = document.createTextNode("Edit")
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick","editItem(this)")

    li.appendChild(dltBtn)
    li.appendChild(editBtn)

    list.appendChild(li)

    Todoitem.value= ""
 
}   
function deleteItem(m){
   m.parentNode.remove()
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter Edit Value",val)
    e.parentNode.firstChild.nodeValue = editValue
}

function deleteAll(){
    list.innerHTML = ""
}