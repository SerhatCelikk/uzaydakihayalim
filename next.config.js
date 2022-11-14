// const withPlugins = require("next-compose-plugins");
// const nextTranslate = require("next-translate");
const withImages = require("next-images");
const nextTranslate = require("next-translate");

const nextConfig = nextTranslate(withImages(
  {
    reactStrictMode: true,
    productionBrowserSourceMaps: true,
    images: {
      disableStaticImages: true,
    },
    trailingSlash: false,
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: "empty",
        };
      }

      return config;
    },
  },
  { trailingSlash: false }
));

module.exports = nextConfig;

// const nextConfig = nextTranslate({
//   reactStrictMode: true,
//   productionBrowserSourceMaps: true,
//   images: {
//     disableStaticImages: true,
//   },
// });

// module.exports = withPlugins([[withImages]], nextConfig, [nextTranslate]);
