const purgecss = require('purgecss');
const fs = require('fs');

const content = fs.readFileSync('path/to/your/css/file.css', 'utf8');

const result = purgecss.purge({
  content: ['path/to/your/html/files/*.html'],
  css: ['path/to/your/css/file.css']
});

fs.writeFileSync('path/to/your/output/file.css', result[0].css);
