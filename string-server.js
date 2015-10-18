/*jslint node:true, multistr: true */
'use strict';

var fs = require('fs');
var http = require('http');
var url = require('url');

var port = 8080;

var stringsFile = './src/strings_da-dk.json';
var fileOpts = { encoding: 'utf8' };

var server = http.createServer(function(req, res) {
  var parsedUrl = url.parse(req.url, true);
  var stringKey = parsedUrl.query && parsedUrl.query.key;
  var stringValue = parsedUrl.query && parsedUrl.query.value;

  res.setHeader('Access-Control-Allow-Origin', '*');
  
  if(!stringKey) {
    console.log('No key');
    return res.end('No key');
  }

  if(!stringValue) {
    console.log('No value');
    return res.end('No value');
  }

  fs.readFile(stringsFile, fileOpts, function(err, contents) {
    if(err) {
      console.log('Error reading strings file %s, stringsFile')
      return res.end('Error');
    }

    if(!contents) {
      console.log('No contents for file %s, stringsFile')
      return res.end('Error');
    }
    
    try {
      var data = JSON.parse(contents);
      console.log('Updating %s: %s -> %s', stringKey, data[stringKey], stringValue);
      data[stringKey] = stringValue;
      fs.writeFile(stringsFile, JSON.stringify(data, null, '  '), { encoding: 'utf8' }, function(err) {
        if(err) {
          return res.end('Error');
        }

        res.end('OK');
      });
    } catch(err) {
      console.log('Error updating strings file', err);
      res.end('Error');
    }
  });
}).listen(port, function() {
  var serverAddr = server.address();
  console.log('Server running at http://' + serverAddr.address + ':' + serverAddr.port + '/');
});