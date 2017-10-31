let mix = require('laravel-mix');

mix.options({ publicPath: 'public' });
mix.js('resources/js/app.js', 'js/app.js');

mix.combine([
    'resources/js/bootstrap.js',
    'resources/js/notify.js',
    'resources/js/jquery.mCustomScrollbar.min.js',
    // 'resources/js/jquery.mixitup.js',
    'resources/js/script.js',
],'public/js/tarekmonjur.js');

mix.styles([
    'resources/css/bootstrap.min.css',
    'resources/css/font-awesome.min.css',
    'resources/css/jquery.mCustomScrollbar.min.css',
    'resources/css/mCSB_buttons.css',
    'resources/css/style.css',
],'public/css/tarekmonjur.css');