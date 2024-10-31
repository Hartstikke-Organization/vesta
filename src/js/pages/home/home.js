import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { EASE } from '../../easings/easing'
import blurInEffect from '../../helpers/blurInEffect'

gsap.registerPlugin(ScrollTrigger)

function home() {
  const mm = gsap.matchMedia() // Create a matchMedia instance

  // ———— Store variables
  const cards = document.querySelectorAll('[data-animate="corners"]')
  const corners = document.querySelector('.card-corners')
  let imgWrap = document.querySelector('.home-hardware_img-wrapper')
  const dots = document.querySelectorAll('.map_dot')

  const flipTo = (e, isHoverDot, index) => {
    const state = Flip.getState(corners)
    isHoverDot
      ? cards[index].appendChild(corners)
      : e.currentTarget.appendChild(corners)
    Flip.from(state, {
      duration: 0.4,
      ease: 'power1.inOut',
    })
  }

  const flipHomeCorners = () => {
    cards.forEach(function (card, i) {
      const dotTl = gsap.timeline({
        paused: true,
        duration: 0.4,
      })
      dotTl
        .fromTo(
          dots[i].querySelector('.map_dot_text'),
          { scale: 1 },
          { scale: 1.75, ease: 'power3.inOut', duration: 0.4 },
          0
        )
        .fromTo(
          dots[i].querySelector('.map_dot_outline'),
          {
            scale: 1,
          },
          {
            scale: 2.25,
            duration: 0.55,
          },
          0
        )

      // ———— Move corners into card we're hovering
      card.addEventListener('mouseenter', function (e) {
        flipTo(e)
        //
        dotTl.timeScale(1)
        dotTl.play()
      })

      dots[i].addEventListener('mouseenter', function (e) {
        flipTo(e, true, i)

        dotTl.timeScale(1)
        dotTl.play()
      })

      dots[i].addEventListener('mouseleave', function () {
        dotTl.timeScale(1)
        dotTl.reverse()
      })

      // ———— Move corners back to active card on hover out
      card.addEventListener('mouseleave', function () {
        dotTl.timeScale(1.5)
        dotTl.reverse()
      })
    })

    // Entrance Timeline
    const entranceTl = gsap.timeline({
      scrollTrigger: {
        trigger: imgWrap,
        start: 'top 70%',
      },
    })
    entranceTl.from('.map_dot', {
      y: '6rem',
      opacity: 0,
      duration: 1.5,
      stagger: { amount: 0.2 },
      ease: EASE,
    })
    //
  }

  const init = () => {
    mm.add('(min-width: 479px)', () => {
      flipHomeCorners()
      blurInEffect()
    })
  }

  init()
}

export default home
