# Sims-api

Ett REST-API för att hantera Familjer, Sims, Tomter och Världar. Byggt med Express, TypeScript och MySQL. Projektet är strukturerat med en blandning av layered architecture och MVC.

## Funktioner

- Endpoints för Familjer, Sims, Tomter och Världar
- Hämtar meta-data (t.ex. antal Sims per Familj)
- Felhantering med middleware
- Health check endpoint för server och databaskontroll
- Graceful shutdown för säker nedstängning

## Installation

1. Klona repot
```bash
git clone <repo-url>

npm install

npm run dev
```

## Teknikstack

- Node.js & Express
- TypeScript
- MySQL2
- Prisma (installerat men inte implementerat än)


---

### **Endpoints**

```markdown


| HTTP | Endpoint        | Beskrivning                                |
|------|----------------|-------------------------------------------|
| GET  | /familjer       | Hämtar alla familjer och hämtar antal Sims per familj                       |
| GET  | /familjer/:id   | Hämtar en familj med specifikt ID         | |
| GET  | /sims           | Hämtar alla Sims                           |
| GET  | /sims/:id       | Hämtar en Sim med specifikt ID            |
| GET  | /tomter         | Hämtar alla Tomter                          |
| GET  | /tomter/:id     | Hämtar en Tomt med specifikt ID           |
| GET  | /varldar        | Hämtar alla Världar                        |
| GET  | /varldar/:id    | Hämtar en Värld med specifikt ID          |
| GET  | /api/health         | Hämtar server- och databastatus            |
