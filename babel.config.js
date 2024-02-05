module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@routes': './src/routes',
          '@assets': './src/assets',
          '@screens': './src/screens',
          '@brand': './src/brand',
          '@theme': './src/theme',
          '@domain': './src/domain',
          '@api': './src/api',
        },
      },
    ],
  ],
};
