function togglemode() {
  const html = document.documentElement
  html.classList.toggle('light')
/*
  if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  } */

  // pegar a tag img

const img = document.querySelector('#profile img')

  // substitução da img
  if(html.classList.contains('light')) {
    // se estiver ligth mode, adicionar a img light
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    // se estiver sem ligth mode, adicionar img normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}