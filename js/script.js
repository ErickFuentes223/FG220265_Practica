let start = Date.now(); 

let timer = setInterval(function() {
  let timePassed = Date.now() - start;

  if (timePassed >= 5000) {
    clearInterval(timer); 
    return;
  }

  draw(timePassed);

}, 20);

function draw(timePassed) {
  luchador.style.left = timePassed / 5 + 'px';
}

luchador.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      luchador.style.left = timePassed / 5 + 'px';

      if (timePassed > 3000) clearInterval(timer);

    }, 20);
  }

