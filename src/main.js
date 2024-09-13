import global from './js/global'
import home from './js/home/home'
import './styles/style.css'

// Main function to determine which scripts to run
function main() {
  const pageWrapper = document.querySelector('.page-wrapper')
  global()
  home()

  if (pageWrapper.classList.contains('home')) {
    // handleHomePage()
  } else if (pageWrapper.classList.contains('invest')) {
    // handleInvestPage()
  }
}

main()
