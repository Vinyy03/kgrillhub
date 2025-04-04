module.exports = function (api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: [
        [
          'module:react-native-dotenv',
          {
            moduleName: '@env', // This is the alias you'll use to import environment variables
            path: '.env',       // Path to your .env file
            blacklist: null,
            whitelist: null,
            safe: false,
            allowUndefined: true,
          },
        ],
      ],
    };
  };