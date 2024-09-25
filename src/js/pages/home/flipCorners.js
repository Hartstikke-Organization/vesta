import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, Flip)

function flipCorners() {
  // ———— Store variables
  const cards = document.querySelectorAll('[data-animate="corners"]')
  const corners = document.querySelector('.card-corners')

  cards.forEach(function (card) {
    // ———— Give active card a combo class after removing it from other cards
    card.addEventListener('click', function () {
      cards.forEach(function (card) {
        card.classList.remove('is--active')
      })
      this.classList.add('is--active')
    })

    // ———— Move corners into card we're hovering
    card.addEventListener('mouseenter', function () {
      const state = Flip.getState(corners)
      this.appendChild(corners)
      Flip.from(state, {
        duration: 0.4,
        ease: 'power1.inOut',
      })
    })

    // ———— Move corners back to active card on hover out
    card.addEventListener('mouseleave', function () {
      const state = Flip.getState(corners)
      const activeCard = document.querySelector(
        '[data-animate="corners"].is--active'
      )
      activeCard.appendChild(corners)
      Flip.from(state, {
        duration: 0.4,
        ease: 'power1.inOut',
      })
    })
  })
}

export default flipCorners
