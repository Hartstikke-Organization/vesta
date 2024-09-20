import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import $ from 'jquery'

gsap.registerPlugin(ScrollTrigger)
// Link timelines to scroll position
function automatedTabs() {
  // Automated tabs
  let myTimer

  $('.tabs_item').on('click', function () {
    $('.is-active').removeClass('is-active')
    $(this).addClass('is-active')
    // let myIndex = $(this).index()
    // $('.product_image').eq(myIndex).addClass('is-active')
    clearInterval(myTimer)
    runInterval()

    return false
  })

  function runInterval() {
    myTimer = setInterval(function () {
      let currentItems = $('.is-active')
      if (currentItems.next().length > 0) {
        currentItems.next().addClass('is-active')
      } else {
        $('.tabs_item').eq(0).addClass('is-active')
        // $('.product_image').eq(0).addClass('is-active')
      }
      currentItems.removeClass('is-active')
    }, 5000)
  }
  runInterval()
}

export default automatedTabs
