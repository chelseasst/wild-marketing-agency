
# Wild Marketing Agency – Website 🦁

Live site: [`https://wildmarketingagency.com/`](https://wildmarketingagency.com/)

Modern, multilingual marketing agency website built with Angular 16, deployed on Firebase Hosting, featuring EmailJS-powered contact forms, responsive layout, and GDPR-compliant cookie consent via Cookiebot with Google Consent Mode.

## Tech stack
- **Framework**: Angular 16 (CLI 16.2.x)
- **i18n**: `@ngx-translate/core` + JSON locale files under `src/assets/i18n/`
- **Email**: `@emailjs/browser` for contact form delivery
- **Hosting**: Firebase Hosting (SPA rewrites configured)
- **Cookie consent**: Cookiebot + Google Consent Mode (v2)

## Features
- **Responsive UI** with dedicated desktop and mobile headers
- **Multilingual** (English, Bulgarian) with runtime language switch via `LanguageService`
- **Contact form** integrated with EmailJS
- **Cookie consent & Consent Mode** initialized in `src/index.html`
- **SEO-ready** structure and assets

## Project structure (key paths)
- `src/app/core/header/` – Header components (`header-desktop`, `header-mobile`)
- `src/app/shared/` – Reusable components (e.g., `contact-us`, `action-banner`)
- `src/app/home`, `src/app/services`, `src/app/steps`, `src/app/facts`, `src/app/why-us` – Feature sections
- `src/app/language.service.ts` – Language switching via `ngx-translate`
- `src/app/email.service.ts` – EmailJS integration
- `src/assets/i18n/` – Translation files (`en.json`, `bg.json`)
- `firebase.json` – Firebase Hosting config (SPA rewrite to `index.html`)
- `angular.json` – Build configuration (output to `dist/wild-marketing-agency`)

## Getting started
### Prerequisites
- Node.js 18+
- Angular CLI 16+ (`npm i -g @angular/cli`)
- Firebase CLI (`npm i -g firebase-tools`) if you plan to deploy

### Install
```bash
npm install
```

### Run locally
```bash
npm start
# open http://localhost:4200
```

## Configuration
### Environment variables (EmailJS)
EmailJS is configured via Angular environments and used in `EmailService`:

### Internationalization (ngx-translate)
- Translations live in `src/assets/i18n/en.json` and `src/assets/i18n/bg.json`.
- `LanguageService` wraps `TranslateService` to set and get the current language at runtime.


Switch language via `LanguageService.setLanguage('en' | 'bg')`.

### Cookie consent (Cookiebot + Consent Mode)
Cookie consent is integrated in `src/index.html` with Cookiebot and Google Consent Mode default/update calls. The script tag includes your Cookiebot `data-cbid` and uses `data-blockingmode="auto"` so non-necessary scripts are held until consent.

Key snippet location: `src/index.html` (search for "CookiebotOnConsentReady").

What it does:
- Sets **default denied** state for ad/analytics/storage until consent
- On consent, updates Consent Mode and initializes analytics accordingly

## Deployment (Firebase Hosting)
The repo is configured for Firebase Hosting as a Single Page Application.


### One-time setup
```bash
firebase login
firebase init hosting  # if not already initialized
```

## Scripts
- `npm start`: Run dev server at `http://localhost:4200`
- `npm run build`: Production build with optimizations
- `npm test`: Run unit tests (Karma)

## Useful references
- Angular CLI docs: [`https://angular.io/cli`](https://angular.io/cli)
- ngx-translate: [`https://github.com/ngx-translate/core`](https://github.com/ngx-translate/core)
- EmailJS SDK: [`https://www.emailjs.com/docs/sdk/installation/`](https://www.emailjs.com/docs/sdk/installation/)
- Firebase Hosting: [`https://firebase.google.com/docs/hosting`](https://firebase.google.com/docs/hosting)
- Cookiebot: [`https://www.cookiebot.com/`](https://www.cookiebot.com/)

## License
Proprietary – all rights reserved. Contact the maintainers for usage permissions.

