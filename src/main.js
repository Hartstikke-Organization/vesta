import global from './js/global'
import about from './js/pages/about'
import configurator from './js/pages/configurator'
import home from './js/pages/home/home'
import product from './js/pages/product'
import './styles/style.css'

// Main function to determine which scripts to run
function main() {
  const pageWrapper = document.querySelector('body')
  global()

  if (pageWrapper.classList.contains('home')) {
    home()
  } else if (pageWrapper.classList.contains('product')) {
    product()
  } else if (pageWrapper.classList.contains('about')) {
    about()
  } else if (pageWrapper.classList.contains('configurator')) {
    configurator()
  }
}

main()
