function displayToast(text, event_type) {
    switch (event_type) {
        case 'success':
            new SnackBar({message: text, status: "success", timeout: 4000, position: 'tl'});
            break;
        case 'error':
            new SnackBar({message: text, status: "error", timeout: 4000, position: 'tl'});
            break;
        case 'info':
            new SnackBar({message: text, status: "info", timeout: 4000, position: 'tl'});
            break;
        default:
            new SnackBar({message: text, status: "error", timeout: 4000, position: 'tl'});
    }
}
