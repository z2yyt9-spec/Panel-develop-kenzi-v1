# Kenzi Full Aesthetic Patch

Changes:
- Replaced logo & icon:
  - `public/reviactyl/logo.png`
  - `public/reviactyl/icon.png`
  - Updated common favicons in `public/favicons/`
- Added background gradient override (client SPA):
  - `resources/scripts/assets/css/KenziBackground.css` imported in `resources/scripts/components/App.tsx`
- Added admin background gradient override:
  - `public/themes/reviactyl/css/kenzi-aesthetic.css` included in `resources/views/layouts/admin.blade.php`
- Branding string replacements: "Reviactyl" -> "Kenzi" in a small set of UI files.

Build (example):
- `npm install` / `pnpm install`
- `npm run build` / `pnpm build`
- `php artisan optimize:clear`
