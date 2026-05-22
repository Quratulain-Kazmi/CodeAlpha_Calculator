let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

// add value
function add(value){
  display.value += value;
}

// clear all
function clearAll(){
  display.value = "";
}

// delete last
function deleteLast(){
  display.value = display.value.slice(0,-1);
}

// calculate
function calculate(){
  try{
    let result = eval(display.value);

    // save history
    if(display.value !== ""){
      let item = `${display.value} = ${result}`;
      addHistory(item);
    }

    display.value = result;
  }
  catch{
    display.value = "Error";
  }
}

// history function
function addHistory(text){
  let li = document.createElement("li");
  li.textContent = text;
  historyList.prepend(li);
}

// clear history
function clearHistory(){
  historyList.innerHTML = "";
}

// keyboard support
document.addEventListener("keydown",(e)=>{

  if("0123456789+-*/.%".includes(e.key)){
    add(e.key);
  }
  else if(e.key === "Enter"){
    calculate();
  }
  else if(e.key === "Backspace"){
    deleteLast();
  }
  else if(e.key === "Escape"){
    clearAll();
  }

});