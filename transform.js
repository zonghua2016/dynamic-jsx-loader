const babel = require('@babel/core');
const fs = require('fs');

// 读取本地 JSX 文件
const inputCode = fs.readFileSync('./src/pages/x2h1.jsx', 'utf8');

// 转译代码
const output = babel.transformSync(inputCode, {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  filename: 'HangzhouTripPlanner.jsx',
});

console.log(output.code);
