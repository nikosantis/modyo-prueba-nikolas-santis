export const itemDiv1 = (active, key) => {
  const div = `<div class="carousel-item ${active}" id="slide${key}">`
  const container = document.getElementById('mySlider')

  return container.insertAdjacentHTML('afterbegin', div)
}

export const itemDiv2 = () => {
  const div = '</div>'
  const container = document.getElementById('mySlider')
  return container.insertAdjacentHTML('beforeend', div)
}

export const createImg = (item, key) => {
  const img = document.createElement('img')
  img.setAttribute('class', 'rounded-circle carousel-img')
  img.setAttribute('src', item)
  const container = document.getElementById(`slide${key}`)

  return container.appendChild(img)
}

export const createTitle = (item, key) => {
  const title = document.createElement('h3')
  title.setAttribute('class', 'carousel-subtitle')
  title.innerText = item
  const container = document.getElementById(`slide${key}`)

  return container.appendChild(title)
}

export const createSubTitle = (item, key) => {
  const title = document.createElement('p')
  title.setAttribute('class', 'carousel-text')
  title.innerText = `"${item}"`
  const container = document.getElementById(`slide${key}`)

  return container.appendChild(title)
}

export const userName = (item, key) => {
  const name = document.createElement('h5')
  name.setAttribute('class', 'carousel-name')
  name.innerText = item
  const container = document.getElementById(`slide${key}`)

  return container.appendChild(name)
}

export const indicatorDot = (className, key) => {
  const dot = `<li data-target="#carouselExampleIndicators" data-slide-to="${key}" class="carousel-dot ${className}"></li>`

  const container = document.getElementById('indicators')

  return container.insertAdjacentHTML('afterbegin', dot)
}

export const imgIntroMobile = (item, id, className) => {
  const img = document.createElement('img')
  img.setAttribute('class', className)
  img.setAttribute('src', item)
  const container = document.getElementById(id)

  return container.appendChild(img)
}

export const imgIntro = (item, id, className) => {
  const img = document.createElement('img')
  img.setAttribute('class', className)
  img.setAttribute('src', item)
  const container = document.getElementById(id)

  return container.appendChild(img)
}

export const prototypesImg = (item, id, className) => {
  const img = document.createElement('img')
  img.setAttribute('class', className)
  img.setAttribute('src', item)
  const container = document.getElementById(id)

  return container.appendChild(img)
}

export const userImg = (item, id, className) => {
  const img = document.createElement('img')
  img.setAttribute('class', className)
  img.setAttribute('src', item)
  const container = document.getElementById(id)

  return container.appendChild(img)
}

export const aboutImg = (item, id, className) => {
  const img = document.createElement('img')
  img.setAttribute('class', className)
  img.setAttribute('src', item)
  const container = document.getElementById(id)

  return container.appendChild(img)
}
