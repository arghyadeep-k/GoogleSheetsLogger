var googleSheets = require('google-spreadsheet');
var async = require('async');
// var Logger = function(){

//     function log(id, message, timestamp) {
//         console.log("Starting to log");
//     }
// }

// module.exports= Logger;

var doc = new googleSheets('1HSVNAMosxe2oE8avtNS1GtjusYySbEW-_ezrPYQMw-o');
var creds = require('./google-generated-creds.json');
doc.useServiceAccountAuth(creds,(err)=>{
    if(err) console.log(err);
    doc.getInfo((err,info)=>{
        if(err) console.log(err);

        console.log('Loaded doc: '+info.title+' by '+info.author.email);
        sheet = info.worksheets[0];
        console.log('sheet 1: '+sheet.title+' '+sheet.rowCount+'x'+sheet.colCount);
    });
    doc.addRow(1,{'Abc':'102','dEF':'123','a125':'546'},(err,row)=>{
        //console.log(row);
        if(err) console.log(err);
    });
});

// async.series([
//     function setAuth(step) {
//       // see notes below for authentication instructions!
//       var creds = require('./google-generated-creds.json');
//     //   // OR, if you cannot save the file locally (like on heroku)
//     //   var creds_json = {
//     //     client_email: 'yourserviceaccountemailhere@google.com',
//     //     private_key: 'your long private key stuff here'
//     //   }
   
//       doc.useServiceAccountAuth(creds, step);
//     },
//     function getInfoAndWorksheets(step) {
//       doc.getInfo(function(err, info) {
//         console.log('Loaded doc: '+info.title+' by '+info.author.email);
//         sheet = info.worksheets[0];
//         console.log('sheet 1: '+sheet.title+' '+sheet.rowCount+'x'+sheet.colCount);
//         step();
//       });
//     },
//     function addRow(step) {
//         //doc.addRow(1,)
//         sheet.addRow(1,{1:"a",2:"c",3:"d"},(err)=>{
//             console.log(err);
//         });
//         step();
//     }
//   ], function(err){
//       if( err ) {
//         console.log('Error: '+err);
//       }
//   });