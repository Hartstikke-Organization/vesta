import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

function about() {
  // Function to check if the viewport width is 767px or less
  function isMobile() {
    return window.innerWidth <= 767
  }
  const quotes = document.querySelectorAll('.quote_component')

  quotes.forEach((quote) => {
    // Split text into individual words
    const layoutText = new SplitType(quote.querySelector('.quote_text'), {
      types: 'words',
    })
    const layoutTL = gsap.timeline()

    // Define different start and end values for mobile devices
    let startValue = isMobile() ? 'top 35%' : 'top 76%'
    let endValue = isMobile() ? 'bottom 90%' : 'bottom 65%'

    layoutTL.from(layoutText.words, {
      opacity: 0.25,
      stagger: 0.1,
      scrollTrigger: {
        trigger: quote,
        start: startValue,
        end: endValue,
        scrub: 2,
      },
    })
  })
}

export default about
