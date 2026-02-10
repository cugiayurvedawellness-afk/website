# Update Your Google Apps Script for Both Forms

Your website now has TWO separate forms that both save to the same "Inquiries" sheet:
1. **Booking Form** - "Book Your Retreat" button
2. **Contact Form** - Regular contact section

The Booking Form includes the selected Service, so all data is stored together in one sheet.

## Step 1: Update Your Google Sheet

Create ONE sheet named "Inquiries" with these columns:

**Sheet: "Inquiries"**
- Column A: Timestamp
- Column B: Name
- Column C: Email
- Column D: Phone
- Column E: Service (from booking form) or Duration (from contact form)
- Column F: Message (from contact) or Days (from booking)

## Step 2: Update the Google Apps Script

Go to **Tools > Script editor** and replace ALL code with:

```javascript
function doPost(e) {
  try {
    const params = e.parameter;
    const formType = params.formType || 'inquiry';
    
    // Both forms save to the Inquiries sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Inquiries');
    
    if (formType === 'inquiry') {
      // Booking form data (from "Book Your Retreat" button)
      if (params.bookingService) {
        sheet.appendRow([
          params.timestamp || new Date().toLocaleString(),
          params.name || '',
          params.email || '',
          params.phone || '',
          params.service || '', // Selected Service (Yoga, Panchakarma, etc.)
          params.days || '' // Duration (7 Days, 14 Days, etc.)
        ]);
        Logger.log("Booking data saved to Inquiries sheet");
      } 
      // Regular contact form data
      else {
        sheet.appendRow([
          params.timestamp || new Date().toLocaleString(),
          params.name || '',
          params.email || '',
          params.phone || '',
          params.duration || '', // Duration (7 days, 14 days, etc.)
          params.message || '' // Message
        ]);
        Logger.log("Contact inquiry saved to Inquiries sheet");
      }
    }
    
    return ContentService.createTextOutput("Success")
      .setMimeType(ContentService.MimeType.TEXT);
      
  } catch(error) {
    Logger.log("Error: " + error.toString());
    return ContentService.createTextOutput("Error: " + error.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  }
}

// Test function for booking form
function testBooking() {
  const testEvent = {
    parameter: {
      formType: 'inquiry',
      bookingService: true,
      timestamp: new Date().toLocaleString(),
      name: "John Doe",
      email: "john@example.com",
      phone: "+91 9876543210",
      service: "Yoga & Meditation",
      days: "7 Days"
    }
  };
  
  const result = doPost(testEvent);
  Logger.log("Booking test result: " + result.getContent());
}

// Test function for contact form
function testContact() {
  const testEvent = {
    parameter: {
      formType: 'inquiry',
      timestamp: new Date().toLocaleString(),
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+91 8765432109",
      duration: "14 days",
      message: "Interested in the full program"
    }
  };
  
  const result = doPost(testEvent);
  Logger.log("Contact test result: " + result.getContent());
}
```

## Step 3: Deploy/Update the Script

1. Save the script (Ctrl+S)
2. Click **Deploy > Manage deployments**
3. Select your existing deployment and click the edit icon (pencil)
4. Click **Update**
5. Make sure settings are:
   - Execute as: Your Google Account
   - Who has access: **Anyone**
6. Click **Deploy**

## Step 4: Test Both Forms

Run the test functions:
1. Select "testBooking" from the dropdown and click Run
2. Select "testContact" from the dropdown and click Run
3. Check "Inquiries" sheet - both test entries should appear

## Step 5: Verify Everything Works

1. Go to your website
2. Click "Book Your Retreat" - fill out the booking form and submit
3. Go to Contact section - fill out and submit the contact form
4. Check the "Inquiries" sheet in your Google Sheet - both forms should save data

## Data Structure in Inquiries Sheet

**From Booking Form:**
- Row: [Timestamp] [Name] [Email] [Phone] [Service] [Days]
- Example: [2/10/2026 3:30 PM] [John] [john@email.com] [+91 98765] [Yoga & Meditation] [7 Days]

**From Contact Form:**
- Row: [Timestamp] [Name] [Email] [Phone] [Duration] [Message]
- Example: [2/10/2026 4:00 PM] [Jane] [jane@email.com] [+91 87654] [14 days] [Message text...]

## Important Notes

- Both forms now use the same Google Apps Script URL
- Both forms save to the same "Inquiries" sheet
- The script distinguishes them using the `bookingService` parameter
- Easy to manage all inquiries and bookings in one place
- You can easily filter by Service or Duration in Google Sheets
