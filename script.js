let timer;

function debounce(fn, delay){
  return function(){
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  }
}

function show(){
  document.getElementById('output').innerText =
    'Function executed at ' + new Date().toLocaleTimeString();
}

const debounced = debounce(show, 500);
