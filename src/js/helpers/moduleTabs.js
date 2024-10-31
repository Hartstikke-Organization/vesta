import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import $ from 'jquery'

gsap.registerPlugin(ScrollTrigger)
// Link timelines to scroll position
function moduleTabs() {
  $('.module_component').each(function () {
    // Store reference to the current module component
    let $moduleComponent = $(this)
    let myTimer

    // Event handler for module items within the current module_component
    $moduleComponent.find('.module_item').on('click', function () {
      $moduleComponent.find('.is-active').removeClass('is-active')
      $(this).addClass('is-active')

      let myIndex = $(this).index()
      $moduleComponent
        .find('.module_visual-wrap')
        .eq(myIndex)
        .addClass('is-active')

      clearInterval(myTimer)
      $(this).find('.module_item_line').css('display', 'none')
      // runInterval()

      return false
    })

    function runInterval() {
      myTimer = setInterval(function () {
        let currentItems = $moduleComponent.find('.is-active')

        if (currentItems.next().length > 0) {
          currentItems.next().addClass('is-active')
        } else {
          $moduleComponent.find('.module_item').eq(0).addClass('is-active')
          $moduleComponent
            .find('.module_visual-wrap')
            .eq(0)
            .addClass('is-active')
        }
        currentItems.removeClass('is-active')
      }, 8000)
    }

    // Start the interval for the current module_component
    runInterval()
  })
}

export default moduleTabs
