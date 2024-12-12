# React components

```bash
# clono la cartella da github

npm create vite@latest

# alla domanda project-name inserisco . (dot)

npm install

# testo
npm run dev

# apro il .gitignore e aggiungo package-lock.json

 # installo gli altri pacchetti che mi servono

 # cancello il contenuto di App.jsx e rimuovo gli import che non mi servono
 # cancello i file che non mi servono

 #se voglio importo bootstrap in main.jsx prima del mio css custom 
 import "bootstrap/dist/css/bootstrap.min.css";

 # comincio ad editare App.jsx


# add to rules in eslint
rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ..reactHooks.configs.recommended.rules,
      "react/prop-types": 0, 👈
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
```

```bash
Esercizio
Prendendo ispirazione dal layout fornito in allegato, creare la pagina iniziale di un blog con un post inserito al suo interno. Assicuratevi di suddividere il layout in componenti appropriati.
Step per creare il progetto:
Creiamo un progetto React utilizzando vite npm create vite@latest .
Installiamo le dipendenze npm install
Lanciamo il server di sviluppo npm run dev
Creiamo una cartella components nella quale inseriremo i nostri componenti
BONUS:
Invece di utilizzare un unico file index.css separiamo lo style utilizzando i CSS Modules
Creiamo un array di posts e usiamo le props per popolare le card con i dati giusti (ogni card il suo oggetto post)
```