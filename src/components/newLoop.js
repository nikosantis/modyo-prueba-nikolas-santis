import { getUsers } from './Users'
import { postByUser } from './Posts'
import md5 from 'md5'
import Swiper from 'swiper'

const mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
})

const preLoadSlider = () => {
  mySwiper.init()
}

const loadSlider = () => {
  mySwiper.removeAllSlides()
  mySwiper.updateSlides()
}

const divSlider = (key) => {
  const slider = '<div class="swiper-slide" id="' + key + '"></div>'

  const container = document.getElementById('swiperSlider')
  container.insertAdjacentHTML('beforeend', slider)
}

const img = src => {
  const res = `<div class="swiper-slide-box"><img src="${src}" class="img-fluid rounded-circle" /></div>`
  return res
}

const title = text => {
  const res = `<h4 class="swiper-slide-name">${text}</h4>`
  return res
}

const textContent = text => {
  const res = `<p class="swiper-slide-text">"${text}"</p>`
  return res
}

const itemForDiv = (item1, item2, item3, key) => {
  const element1 = item1
  const element2 = item2
  const element3 = item3

  const container = document.getElementById(key)
  container.insertAdjacentHTML('beforeend', element1)
  container.insertAdjacentHTML('beforeend', element2)
  container.insertAdjacentHTML('beforeend', element3)
}

export const newLoop = async () => {
  preLoadSlider()
  const users = await getUsers()

  let i
  for (i = 0; i < users.length; i++) {
    const user = { ...users[i] }
    const post = await postByUser(user.id)

    const newUser = { ...user, post }

    const gravatar = 'https://www.gravatar.com/avatar/' + md5(newUser.email) + '?d=identicon'
    const trimText = newUser.post.body.replace(/(\r\n|\n|\r)/gm, '')

    divSlider(i)
    itemForDiv(img(gravatar), textContent(trimText), title(newUser.name), i)
  }
  loadSlider()
  console.log('newUser2 ready')
}
