import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import $ from 'jquery'

gsap.registerPlugin(ScrollTrigger)
// Link timelines to scroll position
function blurInEffect() {
  // GIVE UNIQUE IDS TO EACH FILTER
  $('.svg-filter').each(function (index) {
    $(this)
      .parent()
      .attr('style', 'filter: url(#svg-filter-' + index + ');')
    $(this)
      .find('filter')
      .attr('id', 'svg-filter-' + index)
  })

  // ANIMATE IMAGES ON SCROLL WITH SCRUB
  $('[data-effect="blur-in"').each(function () {
    let svg = $(this).find('.svg-filter')

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: 'top bottom',
        end: 'top 60%',
        scrub: true,
      },
    })
    tl.fromTo(
      svg.find('[stdDeviation]'),
      { attr: { stdDeviation: 15 } },
      { attr: { stdDeviation: 0 } }
    )
  })
}

export default blurInEffect
