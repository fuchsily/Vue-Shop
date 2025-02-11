<body>
    <h1>🛒 Shop - Single-Page-Application mit Vue.js</h1>
    <p>Dieses Projekt ist eine <strong>Single-Page-Application (SPA)</strong> mit <strong>Vue.js</strong> und bietet eine <strong>Benutzer-Authentifizierung</strong>, eine <strong>strukturierte Ordnerarchitektur</strong> und ein <strong>zwei-spaltiges Layout</strong>. Die Anwendung nutzt <strong>Firebase</strong> für die <strong>Datenbank</strong> und <strong>Authentifizierung</strong>, sowie <strong>Vuex</strong> für das <strong>State Management</strong>.</p>
  
  <h2>📁 Projektstruktur</h2>
    <pre>
shop/
│── node_modules/        # Abhängigkeiten (automatisch installiert)
│── public/              # Öffentliche statische Dateien
│── src/                 # Hauptprojektcode
│   ├── assets/          # Bilder und statische Assets
│   ├── components/      # Wiederverwendbare Komponenten
│   │   ├── auth/        # Authentifizierung (Login, Registrierung)
│   ├── layouts/         # Layout-Komponenten (Slot- & Router-View-Strategie)
│   ├── pages/           # Seiten-Komponenten
│   ├── store/           # Vuex Store (State Management)
│   ├── router/          # Vue Router (Navigation)
│   ├── App.vue          # Haupteinstiegspunkt für Vue
│   ├── main.js          # Initialisierung der App
│── .env                 # Umgebungsvariablen (API-Keys)
│── package.json         # Projektkonfiguration & Abhängigkeiten
│── babel.config.js      # Babel Konfiguration
│── .gitignore           # Dateien, die nicht in Git gespeichert werden
│── .eslintrc.js         # ESLint Konfigurationsdatei
    </pre>
    <hr>
    <h2>🚀 Installation & Setup</h2>
    <ol>
        <li><strong>Repository klonen</strong><br>
            <code>git clone &lt;repository-url&gt;</code><br>
            <code>cd shop</code>
        </li>
        <li><strong>Abhängigkeiten installieren</strong><br>
            <code>npm install</code>
        </li>
        <li><strong>Umgebungsvariablen einrichten</strong><br>
            Erstelle eine <code>.env</code>-Datei und füge deinen Firebase API Key hinzu:
            <pre>
VUE_APP_API_KEY_FIREBASE=DEIN_FIREBASE_API_KEY
            </pre>
        </li>
        <li><strong>Entwicklungsserver starten</strong><br>
            <code>npm run serve</code><br>
            Die Anwendung ist dann unter <strong>http://localhost:8080</strong> erreichbar.
        </li>
    </ol>
    <hr>
    <h2>📌 Features</h2>
    <ul>
        <li>✅ <strong>Single-Page-Application (SPA)</strong> mit Vue.js</li>
        <li>✅ <strong>Benutzer-Authentifizierung</strong> mit Firebase (Login & Registrierung)</li>
        <li>✅ <strong>Wiederverwendbare, wartbare Ordnerstruktur</strong> mit klar getrennten Modulen</li>
        <li>✅ <strong>Slot-Layout & Router-View Strategie</strong> für flexible Layout-Komponenten</li>
        <li>✅ <strong>Formularvalidierung mit VeeValidate & Yup</strong></li>
        <li>✅ <strong>Dauerhafte Datenspeicherung in Firebase</strong></li>
        <li>✅ <strong>Vue Router</strong> für clientseitiges Routing</li>
        <li>✅ <strong>Vuex Store</strong> für globales State Management</li>
    </ul>
    <hr>
    <h2>🏗 Komponentenübersicht</h2>
    <h3>🔑 Authentifizierung (<code>components/auth/</code>)</h3>
    <ul>
        <li><strong>Login.vue</strong> - Anmeldung mit E-Mail & Passwort (Firebase Authentication).</li>
        <li><strong>Register.vue</strong> - Registrierung neuer Benutzer mit Validierung durch <strong>VeeValidate & Yup</strong>.</li>
    </ul>
    <h3>🏠 Seiten (<code>pages/</code>)</h3>
    <ul>
        <li><strong>HomePage.vue</strong> - Startseite mit zwei Spalten. Rechts wird das Anmelde-/Registrierungsformular angezeigt.</li>
    </ul>
    <h3>📐 Layouts (<code>layouts/</code>)</h3>
    <ul>
        <li><strong>TheTwoColumnsLayout.vue</strong> - <strong>Flexibles 2-Spalten-Layout</strong>, das Inhalte links und rechts verteilt. Nutzt <strong>Slot-Layout</strong> & <strong>Router-View Strategie</strong> für dynamische Inhalte.</li>
    </ul>
    <h3>🔀 Routing (<code>router/index.js</code>)</h3>
    <ul>
        <li>Implementiert <strong>Vue Router</strong> für <strong>Navigation zwischen Login, Registrierung und Startseite</strong>.</li>
    </ul>
    <h3>📦 State Management (<code>store/index.js</code>)</h3>
    <ul>
        <li><strong>Vuex Store</strong> verwaltet den globalen Zustand der App.</li>
        <li>Enthält Methoden zur <strong>Benutzer-Registrierung & -Authentifizierung</strong>.</li>
    </ul>
    <hr>
    <h2>🛠 Technologien</h2>
    <ul>
        <li><strong>Vue 3</strong></li>
        <li><strong>Vue Router</strong> (Navigation)</li>
        <li><strong>Vuex</strong> (State Management)</li>
        <li><strong>Vee-Validate + Yup</strong> (Formularvalidierung)</li>
        <li><strong>Firebase Authentication & Firestore</strong> (Backend & Datenbank)</li>
        <li><strong>Bootstrap 5</strong> (Styling)</li>
        <li><strong>Font Awesome Icons</strong></li>
    </ul>

    <hr>

    <h2>📜 Lizenz</h2>
    <p>Dieses Projekt steht unter der <strong>MIT-Lizenz</strong>.</p>
</body>
