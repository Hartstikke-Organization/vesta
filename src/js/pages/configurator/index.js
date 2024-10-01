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

    let amount

    if (document.querySelector('input[name="amount"]:checked')) {
      amount = document.querySelector('input[name="amount"]:checked').value
    } else {
      amount = document.querySelector('input[name="amount_custom"]').value
    }

    document.querySelector('.configurator_summary_number').textContent = amount
    const summaryText =
      processor +
      ', ' +
      display +
      ', ' +
      interfaceModule +
      ', ' +
      communicationModule
    document.querySelector('.configurator_summary_details').textContent =
      summaryText

    console.log(summaryText)
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
