function sendError(text) {
    throw new Error(text);
}

function sendWarn(text) {
    console.warn(text);
}