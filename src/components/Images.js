import * as img1 from '../assets/images/landing_1.png'
import * as imgProt from '../assets/images/do_ui_kit_download_cta_floating_devices-2x.png'
import * as imgUser from '../assets/images/person_1.jpg'
import * as imgAbout from '../assets/images/about_1.jpg'

import {
  imgIntroMobile,
  imgIntro,
  prototypesImg,
  userImg,
  aboutImg
} from './CreateHtml'

export const Images = () => {
  imgIntroMobile(img1.default, 'imgIntroMobile', 'img-fluid img-mobile')
  imgIntro(img1.default, 'imgIntro', 'hero-img d-none d-lg-block d-xl-block')
  prototypesImg(imgProt.default, 'prototypesImg', 'img-fluid')
  userImg(imgUser.default, 'userImg', 'img-fluid rounded-circle')
  aboutImg(imgAbout.default, 'aboutImg', 'img-fluid rounded img-shadow img-mobile')
}
