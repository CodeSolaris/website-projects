import path from 'node:path';

import _config from './_config.js';

const HOST = _config.server.host;
const PORT = _config.server.port;

export default {
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,    // удаляет console.log
        drop_debugger: true,    // удаляет debugger
        arrows: true,              // оптимизация стрелочных функций
        arguments: true,           // оптимизация arguments
        booleans: true,           // оптимизация булевых выражений
        dead_code: true,          // удаление мертвого кода
        conditionals: true,       // оптимизация условий
        loops: true,              // оптимизация циклов
        unused: true,             // удаление неиспользуемого кода
        reduce_vars: true,        // оптимизация переменных
        sequences: true
      },
      mangle: {
        toplevel: true         // переименовывает переменные в глобальной области
      },
      format: {
        ascii_only: true,        // использовать только ASCII символы
        beautify: false,         // не форматировать код
        comments: false          // удалять комментарии
      }
    }
  },
  server: {
    host: HOST,
    port: PORT
  },
  plugins: [

  ]
};
