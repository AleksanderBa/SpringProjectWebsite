# 📸 Przewodnik po obrazach w projekcie

## Nazwy plików w folderze `public/assets/`

### Banner (Carousel na górze strony):
1. **banner1.png** - Pierwszy slajd w karuzeli (hash: a239b2037acbc9301b2fd951317d6271cff22ebc.png)
2. **banner2.png** - Drugi slajd w karuzeli (hash: e5a22f390b749fc63aae121ca333521ded027cf7.png)
3. **banner3.png** - Trzeci slajd w karuzeli (hash: f03c10e472007a36948fdf507f0c39637697c8b7.png)

### Logo muzeum:
- **logo.png** - Logo "Naturhistorisk Museum" (hash: 8aa0d717f8eefaf52caca3406bd13c7aeeee3466.png)

### Sekcja "Future Human":
- **future-human.png** - Obraz przy wystawie "Future Human" (hash: e5a22f390b749fc63aae121ca333521ded027cf7.png)

### Sekcja "Ticket Prices":
- **ticket-prices.png** - Obraz przy cenach biletów (hash: f03c10e472007a36948fdf507f0c39637697c8b7.png)

## Jak zamienić obrazy na własne:

### Krok 1: Przygotuj folder
Utwórz folder `public/assets/` w głównym katalogu projektu (jeśli nie istnieje).

### Krok 2: Skopiuj obrazy
Skopiuj swoje obrazy do folderu `public/assets/` używając powyższych nazw:
```
public/
  └── assets/
      ├── banner1.png
      ├── banner2.png
      ├── banner3.png
      ├── logo.png
      ├── future-human.png
      └── ticket-prices.png
```

### Krok 3: Zmień importy w kodzie
Otwórz plik `/imports/Home.tsx` i zmień importy z:
```tsx
import banner1 from "figma:asset/a239b2037acbc9301b2fd951317d6271cff22ebc.png";
```

Na:
```tsx
import banner1 from "/assets/banner1.png";
```

Powtórz to dla wszystkich obrazów:
```tsx
// Banner carousel images
import banner1 from "/assets/banner1.png";
import banner2 from "/assets/banner2.png";
import banner3 from "/assets/banner3.png";
// Museum logo
import imgNaturhistoriskMuseumLogo from "/assets/logo.png";
// Section images
import futureHuman from "/assets/future-human.png";
import ticketPrices from "/assets/ticket-prices.png";
```

### Krok 4: Zapisz i przetestuj
Zapisz plik i odśwież przeglądarkę - twoje obrazy powinny się teraz wyświetlać!

## Zalecane rozmiary obrazów:

- **Banner (1-3)**: 1800x500px (szerokość x wysokość)
- **Logo**: 280x70px
- **Future Human**: 600x400px
- **Ticket Prices**: 600x400px

## Wskazówki:

- Wszystkie obrazy muszą być w formacie PNG, JPG lub WEBP
- Upewnij się, że nazwy plików są dokładnie takie same (wielkie/małe litery mają znaczenie!)
- Jeśli obraz się nie wyświetla, sprawdź konsolę przeglądarki (F12) dla błędów
