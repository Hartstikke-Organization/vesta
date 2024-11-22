import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// import { EASE } from './easings/easing'

gsap.registerPlugin(ScrollTrigger)

function nav() {
  // const mm = gsap.matchMedia() // Create a matchMedia instance

  const navbarMenu = document.querySelector('.nav_component')
  const navBackground = document.querySelector('.nav_bg')
  const offsetY = 140
  let oldScroll = 0

  window.addEventListener('load', function () {
    if (window.scrollY > offsetY) {
      navbarMenu.classList.add('is-active')
    } else {
      navbarMenu.classList.remove('is-active')
    }
  })

  const hamburgerTrigger = document.querySelector('.nav_menu-button.is-dark')

  if (hamburgerTrigger) {
    hamburgerTrigger.addEventListener('click', () => {
      let openState = hamburgerTrigger.getAttribute('aria-expanded')
      console.log(openState)
      openState === 'false'
        ? navbarMenu.classList.add('is-active')
        : navbarMenu.classList.remove('is-active')
    })
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > offsetY) {
      navbarMenu.classList.add('is-active')
      navBackground.classList.add('is-active')
    } else {
      navbarMenu.classList.remove('is-active')
      navBackground.classList.remove('is-active')
    }

    if (
      window.scrollY > oldScroll &&
      navbarMenu.classList.contains('is-active')
    ) {
      // when scrolling DOWN
      navbarMenu.classList.add('is-scrolled')
    } else {
      // when scrolling UP
      navbarMenu.classList.remove('is-scrolled')
    }

    oldScroll = window.scrollY
  })

  // mm.add('(min-width: 992px)', () => {
  //   const toggles = document.querySelectorAll(
  //     '.nav_component.is-alt .nav_dropdown-toggle'
  //   )
  //   let currentOpenDropdown = null
  //   let currentTimeline = null
  //   const firstClickMap = new Map() // Map to track the firstClick state for each toggle

  //   gsap.defaults({ ease: EASE, duration: 0.4 })

  //   // Function to handle the click on the dropdown toggle
  //   function handleToggleClick(event) {
  //     event.stopPropagation() // Prevent the click from propagating to the document
  //     const toggle = event.currentTarget

  //     // Close the currently open dropdown if it exists and is not the current one
  //     if (currentOpenDropdown && currentOpenDropdown !== toggle) {
  //       currentTimeline.reverse().eventCallback('onReverseComplete', () => {
  //         currentOpenDropdown = null
  //         currentTimeline = null
  //         openDropdown(toggle)
  //       })
  //     } else {
  //       openDropdown(toggle)
  //     }

  //     function openDropdown(toggleElement) {
  //       const tl = toggleElement.timeline // Retrieve the timeline from the toggle element
  //       if (firstClickMap.get(toggleElement)) {
  //         tl.play()
  //         firstClickMap.set(toggleElement, false)
  //         currentOpenDropdown = toggleElement
  //         currentTimeline = tl
  //       } else {
  //         tl.reverse().eventCallback('onReverseComplete', () => {
  //           firstClickMap.set(toggleElement, true)
  //           currentOpenDropdown = null
  //           currentTimeline = null
  //         })
  //       }
  //     }
  //   }

  //   // Create a timeline for each toggle and add the event listener
  //   toggles.forEach((toggle) => {
  //     firstClickMap.set(toggle, true) // Initialize firstClick state for each toggle

  //     const tl = gsap.timeline({ paused: true })
  //     tl.to('.nav_component', { color: 'black' }, 0)
  //       .to(
  //         '.nav_bg',
  //         { scaleY: 1, borderRadius: '1.25rem 1.25rem 0rem 0rem' },
  //         0
  //       )
  //       .to(
  //         toggle.parentElement.querySelector('.nav_dropdown-list'),
  //         {
  //           clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  //           borderRadius: '0 0 1.25rem 1.25rem',
  //           y: '-.3rem',
  //         },
  //         0
  //       )
  //       .to(toggle.querySelector('.dropdown-chevron'), { rotateZ: '180deg' }, 0)
  //       .fromTo('.nav_dropdown-link', { y: '1rem' }, { y: '0rem' }, 0)
  //       .to('.nav_container', { padding: '0 1.25rem' }, 0)

  //     toggle.timeline = tl // Store the timeline on the toggle element
  //     toggle.addEventListener('click', handleToggleClick)
  //   })

  //   // Handle window resize
  //   function handleResize() {
  //     if (currentOpenDropdown) {
  //       currentTimeline.reverse().eventCallback('onReverseComplete', () => {
  //         currentOpenDropdown = null
  //         currentTimeline = null
  //         toggles.forEach((toggle) => firstClickMap.set(toggle, true))
  //       })
  //     }
  //   }

  //   // Handle click outside dropdowns
  //   function handleOutsideClick(event) {
  //     const isToggle = event.target.classList.contains('nav_dropdown-toggle')
  //     if (!isToggle && currentOpenDropdown) {
  //       currentTimeline.reverse().eventCallback('onReverseComplete', () => {
  //         currentOpenDropdown = null
  //         currentTimeline = null
  //         toggles.forEach((toggle) => firstClickMap.set(toggle, true))
  //       })
  //     }
  //   }

  //   // Add resize and outside click listeners
  //   window.addEventListener('resize', handleResize)
  //   document.addEventListener('click', handleOutsideClick)

  //   // Cleanup function: runs when the media query no longer matches
  //   return () => {
  //     // Remove event listeners and kill timelines
  //     toggles.forEach((toggle) => {
  //       toggle.removeEventListener('click', handleToggleClick)
  //       if (toggle.timeline) {
  //         toggle.timeline.kill()
  //         delete toggle.timeline
  //       }
  //     })
  //     window.removeEventListener('resize', handleResize)
  //     document.removeEventListener('click', handleOutsideClick)
  //   }
  // })
}

export default nav
