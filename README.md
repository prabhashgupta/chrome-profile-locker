# chrome-profile-locker
Chome profile locker - chrome extension to open your profile after validating password / pin.

Creating a Chrome extension to lock a profile with a password involves several steps, including manifest file creation, background scripting, content scripting, and creating a user interface for password entry. Below is a step-by-step guide on how to create this extension.

**Step 1: Set up the basic structure**
Create a directory for your Chrome extension and inside this directory, create the following files:

 * manifest.json
 * background.js
 * popup.html
 * popup.js
 * content.js
 * styles.css

**Step 2: Define the manifest file**
The `manifest.json` file is essential for any Chrome extension as it provides metadata and declares permissions.

**Step 3: Create the background script**
The `background.js` script handles the logic for locking the profile.

**Step 4: Create the popup HTML and JavaScript**
The `popup.html` file provides the user interface for entering the password.
The `popup.js` file handles the user interaction for unlocking the profile.

**Step 5: Create the content script**
The content.js file ensures that the profile remains locked by preventing access to tabs.

**Step 6: Add some basic styling**
The styles.css file to style the popup.

**Step 7: Load the extension**
 1. Open Chrome and go to chrome://extensions/.
 2. Enable "Developer mode" by toggling the switch in the upper-right corner.
 3. Click on "Load unpacked" and select the directory where your extension files are located.

**Usage**
 1. Click on the extension icon to open the popup.
 2. Enter the password (default is "defaultpassword") to unlock the profile.
 3. To lock the profile again, you can add functionality to the background script or another part of the extension as needed.

This is a basic implementation. For production use, consider adding features like password management (setting/changing the password), encrypting the stored password, and improving the user interface.