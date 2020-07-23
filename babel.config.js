const presets = [
  '@babel/preset-env',
  '@babel/preset-typescript',
  '@babel-preset-react',
];

const plugins = [
  '@babel/plugin-transform-runtime',
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-object-rest-spread',
];

module.exports = {
  presets,
  plugins,
};
