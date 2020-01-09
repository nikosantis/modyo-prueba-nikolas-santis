import json from '../services/features.json'

const rowCard = () => {
  const row = '<div class="row" id="cards"></div>'

  const container = document.getElementById('containerCards')
  container.insertAdjacentHTML('beforeend', row)
}

const divCard = (key) => {
  const slider = `<div class="col-md-6 col-lg-4 p-4"><div class="cardblock" id="card${key}"></div></div>`

  const container = document.getElementById('cards')
  container.insertAdjacentHTML('beforeend', slider)
}

const icon = (icon, key) => {
  const res = `<div class="cardblock-iconbox"><span class="${icon} cardblock-icon ${key}"></span></div>`
  return res
}

const textContent = text => {
  const res = `<p class="cardblock-text">${text}</p>`
  return res
}

const title = text => {
  const res = `<h3 class="cardblock-title">${text}</h3>`
  return res
}

const divForCard = (item1, item2, item3, key) => {
  const element1 = item1
  const element2 = item2
  const element3 = item3

  const container = document.getElementById(`card${key}`)
  container.insertAdjacentHTML('beforeend', element1)
  container.insertAdjacentHTML('beforeend', element2)
  container.insertAdjacentHTML('beforeend', element3)
}

export const Features = () => {
  let i
  rowCard()
  for (i = 0; i < json.length; i++) {
    const iconItem = json[i].icon
    divCard(i)
    divForCard(icon(iconItem, i), title(json[i].title), textContent(json[i].text), i)
  }
}
