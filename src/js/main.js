import { loadInitialLanguage, setLang } from './i18n.js'
import {
  initHamburgerMenu,
  initHeaderScroll,
  initLanguageMenu,
  initThemeToggle,
  loadGitHubButtonsScript,
  initGitHubButton,
  updateFooterYear
} from './ui.js'

window.addEventListener('DOMContentLoaded', async () => {
  try {
    await loadGitHubButtonsScript()
    await loadInitialLanguage()
    initHamburgerMenu()
    initHeaderScroll()
    initLanguageMenu(setLang)
    initThemeToggle()
    initGitHubButton()
    updateFooterYear()
  } catch (err) {
    console.error('Error during app initialization:', err)
  }
})
