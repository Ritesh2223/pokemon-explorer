Pokémon Explorer
Pokémon Explorer is a responsive web application built with Next.js, TypeScript, and TailwindCSS, allowing users to browse and search Pokémon using the PokéAPI. The app features a homepage with a searchable Pokémon list, pagination, and a detail page for each Pokémon, displaying details like image, ID, types, abilities, stats, and moves. The favicon is a Pokémon_logo SVG, and the app is optimized with static site generation (SSG).
Features

Homepage: Displays a list of Pokémon (limit set to 151) with a search bar and pagination (10, 20, 30, 40, 50 items per page).
Detail Page: Shows detailed information for each Pokémon, including image, ID, types, abilities, stats, and a subset of moves, with a back button to return to the previous page.
Responsive Design: Uses TailwindCSS for a modern, mobile-friendly UI with hover effects and gradient backgrounds.
Favicon: Custom Pokémon_logo SVG icon in the browser tab.
Static Site Generation: Leverages Next.js getStaticProps and getStaticPaths for fast performance.

Prerequisites

Node.js: Version 18 or higher
npm or yarn: Package manager for installing dependencies
Git: To clone the repository
PokéAPI: Data source (no setup required, accessed via https://pokeapi.co/)

Setup Instructions
Follow these steps to run the Pokémon Explorer locally:
1. Clone the Repository
git clone https://github.com/your-username/pokemon-explorer.git
cd pokemon-explorer

Replace your-username with your GitHub username.
2. Install Dependencies
Install the required packages using npm:
npm install

Or with yarn:
yarn install

Required dependencies:

next, react, react-dom
axios (for API requests)
typescript and related packages (@types/react, @types/node)

3. Add the Favicon

Place a Pokémon_logo.svg file in the public folder (e.g., public/Pokémon_logo.svg).
If you don’t have a Pokémon_logo SVG, download one from an open-source library like Icons8 or create your own.
Ensure the file is named Pokémon_logo.svg and located in public.

4. Run the Development Server
Start the app locally:
npm run dev

Or with yarn:
yarn dev

Open http://localhost:3000 in your browser to view the app.
5. Test the App

Homepage: Verify the Pokémon list loads, search works, and pagination controls (10, 20, 30, 40, 50 items per page) function correctly.
Detail Page: Click a Pokémon to view its details (image, ID, types, abilities, stats, moves) and test the back button.
Favicon: Ensure the Pokémon_logo icon appears in the browser tab.
Responsiveness: Test on mobile and desktop views.

6. Build for Production
To create an optimized production build:
npm run build
npm run start

This serves the production build at http://localhost:3000.
Project Structure
pokemon-explorer/
├── public/
│   └── Pokémon_logo.svg           # Favicon
├── pages/
│   ├── index.tsx             # Homepage with Pokémon list, search, and pagination
│   ├── pokemon/[name].tsx    # Dynamic route for Pokémon detail page
│   └── _app.tsx             # (Optional) Global app configuration
├── styles/
│   └── globals.css           # TailwindCSS setup
├── types/
│   └── pokemon.ts            # TypeScript interfaces for PokéAPI data
├── next.config.js            # Next.js configuration (e.g., image domains)
├── package.json              # Dependencies and scripts
└── README.md                 # This file

Troubleshooting

Images not loading: Verify next.config.js includes raw.githubusercontent.com.
Favicon missing: Check Pokémon_logo.svg is in public and accessible at /Pokémon_logo.svg.
API errors: Ensure internet connectivity and PokéAPI availability.
Build issues: Run npm run build to check for errors and ensure TypeScript types are correct.

Contributing
Contributions are welcome! Fork the repository, make changes, and submit a pull request.
License
This project is licensed under the MIT License.
