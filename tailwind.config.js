/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--base-primary)',
        background: 'var(--base-background)',
        foreground: 'var(--base-foreground)',
      },
      borderRadius: {
        lg: 'var(--border-radius-lg)',
        md: 'var(--border-radius-md)',
        sm: 'var(--border-radius-sm)',
      },
    },
  },
  plugins: [],
}

