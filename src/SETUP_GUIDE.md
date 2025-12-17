# Setup Guide for Visual Studio Code

This guide will help you set up and run the Natural History Museum website in Visual Studio Code.

## Step 1: Prerequisites

Before you begin, make sure you have the following installed:

1. **Node.js** (v18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: Open terminal and run `node --version`

2. **Visual Studio Code**
   - Download from: https://code.visualstudio.com/

3. **Git** (optional, but recommended)
   - Download from: https://git-scm.com/

## Step 2: Open Project in VS Code

1. Launch Visual Studio Code
2. Click "File" > "Open Folder"
3. Navigate to and select this project folder
4. Click "Select Folder"

## Step 3: Install Dependencies

1. Open the integrated terminal in VS Code:
   - Menu: `Terminal` > `New Terminal`
   - Or press: `Ctrl + \`` (backtick)

2. In the terminal, run:
```bash
npm install
```

This will install all the required packages. It may take a few minutes.

## Step 4: Set Up Image Assets

The website uses several images. You need to create a folder structure for them:

1. Create a `public` folder in the project root
2. Inside `public`, create an `assets` folder
3. Place the following image files in `public/assets/`:
   - `a239b2037acbc9301b2fd951317d6271cff22ebc.png`
   - `8aa0d717f8eefaf52caca3406bd13c7aeeee3466.png`
   - `e5a22f390b749fc63aae121ca333521ded027cf7.png`
   - `f03c10e472007a36948fdf507f0c39637697c8b7.png`
   - `85a93dff094cd92eb9de11fb58d10e7863aa8116.png`

**Note:** If you don't have these images, the website will still work, but images won't display.

## Step 5: Run the Development Server

In the VS Code terminal, run:
```bash
npm run dev
```

You should see output like:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

## Step 6: View the Website

1. Hold `Ctrl` (or `Cmd` on Mac) and click on the `http://localhost:5173/` link in the terminal
   - OR -
2. Open your web browser and go to: `http://localhost:5173/`

## Step 7: Making Changes

- Edit any `.tsx` or `.css` file in VS Code
- Save the file (`Ctrl + S` or `Cmd + S`)
- The browser will automatically refresh with your changes

## Recommended VS Code Extensions

Install these extensions for a better development experience:

1. **ES7+ React/Redux/React-Native snippets**
   - Provides code snippets for React

2. **Tailwind CSS IntelliSense**
   - Auto-complete for Tailwind classes

3. **Prettier - Code formatter**
   - Automatically format your code

4. **ESLint**
   - Identify and fix code issues

To install extensions:
1. Click the Extensions icon in the left sidebar (or press `Ctrl + Shift + X`)
2. Search for the extension name
3. Click "Install"

## File Structure Overview

```
naturhistorisk-museum-website/
│
├── public/                  # Static assets
│   └── assets/             # Image files
│
├── imports/                # Page components from Figma
│   ├── Home.tsx
│   ├── NewInTheGlobalBackyard.tsx
│   ├── svg-rdau46vjow.ts
│   └── svg-gshr5vnkae.ts
│
├── components/             # Reusable components
│   ├── figma/
│   └── ui/
│
├── styles/                 # Global styles
│   └── globals.css
│
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
├── index.html             # HTML template
├── package.json           # Project dependencies
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite bundler configuration
└── postcss.config.js      # PostCSS configuration
```

## Common Commands

- **Start development server:** `npm run dev`
- **Build for production:** `npm run build`
- **Preview production build:** `npm run preview`
- **Install a new package:** `npm install package-name`

## Troubleshooting

### Port 5173 is already in use
- Stop the existing server (press `Ctrl + C` in the terminal)
- Or use a different port: `npm run dev -- --port 3000`

### Module not found errors
- Delete `node_modules` folder
- Run `npm install` again

### Changes not showing in browser
- Hard refresh the browser: `Ctrl + Shift + R` (or `Cmd + Shift + R` on Mac)
- Check that the dev server is running in the terminal
- Clear browser cache

### TypeScript errors in VS Code
- Close and reopen VS Code
- Run `npm install` to ensure all types are installed
- Check that all `.tsx` files have proper imports

## Building for Production

When you're ready to deploy your website:

1. Run the build command:
```bash
npm run build
```

2. The optimized files will be created in a `dist` folder

3. You can preview the production build locally:
```bash
npm run preview
```

4. Deploy the contents of the `dist` folder to your web hosting service

## Getting Help

If you encounter issues:

1. Check the terminal for error messages
2. Look at the browser console (press `F12` in browser)
3. Read the error message carefully - it usually tells you what's wrong
4. Make sure all files are saved (`Ctrl + K, S` to save all)

## Next Steps

Once everything is running:

1. Explore the code in the `imports/` folder
2. Customize the content and styling
3. Add new pages or features
4. Test the navigation between pages
5. Add your own images in the `public/assets/` folder

Happy coding! 🎉
