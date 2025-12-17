# Instrukcja pobrania i uruchomienia projektu

## Krok 1: Utwórz folder projektu na swoim komputerze

```bash
mkdir naturhistorisk-museum
cd naturhistorisk-museum
```

## Krok 2: Struktura folderów

Utwórz następującą strukturę:

```
naturhistorisk-museum/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── postcss.config.js
├── index.html
├── main.tsx
├── App.tsx
├── styles/
│   └── globals.css
└── imports/
    ├── Home.tsx
    ├── NewInTheGlobalBackyard.tsx
    ├── svg-viq9zh93we.ts
    └── svg-gshr5vnkae.ts
```

## Krok 3: Skopiuj zawartość plików

### Główne pliki konfiguracyjne:

**package.json** - skopiuj zawartość z pliku w Figma Make

**vite.config.ts** - skopiuj zawartość

**tsconfig.json** - skopiuj zawartość

**index.html** - skopiuj zawartość

**main.tsx** - skopiuj zawartość

**App.tsx** - skopiuj zawartość

### Pliki ze stylami:

**styles/globals.css** - skopiuj zawartość

### Pliki z komponentami:

**imports/Home.tsx** - strona główna

**imports/NewInTheGlobalBackyard.tsx** - strona wystawy

**imports/svg-viq9zh93we.ts** - ikony SVG dla strony głównej

**imports/svg-gshr5vnkae.ts** - ikony SVG dla strony wystawy

## Krok 4: Obrazy

⚠️ **WAŻNE**: Obrazy używają specjalnego schematu `figma:asset/...` który działa tylko w Figma Make.

Aby użyć projektu lokalnie, musisz:
1. Zapisać obrazy z Figma Make (kliknij prawym na obraz → Zapisz obraz jako)
2. Umieścić je w folderze `public/images/`
3. Zmienić importy w plikach:

**Przykład - w Home.tsx zmień:**
```typescript
// Z tego:
import imgRectangle1 from "figma:asset/a239b2037acbc9301b2fd951317d6271cff22ebc.png";

// Na to:
import imgRectangle1 from "/images/hero-image-1.png";
```

## Krok 5: Instalacja i uruchomienie

```bash
# Zainstaluj zależności
npm install

# Uruchom serwer deweloperski
npm run dev
```

Strona powinna być dostępna pod adresem: `http://localhost:5173`

## Krok 6: Build produkcyjny

```bash
npm run build
```

Pliki produkcyjne znajdą się w folderze `dist/`

## Rozwiązywanie problemów

### Problem: Brak obrazów
**Rozwiązanie**: Pobierz obrazy z Figma Make i umieść je w `public/images/`, następnie zaktualizuj importy

### Problem: Błędy TypeScript
**Rozwiązanie**: Upewnij się, że wszystkie pliki `.ts` i `.tsx` są skopiowane poprawnie

### Problem: Styling nie działa
**Rozwiązanie**: Sprawdź czy plik `styles/globals.css` jest poprawnie skopiowany

## Lista wszystkich obrazów do pobrania:

1. **Logo muzeum** - imgNaturhistoriskMuseumLogo
2. **Hero carousel (3 obrazy)** - imgRectangle1, imgRectangle2, imgRectangle3
3. **Obraz wystawy** - imgImage1

---

**Wskazówka**: Najłatwiej jest użyć przycisku Export w Figma Make, jeśli jest dostępny - automatycznie pobierze wszystkie pliki!
