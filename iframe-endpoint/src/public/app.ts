// Check if the current window is within an iframe (has a parent)
if (window.parent !== window) {
  // Send an initial message to the parent window
  window.parent.postMessage('Hello from the iframe!', '*');

  // Listen for messages from the parent window
  window.addEventListener('message', (event) => {
    // Log the message received from the parent window
    console.log('Message received from parent:', event.data);

    // Send a reply back to the parent window
    window.parent.postMessage(`Reply: Received your message - ${event.data}`, '*');
  });
} else {
  console.log('No parent window found. Open this page in an iframe to test postMessage.');
}
