(function () {
  'use strict';

  // Selectors for the "For you" tab on X/Twitter
  // The tab appears as a nav link whose text is "For you"
  const FOR_YOU_TEXTS = ['For you', 'For You'];

  function removeForYouTab() {
    // Desktop: nav links inside primary column
    const navLinks = document.querySelectorAll(
      'nav[aria-label="Primary"] a[role="tab"], ' +
      'nav[aria-label="Home timeline"] a[role="tab"], ' +
      'div[data-testid="ScrollSnap-List"] a'
    );

    navLinks.forEach(function (link) {
      const text = link.textContent.trim();
      if (FOR_YOU_TEXTS.includes(text)) {
        const parent = link.closest('li') || link.parentElement;
        if (parent) {
          parent.style.display = 'none';
        } else {
          link.style.display = 'none';
        }
      }
    });

    // Also handle span-based tab buttons used in some layouts
    const tabSpans = document.querySelectorAll(
      '[role="tab"] span, [data-testid="ScrollSnap-SwipeableList"] span'
    );
    tabSpans.forEach(function (span) {
      if (FOR_YOU_TEXTS.includes(span.textContent.trim())) {
        const tab = span.closest('[role="tab"]') || span.closest('a') || span.parentElement;
        if (tab) {
          const li = tab.closest('li') || tab.parentElement;
          if (li) li.style.display = 'none';
          else tab.style.display = 'none';
        }
      }
    });
  }

  function clickFollowingTab() {
    // Try to click the "Following" tab so it becomes the active view
    const tabs = document.querySelectorAll(
      '[role="tab"], div[data-testid="ScrollSnap-List"] a'
    );
    for (const tab of tabs) {
      const text = tab.textContent.trim();
      if (text === 'Following') {
        // Only click if not already selected
        if (tab.getAttribute('aria-selected') !== 'true') {
          tab.click();
        }
        // Center the tab
        tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        break;
      }
    }
  }

  function run() {
    removeForYouTab();
    clickFollowingTab();
  }

  // Run on initial load
  run();

  // Observe DOM mutations for SPA navigation
  const observer = new MutationObserver(function (mutations) {
    for (const mutation of mutations) {
      if (mutation.addedNodes.length > 0) {
        run();
        break;
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
