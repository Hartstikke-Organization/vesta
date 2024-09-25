import global from './js/global'
import home from './js/pages/home/home'
import product from './js/pages/product'
import './styles/style.css'

// Main function to determine which scripts to run
function main() {
  const pageWrapper = document.querySelector('body')
  global()
  // home()

  if (pageWrapper.classList.contains('home')) {
    home()
  } else if (pageWrapper.classList.contains('product')) {
    product()
  }
}

main()
