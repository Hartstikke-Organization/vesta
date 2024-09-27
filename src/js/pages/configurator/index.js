import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function configurator() {
  const buttonNextToLast = document.querySelector('#btn-next-to-last')
  const amounts = document.querySelectorAll('input[name="amount"]')

  const generateSummary = () => {
    const interfaceModule = document.querySelector(
      'input[name="interface-module"]:checked'
    ).value
    const communicationModule = document.querySelector(
      'input[name="communication-module"]:checked'
    ).value
    const display = document.querySelector(
      'input[name="display"]:checked'
    ).value
    const processor = document.querySelector(
      'input[name="processor"]:checked'
    ).value

    const amount = document.querySelector('input[name="amount"]:checked').value

    document.querySelector('.configurator_summary_number').textContent = amount

    document.querySelector('.configurator_summary_details').textContent =
      processor + ', ' + display + interfaceModule + ', ' + communicationModule
  }
  buttonNextToLast.addEventListener('click', () => {
    generateSummary()
  })

  amounts.forEach((amount) => {
    amount.addEventListener('click', () => {
      generateSummary()
    })
  })

  const init = () => {}
  init()
}

export default configurator
