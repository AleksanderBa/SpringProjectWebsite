# Instrukcje Deploymentu na GitHub Pages

## Krok po kroku:

### 1. Przygotuj repozytorium na GitHubie
- Upewnij się, że cały kod jest na GitHubie w branchu `main` (lub `master`)

### 2. Skonfiguruj GitHub Pages w ustawieniach repozytorium
1. Przejdź do repozytorium na GitHubie
2. Kliknij **Settings** (Ustawienia)
3. W menu bocznym kliknij **Pages**
4. W sekcji **Source** wybierz:
   - Source: **GitHub Actions** (nie "Deploy from a branch")

### 3. Deploy automatyczny
Po każdym push do brancha `main`, strona zostanie automatycznie zbudowana i wdrożona dzięki GitHub Actions.

### 4. Sprawdź deployment
1. Przejdź do zakładki **Actions** w swoim repozytorium
2. Sprawdź czy workflow "Deploy to GitHub Pages" się wykonał
3. Po zakończeniu, strona będzie dostępna pod adresem:
   - `https://[twoja-nazwa-użytkownika].github.io/[nazwa-repozytorium]/`

### 5. Lokalny build (opcjonalnie)
Aby przetestować build lokalnie przed deploymentem:
```bash
npm run build
npm run preview
```

## Rozwiązywanie problemów:

### Problem: Strona pokazuje białą stronę
- Sprawdź konsolę przeglądarki (F12) dla błędów
- Upewnij się, że workflow GitHub Actions zakończył się sukcesem

### Problem: 404 Not Found
- Upewnij się, że w Settings > Pages wybrałeś **GitHub Actions** jako źródło
- Sprawdź czy workflow się wykonał w zakładce Actions

### Problem: Zasoby (obrazy) nie ładują się
- Sprawdź czy wszystkie pliki są w repozytorium
- Upewnij się, że `base: './'` jest w `vite.config.ts`

### Problem: Workflow się nie wykonuje
- Sprawdź czy plik `.github/workflows/deploy.yml` istnieje
- Sprawdź czy nazwa brancha w workflow (line 6) zgadza się z twoim branchem głównym

## Ważne uwagi:
- Pierwszy deployment może potrwać kilka minut
- Po każdej zmianie w kodzie i push, strona zostanie automatycznie zaktualizowana
- Jeśli zmienisz nazwę repozytorium, musisz zaktualizować link do strony
