# Complete Project Structure

This document lists all files in your Natural History Museum website project.

## 📁 Root Directory

```
naturhistorisk-museum-website/
│
├── 📄 index.html              # HTML entry point
├── 📄 main.tsx               # React application entry point
├── 📄 App.tsx                # Main app component with page routing
│
├── 📄 package.json           # Project dependencies and scripts
├── 📄 tsconfig.json          # TypeScript configuration
├── 📄 tsconfig.node.json     # TypeScript config for Node
├── 📄 vite.config.ts         # Vite bundler configuration
├── 📄 postcss.config.js      # PostCSS configuration for Tailwind
├── 📄 .eslintrc.cjs          # ESLint configuration
├── 📄 .gitignore             # Git ignore patterns
│
├── 📄 README.md              # Project overview
├── 📄 SETUP_GUIDE.md         # Detailed setup instructions
├── 📄 QUICK_START.md         # Quick start guide
└── 📄 PROJECT_STRUCTURE.md   # This file
```

## 📁 Imports Folder (`/imports/`)

Contains the main page components imported from Figma:

```
imports/
├── 📄 Home.tsx                    # Home page component
├── 📄 NewInTheGlobalBackyard.tsx  # Exhibition page component
├── 📄 svg-rdau46vjow.ts          # SVG path data for Home page icons
└── 📄 svg-gshr5vnkae.ts          # SVG path data for Exhibition page icons
```

**What these files do:**
- `Home.tsx`: Main landing page with hero carousel, exhibition info, and ticket prices
- `NewInTheGlobalBackyard.tsx`: Exhibition page showcasing endangered predators
- `svg-*.ts`: Contains SVG path data for social media icons and navigation arrows

## 📁 Components Folder (`/components/`)

Reusable React components:

```
components/
│
├── figma/
│   └── 📄 ImageWithFallback.tsx   # Protected: Image component with fallback
│
└── ui/                            # UI component library
    ├── 📄 accordion.tsx
    ├── 📄 alert-dialog.tsx
    ├── 📄 alert.tsx
    ├── 📄 avatar.tsx
    ├── 📄 badge.tsx
    ├── 📄 button.tsx
    ├── 📄 calendar.tsx
    ├── 📄 card.tsx
    ├── 📄 checkbox.tsx
    ├── 📄 dialog.tsx
    ├── 📄 input.tsx
    ├── 📄 label.tsx
    ├── 📄 select.tsx
    ├── 📄 table.tsx
    ├── 📄 tabs.tsx
    └── ... (many more UI components)
```

**What these files do:**
- UI components provide pre-built, styled components you can use in your pages
- `ImageWithFallback.tsx` is a special component for handling images safely

## 📁 Styles Folder (`/styles/`)

```
styles/
└── 📄 globals.css    # Global styles and Tailwind CSS configuration
```

**What this file does:**
- Defines CSS variables for colors, spacing, and theming
- Sets up Tailwind CSS utilities
- Provides base typography styles

## 📁 Public Folder (`/public/`) - **You need to create this**

```
public/
└── assets/
    ├── 🖼️ a239b2037acbc9301b2fd951317d6271cff22ebc.png  # Hero image
    ├── 🖼️ 8aa0d717f8eefaf52caca3406bd13c7aeeee3466.png  # Museum logo
    ├── 🖼️ e5a22f390b749fc63aae121ca333521ded027cf7.png  # Exhibition image 1
    ├── 🖼️ f03c10e472007a36948fdf507f0c39637697c8b7.png  # Ticket prices image
    └── 🖼️ 85a93dff094cd92eb9de11fb58d10e7863aa8116.png  # Predators poster
```

**Important:** You need to create the `public/assets/` folder and add your images there.

## 📁 VS Code Settings (`.vscode/`)

```
.vscode/
├── 📄 settings.json     # VS Code workspace settings
└── 📄 extensions.json   # Recommended VS Code extensions
```

## 📦 Key Files Explained

### Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Lists all npm packages and defines scripts |
| `tsconfig.json` | Configures TypeScript compiler |
| `vite.config.ts` | Configures Vite build tool |
| `postcss.config.js` | Configures PostCSS for Tailwind |
| `.eslintrc.cjs` | Configures code linting rules |

### Entry Files

| File | Purpose |
|------|---------|
| `index.html` | HTML template, loads the React app |
| `main.tsx` | Mounts the React app to the DOM |
| `App.tsx` | Root component with navigation logic |

### Page Components

| File | Purpose |
|------|---------|
| `imports/Home.tsx` | Home page with museum info |
| `imports/NewInTheGlobalBackyard.tsx` | Exhibition page |

### Style Files

| File | Purpose |
|------|---------|
| `styles/globals.css` | Global CSS with Tailwind config |

## 🔧 Generated Folders (After npm install)

These folders are created automatically and should NOT be edited:

```
node_modules/     # Installed npm packages (thousands of files)
dist/            # Production build output (created by npm run build)
```

## 📝 Files You'll Edit Most Often

As you develop your website, you'll mainly work with:

1. **`imports/Home.tsx`** - Edit home page content
2. **`imports/NewInTheGlobalBackyard.tsx`** - Edit exhibition page
3. **`styles/globals.css`** - Change colors and global styles
4. **`App.tsx`** - Add new pages or modify navigation
5. **`public/assets/`** - Add/replace images

## 🚫 Files You Should NOT Edit

- **`components/figma/ImageWithFallback.tsx`** - Protected system file
- **`node_modules/`** - Managed by npm
- **`dist/`** - Auto-generated build output

## 📊 Total File Count

- **Configuration files**: ~10
- **React component files**: ~3 main pages
- **UI components**: ~40 pre-built components
- **Style files**: 1
- **Documentation**: 4 (README, SETUP_GUIDE, QUICK_START, PROJECT_STRUCTURE)
- **SVG data files**: 2

## 🎯 Where to Start

If you're new to this project:

1. Read `QUICK_START.md` first
2. Open `App.tsx` to see the main structure
3. Explore `imports/Home.tsx` to see a complete page
4. Check `styles/globals.css` for styling
5. Read `SETUP_GUIDE.md` for detailed explanations

---

**Need help?** Check the other markdown files in this project!
