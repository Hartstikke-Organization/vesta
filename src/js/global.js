import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import $ from 'jquery'
import Lenis from 'lenis'

import automatedTabs from './helpers/automatedTabs'
import nav from './nav'

function global() {
  $('.button.is-main').each(function () {
    const clipEl = $(this)
      .find('.button_main_inner.hover')
      .attr('aria-hidden', 'true')
    const durationSetting = 0.7
    const easeSetting = 'power2.out'

    function getPercentTop(el, e) {
      let elTop = el.offset().top - $(window).scrollTop()
      let mouseTop = e.pageY - $(window).scrollTop() - elTop
      return (mouseTop / el.innerHeight()) * 100
    }
    function getPercentLeft(el, e) {
      let elLeft = el.offset().left
      let mouseLeft = e.pageX - elLeft
      return (mouseLeft / el.innerWidth()) * 100
    }
    $(this).on('mouseenter', function (e) {
      let percentTop = getPercentTop($(this), e)
      let percentLeft = getPercentLeft($(this), e)
      gsap.set(clipEl, { display: 'flex' })
      gsap.fromTo(
        clipEl,
        { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
        {
          clipPath: `circle(141.4% at ${percentLeft}% ${percentTop}%)`,
          duration: durationSetting,
          ease: easeSetting,
        }
      )
    })
    $(this).on('mouseleave', function (e) {
      let percentTop = getPercentTop($(this), e)
      let percentLeft = getPercentLeft($(this), e)
      gsap.to(clipEl, {
        clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)`,
        overwrite: true,
        duration: durationSetting,
        ease: easeSetting,
      })
    })
  })

  automatedTabs()
  nav()

  // Initializes smooth scrolling with Lenis and integrates it with GSAP's ScrollTrigger.
  // Function to set up smooth scrolling.
  const initSmoothScrolling = () => {
    // Initialize Lenis for smooth scroll effects. Lerp value controls the smoothness.
    const lenis = new Lenis({ lerp: 0.15 })

    // Sync ScrollTrigger with Lenis' scroll updates.
    lenis.on('scroll', ScrollTrigger.update)

    // Ensure GSAP animations are in sync with Lenis' scroll frame updates.
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000) // Convert GSAP's time to milliseconds for Lenis.
    })

    // Turn off GSAP's default lag smoothing to avoid conflicts with Lenis.
    gsap.ticker.lagSmoothing(0)
  }

  // Activate the smooth scrolling feature.
  initSmoothScrolling()
}

export default global
