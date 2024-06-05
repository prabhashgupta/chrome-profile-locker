chrome.storage.local.get('locked', (data) => {
    if (data.locked) {
        document.body.innerHTML = '<h1>Your profile is locked. Please unlock it from the extension.</h1>';
    }
});
