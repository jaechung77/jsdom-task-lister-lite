document.addEventListener("DOMContentLoaded", () => {
  let delAllEnabled = false


  //add
  document.addEventListener('submit', (e)=>{
    e.preventDefault()
    const li = document.createElement('li')
    li.innerHTML = render(document.getElementById('new-task-description').value)
    li.contentEditable = true
    document.getElementById('tasks').appendChild(li)
    document.getElementById('create-task-form').reset()
    //console.log(delAllEnabled)

    if (!delAllEnabled){
      //create delete all button
      const delAllBtn = document.createElement('button')
      delAllBtn.id = "delAll"
      delAllBtn.textContent = "Delete All"
      document.getElementById('list').appendChild(delAllBtn)
      delAllEnabled =true
      //console.log(delAllBtn.id)
    }  

  })

  //delete
  document.getElementById('tasks').addEventListener('click', (e) =>{
    if (e.target.nodeName === 'BUTTON')
    e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode)
    
  })


  //delete All
  if (delAllEnabled){ 

    document.getElementById('delAll').addEventListener('click', (e) =>{
       // e = document.getElementById('tasks')
       // console.log("here"+e.target.parentNode.firstElementChild.innerHTML)
      // getList(e)


    })
  }    
  //drop down
  
});

function render(content){
 return `<li>${content} <button data-description="${content}">X</button></li>`
}

// function getList (e){
//   const lists = [];
//   let list = e.target.firstChild

//   while(list){
//     if(list !== e){
//       console.log(list)
//       lists.push(list)
//     }
//     list = list.nextSibling
//   }
//   return lists
// }