# Stagepuls

Website für Stagepuls — DJ, Ton- und Lichttechnik für Hochzeiten, Firmenanlässe und Vereinsfeste in Weinfelden, Thurgau und der Ostschweiz.

## Projektstruktur

```
index.html         Startseite (Hero, Leistungen, Preise, Ablauf, Über mich, Einsatzgebiet, Kontakt)
impressum.html      Impressum
datenschutz.html    Datenschutzerklärung
assets/style.css    Globales Stylesheet
assets/script.js    Scroll-Animationen und Anfrage-Modal
```

Statische Seite ohne Build-Schritt — es genügt, `index.html` in einem Browser zu öffnen oder das Repo über GitHub Pages zu hosten.

## Lokal ansehen

```
python3 -m http.server 8000
```

Danach `http://localhost:8000` öffnen.

## Kontaktformular

Die Formulare senden per POST an [formsubmit.co](https://formsubmit.co/) an `info@stagepuls.ch`.
