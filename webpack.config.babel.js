import path from 'path';
import { IgnorePlugin } from 'webpack'; // 追記する

export default (env, args) => {
  const isProduction = args.mode === 'production';
  const devtool = !isProduction && 'inline-source-map';
  const rules = [
    {
      test: /\.jsx?$/,
      use: ['babel-loader'],
    },
  ];

  return {
    devtool,
    entry: './src/entries/app.jsx',
    output: {
      path: path.join(__dirname, './public/js/'),
      filename: 'app.js',
    },
    module: { rules },
    resolve: {
      modules: ['node_modules'],
      alias: {
        '~': path.join(__dirname, './src/'),
      },
      extensions: ['.js', '.jsx'],
    },
    // 以下追記する
    plugins: [
      // Ignore all locale files of moment.js
      new IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
  };
};
