# Validfor Demo

A one-page demo site for Validfor.com with SEO and crawlers disabled.

## Features

- Single-page website showcasing Validfor's digital validation platform
- SEO disabled (noindex, nofollow meta tags)
- Crawlers blocked (robots.txt with Disallow: /)
- Modern, responsive design

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## SEO & Crawler Blocking

This site has been configured to:
- Block all search engine crawlers via `robots.txt`
- Disable indexing with `noindex, nofollow` meta tags
- Prevent caching and snippet generation

## Build

To create a production build:

```bash
npm run build
npm start
```

