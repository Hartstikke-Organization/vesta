import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import flipCorners from './flipCorners'
import { EASE } from '../../easings/easing'
import blurInEffect from '../../helpers/blurInEffect'

gsap.registerPlugin(ScrollTrigger)

function home() {
  const hardwareAnimation = () => {
    let imgWrap = document.querySelectorAll('.home-hardware_img-wrapper')

    const cards = document.querySelectorAll('.card.is-hardware')
    const dots = document.querySelectorAll('.map_dot')

    cards.forEach((card, i) => {
      const dotTl = gsap.timeline({
        paused: true,
        repeat: 1, // Will play forward and then reverse
        yoyo: true, // Enables the reverse playback
        duration: 0.7,
      })
      dotTl.to(dots[i], { scale: 1.25 }, 0).to(
        dots[i].querySelector('.map_dot-outline'),
        {
          scale: 1.5,
        },
        0
      )
      card.addEventListener('mouseenter', () => {
        dotTl.restart()
      })
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imgWrap,
        start: 'top 70%',
      },
    })
    tl.from('.map_dot', {
      y: '6rem',
      opacity: 0,
      duration: 1.5,
      stagger: { amount: 0.2 },
      ease: EASE,
    })
  }

  const init = () => {
    flipCorners()
    blurInEffect()
    hardwareAnimation()
  }

  init()
}

export default home
