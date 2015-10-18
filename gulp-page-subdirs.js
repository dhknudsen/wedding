/*jslint node:true, multistr: true */
'use strict';

var gutil      = require('gulp-util');
var through    = require('through2');
var cheerio    = require('cheerio');
var _          = require('underscore');
var path       = require('path');

module.exports = function() {
  return through.obj(function(file, enc, callback) {
    if (file.isStream()) {
      this.emit('error', new gutil.PluginError('gulp-resources', 'Streams are not supported'));
      return callback();
    }

    if (file.isBuffer()) {
      var contents = file.contents.toString('utf8');
      try {
        var $ = cheerio.load(contents, {
          decodeEntities: false
        });
        var changed = false;
        var elements = $('a[href]');
        
        if (elements.length > 0) {
          _(elements).each(function(element) {
            if (element.attribs && element.attribs.href) {
              var match = element.attribs.href.match(/\/([\w-]+)\.html/);
              if (match) {
                changed = true;
                var subdirName = match[1];
                element.attribs.href = '/' + subdirName + '/';
              }
            }
          });
        }

        if (changed) {
          file.contents = new Buffer($.html());
        }
      } catch (err) {
        this.emit('error', err);
        return callback();
      }
    }

    this.push(file);
    callback();
  });
};