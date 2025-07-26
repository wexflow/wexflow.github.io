/**
 * Initializes the hamburger menu toggle.
 * Toggles the 'active' class on the hamburger button and the navigation menu,
 * and updates the aria-expanded attribute for accessibility.
 */
export function initHamburgerMenu() {
  const hamburger = document.querySelector('.hamburger')
  const nav = document.querySelector('nav')

  if (!hamburger || !nav) return

  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true'
    hamburger.setAttribute('aria-expanded', !expanded)
    hamburger.classList.toggle('active')
    nav.classList.toggle('active')
  })
}

/**
 * Initializes the header scroll effect.
 * Adds or removes the 'scrolled' class to the header based on scroll position.
 */
export function initHeaderScroll() {
  const header = document.querySelector('header')
  if (!header) return

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled')
    } else {
      header.classList.remove('scrolled')
    }
  })
}

/**
 * Initializes the language selection menu.
 * Toggles the language menu visibility, sets the selected language,
 * and closes the menu when clicking outside.
 * 
 * @param {function(string): Promise<void>} setLang - Async function to change the app language.
 */
export function initLanguageMenu(setLang) {
  const langToggle = document.getElementById('lang-toggle')
  const langMenu = document.getElementById('lang-menu')

  if (!langToggle || !langMenu) return

  langToggle.addEventListener('click', () => {
    const expanded = langToggle.getAttribute('aria-expanded') === 'true'
    langToggle.setAttribute('aria-expanded', !expanded)
    langMenu.hidden = expanded
  })

  langMenu.querySelectorAll('button').forEach(item => {
    item.addEventListener('click', async () => {
      const lang = item.getAttribute('data-lang')
      if (lang) {
        await setLang(lang)
      }
      langToggle.setAttribute('aria-expanded', 'false')
      langMenu.hidden = true
    })
  })

  document.addEventListener('click', (e) => {
    if (!langToggle.contains(e.target) && !langMenu.contains(e.target)) {
      langToggle.setAttribute('aria-expanded', 'false')
      langMenu.hidden = true
    }
  })
}

/**
 * Initializes the light/dark theme toggle button.
 * Loads saved theme from localStorage and updates the UI accordingly.
 * Toggles between 'light' and 'dark' themes and updates localStorage.
 *
 */
export function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle')
  if (!themeToggleBtn) return

  const iconSun = themeToggleBtn.querySelector('.icon-sun')
  const iconMoon = themeToggleBtn.querySelector('.icon-moon')

  function updateToggleIcon(theme) {
    if (!iconSun || !iconMoon) return

    if (theme === 'dark') {
      iconSun.style.display = 'block'
      iconMoon.style.display = 'none'
      themeToggleBtn.setAttribute('aria-pressed', 'true')
    } else {
      iconSun.style.display = 'none'
      iconMoon.style.display = 'block'
      themeToggleBtn.setAttribute('aria-pressed', 'false')
    }
  }

  const savedTheme = localStorage.getItem('theme') || 'light'
  document.documentElement.setAttribute('data-theme', savedTheme)
  updateToggleIcon(savedTheme)

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme')
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
    updateToggleIcon(newTheme)
  })
}

/**
 * Initializes the copy Docker command button.
 *
 */
export function initCopyDockerCmd() {
  const btn = document.getElementById('copy-btn')
  if (!btn) return
  const iconCopy = document.getElementById('icon-copy')
  const iconCheck = document.getElementById('icon-check')
  btn.addEventListener('click', () => {
    const cmd = document.getElementById('dockerCmd')
    if (!cmd) return
    navigator.clipboard.writeText(cmd.textContent).then(() => {
      // Swap icons
      iconCopy.style.display = 'none'
      iconCheck.style.display = 'inline'
      setTimeout(() => {
        iconCheck.style.display = 'none'
        iconCopy.style.display = 'inline'
      }, 2000)
    }, err => {
      console.error('Failed to copy text: ', err)
    })
  })
}

/**
 * Updates the footer year element with the current year.
 */
export function updateFooterYear() {
  const yearElem = document.getElementById('year')
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear()
  }
}
