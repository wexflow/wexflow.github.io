import { loadInitialLanguage, setLang } from './i18n.js'
import {
  initHamburgerMenu,
  initHeaderScroll,
  initLanguageMenu,
  initThemeToggle,
  updateFooterYear
} from './ui.js'

window.addEventListener('DOMContentLoaded', async () => {
  try {
    await loadInitialLanguage()
    initHamburgerMenu()
    initHeaderScroll()
    initLanguageMenu(setLang)
    initThemeToggle()
    updateFooterYear()
  } catch (err) {
    console.error('Error during app initialization:', err)
  }
})
