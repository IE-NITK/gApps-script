/**
 * Sends emails with data from the current spreadsheet with attachments
 */
function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = <mention the start row>; // First row of data to process
  var numRows = <mention the number of rows>; // Number of rows to process
  var dataRange = sheet.getRange(startRow, 1, numRows, 9);
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  for (var i in data) {
    var row = data[i];
    
    var emailAddress = row[4];
    var name = row[3];
    var post = row[8];
    var f_name = row[6];
    var type = row[5];
    var message = "<add your message here>";
    
    var subject = "<add the subject here>";
    // if(type=="c"){
    //   subject = 'IE NITK 2020-21: ' + name + ' - ' + post + ' Responsibilities';
    // }
    // else {
    //   subject = 'IE NITK 2020-21: ' + name + ' - ' + 'Responsibilities';
    // }
    var file = DriveApp.getFilesByName(f_name).next().getAs('application/pdf').getBytes();
    var attach = {fileName: name + " - Responsibilities" + ".pdf",content: file, mimeType:'application/pdf'};
    MailApp.sendEmail({
      to: emailAddress,
      subject: subject,
      htmlBody: message,
      attachments: [attach],
      name: "<name from which the email goes>"
    });
  }
}
