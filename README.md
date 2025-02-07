# Valentine's Day Proposal Web App 💝

A cute and interactive web application to ask someone to be your Valentine! Built with Nuxt 3, Vue.js, and TailwindCSS.

## Features

- Interactive "Yes/No" buttons
- Dynamic GIF changes on "No" clicks
- Growing "Yes" button to encourage positive response
- Multi-step flow:
  1. Initial proposal page
  2. Cuisine selection
  3. Date selection
  4. Final confirmation

## Tech Stack

- **Framework**: Nuxt 3
- **UI Library**: Vue.js
- **Styling**: TailwindCSS
- **State Management**: Pinia
- **Components**: Radix Vue (Calendar)

## Getting Started

1. Clone the repository:

```bash
git clone [your-repo-url]
cd [your-repo-name]
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser and visit `http://localhost:3000`

## Project Structure

```
├── pages/              # Application pages
│   ├── index.vue      # Initial proposal page
│   ├── cuisine.vue    # Food preference selection
│   ├── date.vue       # Date selection
│   └── summary.vue    # Final confirmation
├── stores/            # Pinia stores
│   └── dateStore.js   # Shared state management
├── components/        # Reusable components
└── assets/           # Static assets
```

## Customization

1. **Change Initial GIF**: Update the `initialGif` URL in `pages/index.vue`
2. **Modify Sad GIFs**: Edit the `sadGifs` array in `pages/index.vue`
3. **Update Cuisine Options**: Modify the `cuisines` array in `pages/cuisine.vue`
4. **Change Default Date**: Update the default date in `pages/date.vue`

## Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Made with 💖 by Irfan for Valentine's Day
