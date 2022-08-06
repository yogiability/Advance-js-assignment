
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'C') {
      string = ""
      document.querySelector('input').value = string;
    }
    else {
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
})

const audio = new Audio();
audio.src = "audio.mpeg";

function play() {
  audio.play();
  // img.classList.add("myimage");

}

function pause() {
  audio.pause();
  // img.classList.remove("myimage2");


}




