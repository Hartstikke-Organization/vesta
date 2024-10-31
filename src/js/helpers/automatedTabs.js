import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import $ from 'jquery'

gsap.registerPlugin(ScrollTrigger)
// Link timelines to scroll position
function automatedTabs() {
  // Automated tabs
  let myTimer

  // Scope the tabs and is-active to tabs_component
  const tabsComponent = $('.tabs_component')

  tabsComponent.find('.tabs_item').on('click', function () {
    tabsComponent.find('.is-active').removeClass('is-active')
    $(this).addClass('is-active')
    clearInterval(myTimer)
    runInterval()

    return false
  })

  function runInterval() {
    myTimer = setInterval(function () {
      let currentItems = tabsComponent.find('.is-active')
      if (currentItems.next().length > 0) {
        currentItems.next().addClass('is-active')
      } else {
        tabsComponent.find('.tabs_item').eq(0).addClass('is-active')
      }
      currentItems.removeClass('is-active')
    }, 4000)
  }

  runInterval()
}

export default automatedTabs
