# Updated Google Apps Script Code

If the form submissions are still not working, update your Google Apps Script with this code:

## Replace the Script Code

Go to your Google Sheet > Tools > Script editor and replace all code with:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Get data from form submission
    const params = e.parameter;
    
    Logger.log("Received data: " + JSON.stringify(params));
    
    // Append the data as a new row
    sheet.appendRow([
      params.timestamp || new Date().toLocaleString(),
      params.name || '',
      params.email || '',
      params.phone || '',
      params.duration || '',
      params.message || ''
    ]);
    
    return ContentService.createTextOutput("Success")
      .setMimeType(ContentService.MimeType.TEXT);
  } catch(error) {
    Logger.log("Error: " + error.toString());
    return ContentService.createTextOutput("Error: " + error.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  }
}

// Test function to verify the script works
function test() {
  const testEvent = {
    parameter: {
      timestamp: new Date().toLocaleString(),
      name: "Test User",
      email: "test@example.com",
      phone: "+91 9876543210",
      duration: "7 days",
      message: "This is a test message"
    }
  };
  
  const result = doPost(testEvent);
  Logger.log("Test result: " + result.getContent());
}
```

## Important Steps

1. **Save the script** - Click Save (Ctrl+S)
2. **Run the test function** - Select "test" from the function dropdown and click Run
3. **Check logs** - View > Logs to see if data was added
4. **Re-deploy** - Click Deploy > Manage deployments
5. Choose your existing deployment and click "Update"
6. Make sure deployment type is **Web app**
7. Execute as: Your Google account
8. Who has access: **Anyone**

## Verify the URL Format

Your URL should look like:
```
https://script.google.com/macros/d/AKfycbwsnCZXZVAW_Y0VA6ty3VVXf3ZBqW3RMeuO0uirSBnp/usercontent/exec
```

**NOT** like: `/dev` or `/usercontent` - it should be `/usercontent/exec`

## Check Google Sheet

After deploying:
1. Go to your Google Sheet
2. Verify column headers are in row 1: Timestamp, Name, Email, Phone, Duration, Message
3. Test the form again
4. Data should now appear in row 2, 3, 4, etc.

## Troubleshooting Checklist

- [ ] Script deployed as "Web app"
- [ ] Access set to "Anyone"
- [ ] URL ends with `/usercontent/exec`
- [ ] Google Sheet has proper column headers
- [ ] Script was updated and re-deployed
- [ ] Check browser console for errors (F12 > Console)
- [ ] Check Apps Script logs (View > Logs)
