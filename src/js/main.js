import { loadInitialLanguage, setLang } from './i18n.js'
import {
  initHamburgerMenu,
  initHeaderScroll,
  initLanguageMenu,
  initThemeToggle,
  initCopyDockerCmd,
  updateFooterYear
} from './ui.js'

// Wait for DOM to be fully loaded before initializing the app
window.addEventListener('DOMContentLoaded', async () => {
  try {
    // Load and apply the correct language based on ?lang or localStorage
    await loadInitialLanguage()

    // Initialize UI components
    initHamburgerMenu()        // Mobile nav toggle
    initHeaderScroll()         // Header border on scroll
    initLanguageMenu(setLang)  // Language dropdown logic
    initThemeToggle()          // Light/dark mode toggle
    initCopyDockerCmd()        // Copy Docker command to clipboard
    updateFooterYear()         // Set current year in footer
  } catch (err) {
    console.error('Error during app initialization:', err)
  }
})
