# Open Source Hardware Search

| Name | Link |
| ---- | ---- |
| Specification (DE): | https://md.havelwerk.cc/ngi#Spezifikation-Front-End |
| Planning-Pad: | https://md.havelwerk.cc/osh-search |
| License: | https://codeberg.org/OSEGermany/osh-search/src/branch/main/LICENSE |

# Technologies
* [react](https://react.dev/) as the frontend framework
* [shadcn](https://ui.shadcn.com/)
  * which uses [radix-ui](https://www.radix-ui.com/)
  * and [tailwind css](https://tailwindcss.com/)
* [vite](https://vite.dev/) as the building tool
* [nodejs](https://nodejs.org/en) (as of LTS 22.16.0) with npm

# Install and run

Make sure nodejs with at least version 22.16.0 is installed globally on your machine. Open a terminal in your project folder, then type

```bash
npm install
```

and afterwards
```bash
npm run dev
```

to start the app in dev mode, then you can visit http://localhost:5173/ (default) in your browser of choice.

# License

GPLv3-or-later, see LICENSE document.