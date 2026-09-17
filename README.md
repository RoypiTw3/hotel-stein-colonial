# Hotel Stein Colonial

Rediseño completo del sitio del Hotel Stein Colonial en Next.js, TypeScript y Tailwind CSS.

## Desarrollo

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Contenido

- Datos generales y enlaces: `data/site.ts`
- Habitaciones: `data/rooms.ts`
- Servicios: `data/services.ts`
- Planes: `data/plans.ts`
- Reseñas: `data/reviews.ts`
- Fotografías: `public/images/`

La URL editable del motor de reservas está en `data/site.ts`, propiedad `bookingUrl`.

## Verificación

```bash
npm run lint
npm run build
```
