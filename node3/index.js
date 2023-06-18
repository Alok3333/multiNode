const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // if(req.url === '/'){
  //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
  //         if(err){
  //             throw err
  //         }

  //         res.end(content)
  //     })
  // }
  // else if(req.url === '/about'){
  //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
  //         if(err){
  //             throw err
  //         }

  //         res.end(content)
  //     })
  // }

  // create a filePath module
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );

  // create contentType & check content which content do you have
  let contentType = 'text/html';

  // check extention of the files
  let ext = path.extname(filePath);
  if (!ext) {
    filePath += '.html';
  }

  // change a contentType in the help of Switch case
  switch (ext) {
    case '.css':
        contentType = 'text/css';
      break;

    case '.js':
        contentType = 'text/javascript';
      break;

    default:
        contentType = 'text/html';
  }

  // read a files which file do you move
  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(path.join(__dirname, 'public', '404.html'), (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end('Error!');
        } else {
          res.writeHead(404, {
            'Content-Type': contentType,
          });
          res.end(data);
        }
      });
    } else {
      res.writeHead(200, {
        'Content-Type': contentType,
      });
      res.end(content);
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
