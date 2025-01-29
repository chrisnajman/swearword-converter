# Swearword Converter

## Introduction

The **Swearword Converter** replaces offensive words with euphemisms.

### Features

- **Swearword Replacement** – Converts a predefined list of swearwords into humorous or milder alternatives.
- **Real-Time Input Handling** – Enables the conversion button only when text is entered.
- **Copy to Clipboard** – Easily copy the converted text for use elsewhere.
- **Auto-Resizing Textarea** – Dynamically adjusts the input field height for better readability.
- **Light & Dark Mode** – Supports theme toggling.

### How It Works

1. Enter or paste text containing any of the listed swearwords.
2. Click the **Convert text** button to replace them with euphemisms.
3. Copy the output using the **Copy to clipboard** button, if needed.

---

## JavaScript

- Built with **vanilla ES6 JavaScript**, focusing on modern syntax and browser APIs.
- The JavaScript has been split into separate modules, improving code modularity:

  - `replace-swearwords.js`: Handles the main logic for converting swearwords to euphemisms. It listens for form submissions, applies the conversion function, enables the copy button when text is converted, and initializes other helper functions.
    - `convert-swearwords.js`: Replaces recognized swearwords in the input text with predefined euphemisms using a regular expression and updates the output area.
    - `convert-btn-enable.js`: Enables the "Convert text" button when the user types in the textarea.
    - `copy-to-clipboard-btn-enable.js`: Enables the "Copy to clipboard" button when there is converted text available in the output section.
    - `auto-resize-textarea.js`: Dynamically adjusts the height of the textarea based on its content to improve the user experience.
  - `copy-to-clipboard.js`: Copies the converted euphemisms text to the clipboard when the user clicks the "Copy to clipboard" button, providing feedback on success or failure.

  - `theme.js`: Handles theme toggling (light/dark mode) and local storage management.

  ### Inline JSON-LD metadata block

  This is contained in the `head` of `index.html` and `about.html`.

  ```HTML
      <script type="application/ld+json">
        {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Swearword Converter",
        "description": "This page replaces swearwords with euphemisms.",
        "contentRating": "Mature"
        }
    </script>
  ```

  The "Mature" rating can be used by filtering mechanisms to control access based on audience suitability.

---

## Theme Toggling

The application includes a dark mode and light mode toggle:

- The current theme state is stored in **local storage** and applied automatically on page reload.
- Accessible buttons with appropriate ARIA attributes are used to improve usability.

---

## Accessibility

The site is fully navigable using tab keys and up/down arrows.

---

## Testing and Compatibility

The application has been tested on the following platforms and browsers:

- **Operating System**: Windows 10
- **Browsers**:
  - Google Chrome
  - Mozilla Firefox
  - Microsoft Edge

### Device View Testing

The layout and functionality have been verified in both browser and device simulation views to ensure responsiveness and usability.

---

## How to Run

1. Clone or download the repository to your local machine.
2. Open the project folder and start a simple HTTP server (e.g., using `Live Server` in VS Code or Python's `http.server` module).
3. Open the project in a modern browser (e.g., Chrome, Firefox, or Edge).
