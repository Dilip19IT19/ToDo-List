
let inputVal=document.querySelector(".text");
let addBtn=document.querySelector(".add");

inputVal.addEventListener("keydown",function(e){

  if(e.key==='Enter')
  {
    if(inputVal.value.length===0)
    {
      alert("Empty task can't be added");
    }
    else
    {
      localItem=JSON.parse(localStorage.getItem('localItem'));
      if(localItem===null)
      {
        taskList=[];
      }
      else
      {
        taskList=localItem;
      }
    
      taskList.push(inputVal.value);
      localStorage.setItem('localItem',JSON.stringify(taskList));
    
      showTasks();
    }
   
    inputVal.value="";
  }
})

addBtn.addEventListener("click",()=>{

  if(inputVal.value.length===0)
    {
      alert("Empty task can't be added");
    }
    else
    {
      localItem=JSON.parse(localStorage.getItem('localItem'));
      if(localItem===null)
      {
        taskList=[];
      }
      else
      {
        taskList=localItem;
      }
    
      taskList.push(inputVal.value);
      localStorage.setItem('localItem',JSON.stringify(taskList));
    
      showTasks();
    }
   
    inputVal.value="";
})

function showTasks(){

  localItem=JSON.parse(localStorage.getItem('localItem'));
  if(localItem===null)
  {
    taskList=[];
  }
  else
  {
    taskList=localItem;
  }

 

  taskBox=document.querySelector(".tasks-box");
  let tasks='';
  taskList.forEach(function(item,idx){

    tasks+=`
    
    <div class="task" key=${idx}>
      <div class="contain-box">
        
        <p>${item} </p>
      </div>
      <div class="change-box">
        <i class="fa-regular fa-pen-to-square" id="edit" onClick="editTask(${idx})"></i>
        <i class="fa-solid fa-trash" id="delete" onClick="deleteTask(${idx})"></i>
      </div>
    </div>
    
    `

  })

  taskBox.innerHTML=tasks;

}

function deleteTask(idx)
{
  localItem=JSON.parse(localStorage.getItem('localItem'));
  taskList=localItem;
  taskList.splice(idx,1);
  localStorage.setItem('localItem',JSON.stringify(taskList));
  console.log("delete function called");
  showTasks();
}

window.onload=showTasks();

function editTask(idx)
{
  document.querySelector(".add").style.display="none";
  document.querySelector(".save").style.display="inline";

  localItem=JSON.parse(localStorage.getItem('localItem'));
  taskList=localItem;
  inputVal.value=taskList.at(idx);

  document.querySelector("#hiddenidx").value=idx;
 
 

}

document.querySelector(".save").addEventListener("click",function(){

  localItem=JSON.parse(localStorage.getItem('localItem'));
  taskList=localItem;
  let editIdx=document.querySelector("#hiddenidx").value;
  taskList.splice(editIdx,1,inputVal.value);
  localStorage.setItem('localItem',JSON.stringify(taskList));

  document.querySelector(".add").style.display="inline";
  document.querySelector(".save").style.display="none";
  inputVal.value="";
  showTasks();

})

