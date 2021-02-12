let mix = require('laravel-mix');

mix.js('src/app.js', 'public/js')
   .vue({ version: 2 })
   .sass('src/app.scss', 'public/css');