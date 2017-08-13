import gulp from 'gulp';
import less from 'gulp-less';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import gutil from 'gulp-util';
import webpack from 'webpack';
import path from 'path';
import WebpackNotifierPlugin from 'webpack-notifier';
import livereload from 'gulp-livereload';
import connect from 'gulp-connect';
import cleanCSS from 'gulp-clean-css';

gulp.task('connect', () => {
  connect.server({
    root: './assets/dist',
    port: 8000,
    livereload: true,
  });
});
// webpack normal mode config
const config = {
  color: true,
  progress: true,
  watch: true,
  devtool: 'source-map',
  debug: true,
  entry: {
    'scripts.js': './assets/src/js/scripts.js',
  },
  output: {
    path: './assets/dist/js/',
    filename: '[name]',
  },
  resolve: {
    extensions: ['', '.js', '.json'],
  },
  module: {
    loaders: [
      { test: /\.js$/,
       loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
        },
      },
      { test: /jquery\.js$/,
        loader: 'expose?jQuery',
      },
      { test: /jquery\.js$/,
        loader: 'expose?$',
      },
      { test: /jquery\..*\.js/,
        loader: 'imports?$=jquery,jQuery=jquery,this=>window',
      },
    ],
  },
  plugins: [
    new WebpackNotifierPlugin({ title: 'Webpack', sound: 'Glass' }),
  ],
  exclude: [
    path.resolve(__dirname, 'node_modules'),
  ],
};
// gulp webpack task
gulp.task('webpack', () => {
  webpack(config, (err, stats) => {
    if (err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString({
    }));
  });
});
// webpack production task
gulp.task('js-minify', () => {
  config.plugins = [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new WebpackNotifierPlugin({ title: 'Webpack' }),
  ];
  config.watch = false;
  webpack(config, (err, stats) => {
    if (err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString({
    }));
  });
});

gulp.task('html', () => {
  gulp.src('./job-board/*.html')
  .pipe(livereload());
});
// Error handler for less

const errorAlert = (error) => {
  notify.onError({ title: 'Gulp Compiled Error', message: 'Check your terminal', sound: 'Sosumi' })(error);
  this.emit('end');
};
// gulp less task
gulp.task('less-company', () => {
  return gulp.src('./assets/src/less/company/company.style.less')
  .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
  .pipe(less())
  .pipe(notify({
    title: 'Gulp',
    subtitle: 'success',
    message: 'less companies',
    sound: 'Pop',
  }))
  .pipe(gulp.dest('./assets/dist/css/'))
  .pipe(livereload());
});

gulp.task('less-doctor', () => {
  return gulp.src('./assets/src/less/doctor/doctor.style.less')
  .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
  .pipe(less())
  .pipe(notify({
    title: 'Gulp',
    subtitle: 'success',
    message: 'less doctor',
    sound: 'Pop',
  }))
  .pipe(gulp.dest('./assets/dist/css/'))
  .pipe(livereload());
});

gulp.task('less-hotel', () => {
  return gulp.src('./assets/src/less/hotel/hotel.style.less')
  .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
  .pipe(less())
  .pipe(notify({
    title: 'Gulp',
    subtitle: 'success',
    message: 'less hotel',
    sound: 'Pop',
  }))
  .pipe(gulp.dest('./assets/dist/css/'))
  .pipe(livereload());
});

gulp.task('less-job-board', () => {
  return gulp.src('./assets/src/less/job-board/job-board.style.less')
  .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
  .pipe(less())
  .pipe(notify({
    title: 'Gulp',
    subtitle: 'success',
    message: 'less jobs-board',
    sound: 'Pop',
  }))
  .pipe(gulp.dest('./assets/dist/css/'))
  .pipe(livereload());
});

gulp.task('less-lawyer', () => {
  return gulp.src('./assets/src/less/lawyer/lawyer.style.less')
  .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
  .pipe(less())
  .pipe(notify({
    title: 'Gulp',
    subtitle: 'success',
    message: 'less lawyer',
    sound: 'Pop',
  }))
  .pipe(gulp.dest('./assets/dist/css/'))
  .pipe(livereload());
});

gulp.task('less-marketplace', () => {
  return gulp.src('./assets/src/less/marketplace/marketplace.style.less')
  .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
  .pipe(less())
  .pipe(notify({
    title: 'Gulp',
    subtitle: 'success',
    message: 'less marketplace',
    sound: 'Pop',
  }))
  .pipe(gulp.dest('./assets/dist/css/'))
  .pipe(livereload());
});

gulp.task('less-online-courses', () => {
  return gulp.src('./assets/src/less/online-courses/online-course.style.less')
  .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
  .pipe(less())
  .pipe(notify({
    title: 'Gulp',
    subtitle: 'success',
    message: 'less online courses',
    sound: 'Pop',
  }))
  .pipe(gulp.dest('./assets/dist/css/'))
  .pipe(livereload());
});

gulp.task('less-real-estate', () => {
  return gulp.src('./assets/src/less/real-estate/real-estate.style.less')
  .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
  .pipe(less())
  .pipe(notify({
    title: 'Gulp',
    subtitle: 'success',
    message: 'less real estate',
    sound: 'Pop',
  }))
  .pipe(gulp.dest('./assets/dist/css/'))
  .pipe(livereload());
});

gulp.task('less-common-task', () => {
  return gulp.src('./assets/src/less/common.style.less')
  .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
  .pipe(less())
  .pipe(notify({
    title: 'Gulp',
    subtitle: 'success',
    message: 'less common task',
    sound: 'Pop',
  }))
  .pipe(livereload());
});


// js task
gulp.task('js', () => {
  gulp.src('./assets/src/js/scripts.js')
  .pipe(livereload())
  .pipe(gulp.dest('./assets/dist/js/'));
});


// watch task
gulp.task('watch', () => {
  livereload.listen();

  gulp.watch('./assets/src/less/**/*.less', [ 'less-marketplace','less-job-board', 'less-company', 'less-job-board', 'less-online-courses','less-doctor', 'less-lawyer', 'less-real-estate', 'less-hotel' ]);
  // gulp.watch('./assets/src/less/**/*.less', [ 'less-online-courses']);

  gulp.watch('./**/*.html', ['html']);
  gulp.watch('./assets/src/js/*.js', ['js']);
});

// minify css
gulp.task('css-minify', function() {
  return gulp.src(['./assets/dist/css/*.css'])
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./assets/dist/css/'));
});

// webpack production task
gulp.task('production', ['js-minify']);
// default task

gulp.task('default', ['watch', 'less-marketplace',  'less-job-board', 'less-company', 'less-job-board', 'less-doctor', 'less-lawyer','less-online-courses','less-hotel', 'less-real-estate', 'js', 'html']);
// gulp.task('default', ['watch', 'less-online-courses','js', 'html']);



// 'less-doctor', 'less-hotel', 'less-jobs-board',
// 'less-lawyer', 'less-marketplace', 'less-marketplace',
// 'less-online-courses', 'less-real-estate',
