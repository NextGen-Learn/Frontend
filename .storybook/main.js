module.exports = {

  stories: [

    '../src/**/*.stories.(js|jsx|ts|tsx)',

  ],

  addons: [

    '@storybook/addon-links',

    '@storybook/addon-essentials'

  ],

  framework: '@storybook/react-webpack5',

  webpackFinal: async (config) => {

    config.module.rules.push({

      test: /\.(js|jsx)$/,       // Add rule for JS and JSX files

      exclude: /node_modules/,

      use: {

        loader: 'babel-loader',

      },

    });

    config.module.rules.push({

      test: /\.module\.scss$/,

      use: [

        'style-loader',

        'css-loader',

        {

          loader: 'sass-loader',

          options: {

            // Опции sass-loader

          },

        },

      ],

    });

    return config;

  },

};