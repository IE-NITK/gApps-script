/**
 * Sends emails with data from the current spreadsheet with inline images
 */
function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = <start row number>; // First row of data to process
  var numRows = <number of rows to process>; // Number of rows to process
  // Fetch the range of cells A2:B3
  var dataRange = sheet.getRange(startRow, 1, numRows, 6);
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  var posterUrl = "<url for the inline image>";
  var posterName = UrlFetchApp
                         .fetch(posterUrl)
                         .getBlob()
                         .setName("posterName");
  for (var i in data) {
    var row = data[i];
    var emailAddress = row[1];
    var name = row[2]
    var message = "<email body>" 
    var subject = "<email subject> <img src='cid:posterName'>";

    MailApp.sendEmail({
      to: emailAddress, 
      subject: subject, 
      htmlBody: message,
      inlineImages:
      {
        posterName: posterName
      },
      cc: "<comma seperated emails to CC>"
    });
  }
}
