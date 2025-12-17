# Quick Start Guide

Get the Natural History Museum website running in 5 minutes!

## 🚀 Fast Setup (3 Steps)

### 1. Install Dependencies
Open terminal in VS Code and run:
```bash
npm install
```

### 2. Create Assets Folder
Create this folder structure:
```
public/
  └── assets/
```

Place your image files (*.png) in the `public/assets/` folder.

### 3. Start Development Server
```bash
npm run dev
```

Open browser to: **http://localhost:5173**

## ✅ You're Done!

The website should now be running. You'll see:
- **Home page** with museum information, exhibitions, and ticket prices
- **Navigation** - Click "Exhibitions" to see the "Global Backyard" page
- **Footer** with contact information and social media links

## 📝 Quick Tips

- **Auto-reload**: Save any file and the browser refreshes automatically
- **Stop server**: Press `Ctrl + C` in terminal
- **Edit pages**: Look in the `imports/` folder
- **Change styles**: Edit `styles/globals.css` or use Tailwind classes

## 🖼️ Missing Images?

Don't have the image files? The website will still work! You can:
- Use placeholder images
- Replace image imports in `imports/Home.tsx` and `imports/NewInTheGlobalBackyard.tsx`
- Download similar images from [Unsplash](https://unsplash.com)

## 🎨 Customization Ideas

1. **Change colors**: Edit the colors in `styles/globals.css`
2. **Update content**: Modify text in `imports/Home.tsx`
3. **Add pages**: Create new components in `imports/`
4. **Update navigation**: Edit the navigation logic in `App.tsx`

## ❓ Need More Help?

Check out `SETUP_GUIDE.md` for detailed instructions!

---

**Happy coding! 🎉**
