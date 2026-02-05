# Echo Audit

Echo Audit is a lightweight **React + TypeScript + Vite** frontend application for transcript auditing and structured conversation analysis.

It converts raw transcripts into segmented stages (e.g. Introduction, Diagnosis, Resolution) and presents insights in an interactive review interface.  
Designed for fast iteration, clear visualization, and demo-friendly deployment.



## Features

- Transcript → Uses AssemblyAI API to transcribe audio with speaker labels and auto chapters.
- Stage-based conversation segmentation
- Side-by-side transcript and analysis view
- Static data for presentation
- Modular, extensible component design
- Fast local development with HMR



## Getting Started

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Visit:

```
http://localhost:5173
```

### Build

```bash
npm run build
```



## Project Structure

```
src/
  components/     reusable UI components
  pages/          main views
  data/           mock / generated call data
  utils/          parsing and helpers
public/           static assets
scripts/ 					Data generation scripts
vite.config.ts    Vite configuration
```



## Development Notes

- Uses static data for simplicity and demo purposes
- Data generation scripts can convert transcripts into structured callData
- Easy to integrate with real APIs or AI analysis pipelines later
