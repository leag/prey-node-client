"use strict";

//////////////////////////////////////////
// Prey JS Webcam Module
// (c) 2011 - Fork Ltd.
// By Tomas Pollak - http://forkhq.com
// GPLv3 Licensed
//////////////////////////////////////////

var fs           = require('fs'),
    common       = require('./../../common'),
    os_functions = require('./' + common.os_name);

exports.get_picture = (callback) => {

  os_functions.get_picture((err, file_path, file_type) => {
    if (err) return callback(err);

    fs.exists(file_path, (exists) => {
      if (exists)
        callback(null, {file: file_path, content_type: file_type});
      else
        callback(err || new Error("Couldn't grab a picture using the webcam."));
    });
  });
};
