/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': 'var(--bg-color)',
        'main': 'var(--main-color)',
        'text': 'var(--text-color)',
        'text-secondary': 'var(--text-secondary)',
        'card': 'var(--card-bg)',
        'card-hover': 'var(--card-bg-hover)',
        'animated-bg-1': 'var(--animated-bg-color-1)',
        'animated-bg-2': 'var(--animated-bg-color-2)',
        'animated-bg-3': 'var(--animated-bg-color-3)',
      },
      maxWidth: {
        'custom': 'var(--max-width)',
      },
      padding: {
        'side': 'var(--side-padding)',
        'mobile': 'var(--mobile-padding)',
      },
      fontFamily: {
        'heading': 'var(--heading-font)',
        'body': 'var(--body-font)',
      },
      borderRadius: {
        'sm': 'var(--border-radius-sm)',
        'md': 'var(--border-radius-md)',
        'lg': 'var(--border-radius-lg)',
        'xl': 'var(--border-radius-xl)',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
      },
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
      },
      transitionProperty: {
        'custom': 'var(--transition)',
      },
    },
  },
  plugins: [],
} 