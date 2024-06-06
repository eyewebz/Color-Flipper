const body = document.getElementsByTagName('body')[0]


function setColor(name){
  body.style.backgroundColor = name;
} 

function randomColor() {
  const red = Math.round(Math.random() * 255)
  const pink = Math.round(Math.random() * 255)
  const blue = Math.round(Math.random() * 255)
  

  const color = `rgb(${red}, ${pink}, ${blue})`
  body.style.backgroundColor = color;
}
