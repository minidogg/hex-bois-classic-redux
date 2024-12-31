import path, { dirname } from 'path'
const __dirname = import.meta.dirname;

export default {
  entry: './src/index.js',
  output: {
    filename: 'game_bundle.js',
    path: path.resolve(__dirname, 'web'),
  },
};