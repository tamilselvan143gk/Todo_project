const inputadd = document.getElementById('inputadd');
const list = document.getElementById('list');

function addbutton(){
    if (inputadd.value === ''){
        alert('you have to some text !');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputadd.value;
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputadd.value = '';
    saveData();
}

list.addEventListener("click",function(e){
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data",list.innerHTML);
}
function showTask(){
    list.innerHTML = localStorage.getItem("data");
}
showTask();