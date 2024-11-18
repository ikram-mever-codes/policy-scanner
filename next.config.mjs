/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true, // optional, enables SVGR to treat the SVG as an icon (adds width/height)
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
