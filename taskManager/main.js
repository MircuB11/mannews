const form=document.querySelector('form')
const task=document.querySelector('#task')
const list=document.querySelector('#list')
let temp
afisare()
function addToList(){
    //create list
    let treaba=document.createElement('li')
    //rosu
    treaba.style.backgroundColor ='red'
    // create text and delete button
    treaba.innerHTML = `
    <span>${task.value}.</span><br>
    <input type="checkbox" value="completed" class="completed-btn">
    <input type="button" value="Delete" class="delete-btn">
  `
    
    // salvare in localStorage
    localStorage.setItem(treaba.innerHTML,'incomplete')
    
    // printare
    // list.appendChild(treaba)
    afisare()

    //usefull for localStorage manipulation
    temp=treaba
    
    
    // clear input box
    task.value=''

}

//functie afisare
function afisare(){
  let keys=Object.keys(localStorage);
  list.innerHTML = "";

  for(let i=0;i<keys.length;i++){
    let key=keys[i]
    let node=document.createElement('li')
    node.style.backgroundColor='red'
    node.innerHTML=key
    list.appendChild(node)
  }

  
}

// Add a task when clicking the Add Task button
enter.addEventListener('click',addToList)
task.addEventListener("keydown", function (event) {
  if (event.key === "Enter") { // Check if the pressed key is "Enter"
    event.preventDefault(); // Prevent default behavior (like form submission)
    addToList(); // Call the function to add the task
  }
});

// handle the delete thingamajig
list.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete-btn')) {
    const li = event.target.closest('li'); // Find the closest <li> for the clicked button
    li.remove(); // Remove the specific list item
    localStorage.removeItem(li.innerHTML);
    localStorage.removeItem(temp)
    
  }
})

// handle the completed thingamajig
list.addEventListener('change', function (even) {
  if (even.target.classList.contains('completed-btn')&&even.target.checked) {
    const li = even.target.closest('li'); // Find the closest <li> for the clicked button
    li.style.backgroundColor = "lime"; // verde
    localStorage.setItem(li.innerHTML,'complete')// localStorage status complete
  }else{
    const li = even.target.closest('li'); // Find the closest <li> for the clicked button
    li.style.backgroundColor = "red"; // verde
    localStorage.setItem(li.innerHTML,'incomplete')// localStorage status incomplete
  }
})

/*list.addEventListener('check',function(even){
  var checkbox = document.querySelector("input[class=completed-btn]");
  checkbox.addEventListener('change',function(even){
    if(checkbox.checked)
      console.log('gha')
  })
})*/

