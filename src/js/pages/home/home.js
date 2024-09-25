import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import flipCorners from './flipCorners'
import blurInEffect from '../../helpers/blurInEffect'

gsap.registerPlugin(ScrollTrigger)

function home() {
  const init = () => {
    flipCorners()
    blurInEffect()
  }

  init()
}

export default home
