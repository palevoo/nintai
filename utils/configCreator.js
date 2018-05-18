const fs = require('fs');

exports.writeFile = () => {
  fs.writeFileSync('./config.js', input, (err) => {
      if (err) throw err;
      console.log('Config file successfully created!');
  });
}
