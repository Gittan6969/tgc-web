const focusableSelectors = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

document.addEventListener('DOMContentLoaded', () => {
  initModal();
  initSnapshotUpgrade();
});

function initModal() {
  const modalBackdrop = document.getElementById('gdpr-modal');
  if (!modalBackdrop) {
    return;
  }

  const openButtons = document.querySelectorAll('[data-open-modal="gdpr-modal"]');
  const closeButtons = modalBackdrop.querySelectorAll('[data-close-modal]');
  let previouslyFocusedElement = null;

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeModal();
    }
    if (event.key === 'Tab') {
      trapFocus(event);
    }
  };

  const trapFocus = (event) => {
    const focusable = Array.from(modalBackdrop.querySelectorAll(focusableSelectors));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (focusable.length === 0) {
      event.preventDefault();
      return;
    }

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const openModal = () => {
    previouslyFocusedElement = document.activeElement;
    modalBackdrop.hidden = false;
    document.body.style.overflow = 'hidden';
    const focusable = modalBackdrop.querySelectorAll(focusableSelectors);
    if (focusable.length > 0) {
      focusable[0].focus();
    }
    document.addEventListener('keydown', handleKeyDown);
  };

  const closeModal = () => {
    modalBackdrop.hidden = true;
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleKeyDown);
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  };

  openButtons.forEach((button) => {
    button.addEventListener('click', openModal);
  });

  closeButtons.forEach((button) => {
    button.addEventListener('click', closeModal);
  });

  modalBackdrop.addEventListener('click', (event) => {
    if (event.target === modalBackdrop) {
      closeModal();
    }
  });
}

function initSnapshotUpgrade() {
  const upgradeButton = document.querySelector('[data-upgrade-button]');
  if (!upgradeButton) {
    return;
  }

  upgradeButton.addEventListener('click', () => {
    // TODO: Ersätt med logik för att initiera checkout-flöde via API.
    window.location.href = 'checkout.html';
  });
}

// TODO: Ersätt mockade värden med riktiga API-svar från Digitala Historian backend.
