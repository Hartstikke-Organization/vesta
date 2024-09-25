import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import blurInEffect from '../../helpers/blurInEffect'
import flipCorners from '../home/flipCorners'

gsap.registerPlugin(ScrollTrigger)

function product() {
  const init = () => {
    flipCorners()
    blurInEffect()
  }

  init()
}

export default product
