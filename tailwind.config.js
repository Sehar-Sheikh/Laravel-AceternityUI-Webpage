import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';


const {
    default: flattenColorPalette,
  } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            animation: {
                aurora: "aurora 60s linear infinite",
                move: "move 5s linear infinite",
              },
              keyframes: {
                move: {
                    "0%": { transform: "translateX(-200px)" },
                    "100%": { transform: "translateX(200px)" },
                  },
                aurora: {
                  from: {
                    backgroundPosition: "50% 50%, 50% 50%",
                  },
                  to: {
                    backgroundPosition: "350% 50%, 350% 50%",
                  },
                },
            },
        },
    },

    plugins: [forms,addVariablesForColors]
};


// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
      ":root": newVars,
    });
  }
