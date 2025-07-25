[![deploy](https://github.com/wexflow/wexflow.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/wexflow/wexflow.github.io/actions/workflows/deploy.yml) [![lighthouse](https://github.com/wexflow/wexflow.github.io/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/wexflow/wexflow.github.io/actions/workflows/lighthouse.yml)

## About

[Wexflow](https://github.com/aelassas/wexflow) is an open-source and cross-platform workflow engine and automation platform built to simplify and automate recurring tasks. With over 100 built-in activities, Wexflow supports a wide range of tasks out of the box—from file operations and system processes to scripting, networking, and more.

This repository contains the source code for the [Wexflow](https://wexflow.github.io/) official landing page — a presentation site for the project.

Built with a clean and simple design, this website presents the main features, support, and contact sections to introduce Wexflow to users and developers.

This website is built using [Vite](https://vitejs.dev/) with plain HTML, CSS, and JavaScript.

Feel free to explore the code, see how everything works, suggest improvements, or use it as a starting point or template to build your own landing page.

## Performance Highlights (Mobile - Slow 4G)

This website delivers an exceptional experience even on slow mobile networks:

| Metric                     | Value | Rating      |
|----------------------------|-------|-------------|
| **First Contentful Paint** | 0.8 s | ✅ Excellent |
| **Largest Contentful Paint** | 1.5 s | ✅ Excellent |
| **Total Blocking Time**     | 0 ms  | ✅ Perfect   |
| **Cumulative Layout Shift** | 0     | ✅ Perfect   |
| **Speed Index**             | 0.8   | ✅ Excellent |

> ⚡ **Ultra-fast performance**  
> The website loads in under 1.5 seconds on slow 4G with **0ms blocking**, **0 layout shift**, and a blazing **Speed Index of 0.8**.


## Website Features

- Multilingual support (English, French, German, Spanish, Portuguese, Japanese, Chinese)
- Responsive and accessible design  
- Language switcher and dark mode toggle  
- Download links and contact form integration  
- Simple, clean, and modern UI built with Vite

## Separation of Concerns (SoC)

Each file/module has a single responsibility, helping keep the codebase clean and maintainable:

| File / Module        | Responsibility (Concern)                                      | Description                                                                 |
|----------------------|---------------------------------------------------------------|-----------------------------------------------------------------------------|
| `index.html`         | Structure / Content                                           | Defines the HTML structure and semantic layout of the page.                |
| `style.css`          | Presentation (Styling)                                        | Handles layout, colors, fonts, and responsive design using CSS.            |
| `i18n.js`            | Internationalization (i18n)                                   | Manages language loading, switching, and translation key resolution.       |
| `ga.js`              | Google Analytics                                              | Loads Google Analytics script on `mousemove` or `touchstart` to enhance performance by deferring third-party tracking until user interaction. |
| `ui.js`              | UI Behavior / Interactivity                                   | Manages dynamic UI features like header/footer loading, scroll effects, hamburger menu, theme toggle, etc. |
| `main.js`            | Application Initialization / Coordination                     | Initializes the app, connects modules together, and runs on DOM ready.     |
| `vite.config.js`     | Build Tool Configuration                                      | Configures how files are served and built using Vite.                      |
| `public/` folder     | Static Assets                                                 | Contains images, icons, and static resources directly served as-is.        |

By keeping each concern isolated in its own file, the project becomes easier to understand, test, and extend.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)  
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

Clone the repository:

```bash
git clone https://github.com/wexflow/wexflow.github.io.git
cd wexflow.github.io
```

Install dependencies:

```bash
npm install
```

### Development

Start the local development server with hot module replacement:

```bash
npm run dev
```

### Build

Build the static site for production:

```bash
npm run build
```

The built files will be in the `dist/` folder, ready to be deployed.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Deployment

This project is configured to be deployed on [GitHub Pages](https://pages.github.com/).

After building, push the `dist/` contents to the `gh-pages` branch or use GitHub Actions for automated deployment.

## Contributing

Contributions and suggestions are welcome. Feel free to open issues or pull requests.

Please keep changes focused and provide clear descriptions.

## License

This project is licensed under the MIT License.

## Links

* [Wexflow GitHub](https://github.com/aelassas/wexflow)
* [Download](https://github.com/aelassas/wexflow/releases/latest)
* [Documentation](https://github.com/aelassas/wexflow/wiki)
