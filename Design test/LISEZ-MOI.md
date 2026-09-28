# Design test - KAVELA Healthcare

Pistes de design explorées les 27 et 28/09/2026 pour healthcare.kavela.co.
**Rien de ce dossier n'est publié.** Le site en ligne reste la version du commit `1e59cfb`.

## Contenu

| Dossier / fichier | Ce que c'est |
|---|---|
| `captures/` | Captures d'écran de chaque piste (le plus simple pour revoir) |
| `v1-carte-immersive/` | Version où la carte reste fixe pendant le défilement et s'anime par étape (Intelligence, Access, Execution) |
| `v2-banque-privee/` | Version "banque privée" : vert profond, polices Gambetta + Switzer, orbite interactive de l'écosystème. **Dernière piste retenue** |
| `concepts/` | Maquettes rapides A (monochrome), B (banque privée), C (cinématique) et la planche typographique |

## Revoir une version complète en fonctionnement

Chaque version est aussi enregistrée dans une branche du projet, prête à relancer :

- `design/banque-privee` : version v2 (banque privée)
- `archive/healthcare-carte-immersive` : version v1 (carte immersive)

Pour en rouvrir une, demander simplement à Claude : "relance la version banque privée en local".

## Revoir les maquettes rapides

Lancer `npm run dev`, puis ouvrir : `http://localhost:5173/Design%20test/concepts/index.html`
(les maquettes utilisent les logos du dossier `public/`, elles ne s'ouvrent pas correctement en double-cliquant sur le fichier).

## Décisions déjà prises

- Polices : **Gambetta** (titres) + **Switzer** (texte), gratuites pour usage commercial (Fontshare).
- Direction : concept **B, banque privée**.
- Logo : jeu **Eau** de `public/Healthcare/Eau/` (et sa version horizontale `public/Healthcare/Eau-horizontal/`).

## Point relevé en passant (site principal kavela.co)

Deux photos du site principal sont mal étiquetées dans `src/components/shared.jsx` :
- `IMG.corporate` ("Singapore skyline night") est en réalité **Los Angeles** (utilisée sur la page Corporate).
- `IMG.asia2` ("Singapore CBD") est en réalité **Kuala Lumpur**.
