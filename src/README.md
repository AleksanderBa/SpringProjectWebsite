# Natural History Museum Aarhus Website

This is a React + TypeScript website for the Natural History Museum Aarhus (Naturhistorisk Museum), featuring a home page and exhibition pages.

## Project Structure

```
/
├── App.tsx                          # Main app component with navigation
├── imports/
│   ├── Home.tsx                     # Home page component
│   ├── NewInTheGlobalBackyard.tsx   # Exhibition page component
│   ├── svg-rdau46vjow.ts           # SVG paths for Home page
│   └── svg-gshr5vnkae.ts           # SVG paths for Exhibition page
├── components/
│   ├── figma/
│   │   └── ImageWithFallback.tsx   # Fallback image component
│   └── ui/                          # UI components library
├── styles/
│   └── globals.css                 # Global styles and Tailwind config
└── README.md                        # This file
```

## Features

- **Home Page**: Features a hero carousel, "Future Human" exhibition details, and ticket pricing information
- **Exhibition Page**: Showcases "Endangered Predators of Denmark" exhibition
- **Navigation**: Click on navigation items to switch between pages
- **Responsive Design**: Built with Tailwind CSS
- **Social Media Links**: Footer includes links to TripAdvisor, Facebook, Instagram, LinkedIn, and YouTube

## Getting Started in Visual Studio Code

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Open the project folder in Visual Studio Code

2. Open the integrated terminal (Terminal > New Terminal or Ctrl+`)

3. Install dependencies:
```bash
npm install
```

### Required Dependencies

The project requires the following packages:
```bash
npm install react react-dom
npm install -D typescript @types/react @types/react-dom
npm install -D tailwindcss postcss autoprefixer
npm install -D vite @vitejs/plugin-react
```

### Development

Run the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

## Image Assets

The website uses images imported via Figma's asset system. The following images are used:

**Home Page:**
- `a239b2037acbc9301b2fd951317d6271cff22ebc.png` - Hero carousel image
- `8aa0d717f8eefaf52caca3406bd13c7aeeee3466.png` - Museum logo
- `e5a22f390b749fc63aae121ca333521ded027cf7.png` - Exhibition image 1
- `f03c10e472007a36948fdf507f0c39637697c8b7.png` - Ticket prices image

**Exhibition Page:**
- `8aa0d717f8eefaf52caca3406bd13c7aeeee3466.png` - Museum logo
- `85a93dff094cd92eb9de11fb58d10e7863aa8116.png` - Endangered predators poster

## Navigation

The website includes two main pages:

1. **Home** - Main landing page with museum information
2. **Exhibitions** - "New in 'The Global Backyard'" exhibition details

Click on the navigation items in the header to switch between pages.

## Styling

The project uses:
- **Tailwind CSS v4.0** for utility-first styling
- Custom CSS variables for theming
- Inter font family

## Contact Information

**Naturhistorisk Museum**
- Address: Wilhelm Meyers Allé 10, Universitetsparken, 8000 Aarhus C
- Phone: 86 12 97 77
- Email: nm@nathist.dk

**Opening Hours:**
- Monday: Closed
- Tuesday: 09-16
- Wednesday: 09-21
- Thursday - Sunday: 09-16
- Closed: January 1st and December 24th, 25th, and 31st

**Molslaboratoriet**
- Address: Strandkærvej 6, Femmøller, 8400 Ebeltoft
- Phone: 86 36 25 35 or 86 12 97 77
- Email: molslab@molslab.dk

## Building for Production

To create a production build:
```bash
npm run build
```

The build output will be in the `dist` folder.

## License

This project was created from a Figma design import.
