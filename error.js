function errorMessage(message) {
    if (!message) {
        message = "Oops! An unknown error occurred..";
    }

    return `<div class="error">${message}</div>`;
}