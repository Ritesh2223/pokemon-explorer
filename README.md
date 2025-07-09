Pokémon Explorer
A responsive web application built with Next.js, TypeScript, and TailwindCSS that allows users to browse and search Pokémon using the PokéAPI. The app features a homepage with a searchable Pokémon list, client-side pagination, and a detail page for each Pokémon, displaying image, ID, types, abilities, stats, and moves. It uses a Pokémon_logo SVG favicon and is optimized with static site generation (SSG).
Features

Homepage: Lists up to 500 Pokémon with a search bar and pagination (10, 20, 30, 40, 50 items per page).
Detail Page: Displays detailed Pokémon info (image, ID, types, abilities, stats, moves) with a back button to return to the previous page.
Responsive Design: Modern, mobile-friendly UI with hover effects and gradient backgrounds using TailwindCSS.
Favicon: Custom Pokémon_logo SVG icon in the browser tab.
Performance: Uses Next.js getStaticProps and getStaticPaths for fast, pre-rendered pages.

Prerequisites

Node.js: Version 18 or higher (download)
npm or yarn: Package manager for dependencies
Git: To clone the repository
PokéAPI: No setup needed, accessed via https://pokeapi.co/

Setup Instructions
1. Clone the Repository
git clone https://github.com/your-username/pokemon-explorer.git
cd pokemon-explorer

Replace your-username with your GitHub username.
2. Install Dependencies
Using npm:
npm install

Or using yarn:
yarn install

Dependencies include:

next, react, react-dom
axios for API requests
typescript, @types/react, @types/node

3. Add the Favicon

Copy a Pokémon_logo.svg file to the public folder (public/Pokémon_logo.svg).
If you don’t have a Pokémon_logo SVG, download one from Icons8 or create your own.
Ensure the file is named Pokémon_logo.svg and placed in public.

4. Run the Development Server
npm run dev

Or with yarn:
yarn dev

Open http://localhost:3000 in your browser.
5. Test the App

Homepage: Check that the Pokémon list loads, search bar filters names, and pagination works (select 10, 20, 30, 40, or 50 items per page).
Detail Page: Click a Pokémon to view its details and test the back button.
Favicon: Verify the Pokémon_logo icon appears in the browser tab.
Responsiveness: Test on mobile and desktop browsers.

6. Build for Production
npm run build
npm run start

This serves the optimized app at http://localhost:3000.
Project Structure
pokemon-explorer/
├── public/
│   └── Pokémon_logo.svg           # Favicon
├── pages/
│   ├── index.tsx             # Homepage (list, search, pagination)
│   ├── pokemon/[name].tsx    # Pokémon detail page
│   └── _app.tsx             # Global app config (optional)
├── styles/
│   └── globals.css           # TailwindCSS styles
├── types/
│   └── pokemon.ts            # TypeScript interfaces for PokéAPI
├── next.config.js            # Next.js image domains config
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation

Troubleshooting

Images not loading: Check next.config.js for raw.githubusercontent.com.
Favicon missing: Verify Pokémon_logo.svg is in public and accessible at /Pokémon_logo.svg.
API errors: Ensure internet connection and PokéAPI availability.
Build errors: Run npm run build to diagnose TypeScript or dependency issues.

Contributing
Fork the repository, make changes, and submit a pull request. Issues and feature requests are welcome!
License
MIT License