// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // その他の設定がある場合はここに記述

  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000, // 1秒ごとにファイル変更を確認
      aggregateTimeout: 300, // 変更後の待機時間
    };
    return config;
  },
};

module.exports = nextConfig;
