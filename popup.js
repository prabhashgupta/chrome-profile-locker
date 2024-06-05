document.getElementById('unlockButton').addEventListener('click', () => {
    const password = document.getElementById('password').value;
    chrome.storage.local.get('password', (data) => {
        if (data.password === password) {
            chrome.storage.local.set({ locked: false });
            alert('Profile Unlocked!');
            window.close();
        } else {
            alert('Incorrect Password');
        }
    });
});

// Initially set a password for simplicity, ideally this should be set by the user
chrome.storage.local.get('password', (data) => {
    if (!data.password) {
        chrome.storage.local.set({ password: 'defaultpassword' });
    }
});
