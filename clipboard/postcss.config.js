import postcssImport from 'postcss-import';
import tailwindNesting from 'tailwindcss/nesting/index.js';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default {
  plugins: [
    postcssImport,
    tailwindNesting,
    tailwindcss,
    autoprefixer,
    cssnano
  ]
};
