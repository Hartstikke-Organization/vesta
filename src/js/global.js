import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import $ from 'jquery'
// import Lenis from 'lenis'

import automatedTabs from './helpers/automatedTabs'
import moduleTabs from './helpers/moduleTabs'
import nav from './nav'

function global() {
  function buttonAnimation() {
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
  }

  // Function to animate the HERO
  const animateHero = () => {
    const frame = document.querySelector('.block.is-hero')
    let frameTitle
    if (frame) {
      frameTitle = frame.querySelector('.home-hero_logo')
    }

    if (frame) {
      const tl = gsap.timeline({
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

      tl.to(frame, {
        yPercent: 35,
        // scale: 0.95,
        startAt: { filter: 'brightness(100%)' },
        filter: 'brightness(30%)',
      })
      if (frameTitle) {
        tl.to(
          '.home-hero_visual',
          { rotateZ: 15, xPercent: 20, yPercent: 15 },
          0
        ).to(
          frameTitle,
          {
            xPercent: -20,
          },
          0
        )
      }
    }
  }

  // Function to animate the FOOTER
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

  const mm = gsap.matchMedia() // Create a matchMedia instance

  const init = () => {
    mm.add('(min-width: 479px)', () => {
      animateHero()
      animateFooter()
      buttonAnimation()
    })
    nav()
    automatedTabs()
    moduleTabs()
  }
  init()
}

export default global
