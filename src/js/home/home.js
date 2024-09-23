import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import flipCorners from './flipCorners'
import global from '../global'
import blurInEffect from '../helpers/blurInEffect'

gsap.registerPlugin(ScrollTrigger)

function home() {
  // Function to animate the header (frame)
  const animateFrame = () => {
    const frame = document.querySelector('.block.is-home-hero')
    const frameTitle = frame.querySelector('.home-hero_logo')

    gsap
      .timeline({
        defaults: {
          ease: 'none',
        },
        scrollTrigger: {
          trigger: frame,
          start: 'clamp(top bottom)',
          end: 'bottom top',
          scrub: true,
        },
      })
      .to(frame, {
        yPercent: 35,
        scale: 0.95,
        startAt: { filter: 'brightness(100%)' },
        filter: 'brightness(30%)',
      })
      .to('.home-hero_visual', { rotateZ: 15, xPercent: 20, yPercent: 15 }, 0)
      .to(
        frameTitle,
        {
          xPercent: -20,
        },
        0
      )
  }

  const animateFooter = () => {
    const frame = document.querySelector('.block.is-footer')

    gsap
      .timeline({
        defaults: {
          ease: 'none',
        },
        scrollTrigger: {
          trigger: frame,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: true,
        },
      })
      .from(frame, {
        yPercent: -35,
        startAt: { filter: 'brightness(100%)' },
        filter: 'brightness(30%)',
      })
  }

  const init = () => {
    animateFrame()
    animateFooter()

    flipCorners()
    blurInEffect()
    global()
  }

  init()
}

export default home
