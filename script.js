const nextBtn = document.querySelector('.next-button')
const backBtn = document.querySelector('.back-button')

let CURRENT_PAGE = 0;
let selectedPlan = ''
const selectedAddons = new Map();

const PAGE_INDICATOR_CONTAINER = document.querySelector('#page-indicator')
const PAGE_INDICATORS = document.querySelectorAll('.page-mark')
PAGE_INDICATOR_CONTAINER.children.item(CURRENT_PAGE)?.classList.add('current-page')

const PAGES = document.querySelectorAll('.form-content')
const PLANS = document.querySelectorAll('.plan-container')
const NAME = document.querySelector('#name-input')
const EMAIL = document.querySelector('#email-input')
const PHONE = document.querySelector('#phone-input')
const CHECKBOXES = document.querySelectorAll('.checkbox')
const ADD_ONS = document.querySelectorAll('.addon-container')

renderPage();

function renderPage() {
  PAGES.forEach((element, idx) => {
    element.classList.add('hidden')
    if (idx === CURRENT_PAGE) {
      element.classList.remove('hidden')
    }
  })
  document.querySelectorAll('.current-page').forEach(element => element.classList.remove('current-page'))
  PAGE_INDICATOR_CONTAINER.children.item(CURRENT_PAGE)?.classList.add('current-page')
  if (CURRENT_PAGE === 0) {
    backBtn.classList.add('invisible')
  } else {
    backBtn.classList.remove('invisible')
  }
  if (CURRENT_PAGE === 3) {
    nextBtn.innerText = 'Confirm'
  } else {
    nextBtn.innerText = 'Next Step'
  }
  if (CURRENT_PAGE === 4) {
    PAGE_INDICATOR_CONTAINER.children.item(3)?.classList.add('current-page')
    document.querySelector('.navigation').classList.add('hidden')
  }
}

nextBtn.addEventListener('click', () => {
  CURRENT_PAGE++;
  renderPage();
})

backBtn.addEventListener('click', () => {
  CURRENT_PAGE--;
  renderPage();
})

PAGE_INDICATORS.forEach((element, idx) => {
  element.addEventListener('click', (e) => {
    if (CURRENT_PAGE === 4) return
    CURRENT_PAGE = idx
    renderPage()
  })
})

PLANS.forEach(element => {
  element.addEventListener('click', (e) => {
    PLANS.forEach(element => element.classList.remove('selected'))
    selectedPlan = e.target.dataset.plan
    element.classList.add('selected')
  })
})

CHECKBOXES.forEach((element, idx) => {
  element.addEventListener('click', (e) => {
    element.classList.toggle('checked')
    ADD_ONS.item(idx).classList.toggle('selected')
    if (element.classList.contains('checked')) {
      selectedAddons.set(e.target.dataset.addon, true)
    } else {
      selectedAddons.delete(e.target.dataset.addon, true)
    }
  })
})