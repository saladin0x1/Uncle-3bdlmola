console.log("i stole this from a guy on github and here am i tweaking it for further ai's");

// Styles object for better organization and reuse
const styles = {
  popup: {
    position: 'fixed',
    backgroundColor: '#ffffff',
    border: '2px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    zIndex: '9999',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '320px'
  },
  question: {
    fontSize: '18px',
    marginBottom: '20px',
    fontWeight: 'bold'
  },
  button: {
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
    margin: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    color: '#ffffff',
    transition: 'background-color 0.2s ease'
  },
  continueButton: {
    backgroundColor: '#e63946',
    hoverColor: '#d62839'
  },
  breakButton: {
    backgroundColor: '#457b9d',
    hoverColor: '#1d3557'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    overflow: 'hidden'
  }
};

// Function to apply styles to an element
function applyStyles(element, styleObj) {
  Object.keys(styleObj).forEach(key => {
    element.style[key] = styleObj[key];
  });
}

// Create the popup UI
function createPopup() {
  // Create popup container
  const popup = document.createElement('div');
  applyStyles(popup, styles.popup);
  
  // Create question text
  const question = document.createElement('p');
  question.textContent = "Are you sure this is for the right reasons?";
  applyStyles(question, styles.question);
  
  // Create "Continue" button
  const continueButton = createButton(
    "YEAH I NEEEEED THIS", 
    styles.continueButton.backgroundColor,
    styles.continueButton.hoverColor,
    closePopup
  );
  
  // Create "Break" button
  const breakButton = createButton(
    "TAKE A BREAK ?", 
    styles.breakButton.backgroundColor,
    styles.breakButton.hoverColor,
    () => {
      window.location.href = 'https://www.youtube.com/watch?v=bMRosz1JZOA';
      closePopup();
    }
  );
  
  // Assemble popup
  popup.appendChild(question);
  popup.appendChild(continueButton);
  popup.appendChild(breakButton);
  
  // Add to document and dim background
  document.body.appendChild(popup);
  applyOverlay(true);
  
  // Return the popup element (useful for later reference)
  return popup;
}

// Helper function to create styled buttons
function createButton(text, bgColor, hoverColor, clickHandler) {
  const button = document.createElement('button');
  button.textContent = text;
  
  // Apply base button styles
  applyStyles(button, styles.button);
  button.style.backgroundColor = bgColor;
  
  // Add event listeners
  button.addEventListener('mouseover', () => button.style.backgroundColor = hoverColor);
  button.addEventListener('mouseout', () => button.style.backgroundColor = bgColor);
  button.addEventListener('click', clickHandler);
  
  return button;
}

// Function to toggle the background overlay
function applyOverlay(show) {
  if (show) {
    document.body.style.backgroundColor = styles.overlay.backgroundColor;
    document.body.style.overflow = styles.overlay.overflow;
  } else {
    document.body.style.backgroundColor = '';
    document.body.style.overflow = '';
  }
}

// Function to close the popup
function closePopup() {
  const popup = document.querySelector('div[style*="z-index: 9999"]');
  if (popup) {
    popup.remove();
    applyOverlay(false);
  }
}

// Initialize the popup when the script loads
createPopup();