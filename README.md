# minisoftware-spree

WORK//AI ist eine kleine browserbasierte Mini-Software als einzelne HTML-Anwendung. Sie hilft dabei, Prompt-Vorlagen fuer typische Arbeitsaufgaben zu speichern, mit Platzhaltern auszufuellen und schnell wiederzuverwenden.

## Projektziel

- Die Anwendung liegt in GitHub und kann gemeinsam weiterentwickelt werden.
- Sie wird ueber GitHub Pages oeffentlich erreichbar gemacht.
- Sie soll als installierbare Web-App auf dem Handy funktionieren.
- Spaeter sollen Android-APK und Windows-EXE automatisiert als Releases erzeugt werden.

## Projektstruktur

- `index.html`: Die eigentliche Anwendung
- `manifest.webmanifest`: PWA-Metadaten fuer die installierbare Web-App
- `service-worker.js`: Offline-Cache fuer den App-Start
- `assets/icon.svg`: App-Icon
- `.github/workflows/pages.yml`: Automatisches Deployment auf GitHub Pages
- `.github/workflows/release-apps.yml`: Automatischer Build fuer Android-APK und Windows-EXE
- `package.json`: Node- und Packaging-Konfiguration
- `capacitor.config.json`: Android-App-Konfiguration
- `electron/main.js`: Startdatei fuer die Windows-App
- `scripts/prepare-web.mjs`: Baut aus den Quelldateien den Web-Ordner fuer App-Pakete

## Lokal starten

Die App braucht keinen Build-Schritt. Einfach `index.html` im Browser oeffnen.

Fuer den vollen PWA-Test inklusive Service Worker ist ein lokaler Webserver besser als ein Doppelklick auf die Datei. Spaeter auf GitHub Pages funktioniert das automatisch ueber HTTPS.

## Zusammenarbeit in der Gruppe

1. Vor dem Arbeiten den neuesten Stand holen: `git pull`
2. Aenderungen lokal machen
3. Aenderungen speichern: `git add .`
4. Commit erstellen: `git commit -m "Kurze Beschreibung"`
5. Nach GitHub hochladen: `git push`

## GitHub Pages

Nach dem Push kann das Repository so veroeffentlicht werden:

1. GitHub Repository oeffnen
2. `Settings` > `Pages`
3. Bei `Build and deployment` die Quelle `GitHub Actions` verwenden

Danach uebernimmt der Workflow in `.github/workflows/pages.yml` die Veroeffentlichung.

## APK und EXE automatisch bauen

Die Release-Automation ist vorbereitet:

- Android wird als installierbare `APK` ueber Capacitor gebaut.
- Windows wird als `EXE` ueber Electron Builder gebaut.
- Wenn ein Git-Tag wie `v0.1.0` nach GitHub gepusht wird, legt GitHub Actions ein Release an und haengt die gebauten Dateien an.

Beispiel:

```powershell
git tag v0.1.0
git push origin v0.1.0
```

## Wichtiger Hinweis zu Android

Aktuell erzeugt der Workflow bewusst eine `debug`-APK, damit der Build sofort ohne zusaetzliche Geheimnisse funktioniert. Diese APK kann auf Android-Geraeten installiert werden, ist aber noch nicht fuer den Play Store gedacht.

Spaeter koennen wir den Workflow auf eine signierte `release`-APK umstellen. Dafuer braucht ihr dann einen Android-Keystore und die passenden GitHub-Secrets.
