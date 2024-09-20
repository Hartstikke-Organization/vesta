import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function nav() {
  const dropdowns = document.querySelectorAll('.nav_dropdown-toggle')
  const nav = document.querySelector('.nav_component')
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('mouseover', () => {
      if (dropdown.classList.contains('w--open')) {
        nav.querySelector('.nav_container').classList.add('with-h-padding')
      }
    })

    dropdown.addEventListener('mouseout', () => {
      if (!dropdown.classList.contains('w--open')) {
        nav.querySelector('.nav_container').classList.remove('with-h-padding')
      }
    })
  })
}

export default nav
