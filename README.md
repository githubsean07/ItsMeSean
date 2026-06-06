# Sean Del Rosario Signal Portfolio - React/Vite Version

This is the Node-based version of the Signal recruiter portfolio.

## Stack

- Vite
- React
- Plain CSS
- No Tailwind or shadcn required for this version

## Run Locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints, usually:

```text
http://localhost:5173
```

## Build

```bash
npm run build
npm run preview
```

## Notes

This version keeps Sean's portfolio content but moves the page into React components so the loader, header, portrait interaction, and testimonial slider are easier to refine toward the original Brittany/Gatsby interaction model.

The testimonials use the uploaded LinkedIn recommendation screenshots in `public/assets/testimonials` and show them one at a time at large readable size. The horizontal thumbnail strip has been removed, the repeated Jayr Abawag testimonial is no longer used, and the LinkedIn visibility row has been cleaned from the recommendation screenshots where it appeared.

The tools section uses a React marquee pattern based on the supplied component logic: one duplicated row, continuous horizontal motion, and pause-on-hover behavior. It is transparent against the main page background instead of sitting inside a dark panel, and it uses the uploaded tool logos stored in `public/assets/tools`.
