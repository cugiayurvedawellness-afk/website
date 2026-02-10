# Google Sheets Integration Setup Guide

This guide will help you connect the contact form to a Google Sheet to automatically store all submissions.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "Ayurvedic Retreat Inquiries"
3. Create column headers in the first row:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Phone`
   - E1: `Duration`
   - F1: `Message`

## Step 2: Create a Google Apps Script

1. In your Google Sheet, go to **Tools > Script editor**
2. Delete any existing code and paste the following:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Append the data as a new row
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.phone,
      data.duration,
      data.message
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Save the script with a name like "Contact Form Handler"

## Step 3: Deploy the Script

1. Click **Deploy > New deployment**
2. Select type: **Web app**
3. Execute as: Select your Google account
4. Who has access: **Anyone** (this allows the form to submit data)
5. Click **Deploy**
6. Copy the deployment URL (it will look like `https://script.google.com/macros/d/SCRIPT_ID/usercontent/exec`)

## Step 4: Update the Contact Component

1. Open [src/components/Contact.jsx](src/components/Contact.jsx)
2. Find this line:
   ```javascript
   const googleSheetURL = 'https://script.google.com/macros/d/YOUR_SCRIPT_ID/usercontent/exec';
   ```
3. Replace `YOUR_SCRIPT_ID` with the actual Script ID from your deployment URL

## Step 5: Test the Integration

1. Run your website: `npm run dev`
2. Navigate to the Contact section
3. Fill out the form and submit
4. Check your Google Sheet - the data should appear automatically!

## Troubleshooting

- **CORS errors**: Make sure the script is deployed as "Web app" and "Anyone" has access
- **Data not appearing**: Verify the deployment URL is correct in Contact.jsx
- **Script errors**: Check the Apps Script execution logs for error details

## Security Note

For production use, consider:
- Using a backend service instead of direct Google Apps Script deployment
- Adding rate limiting to prevent spam submissions
- Validating input data on the server side
