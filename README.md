# No For You for X/Twitter

A Firefox and Firefox Android WebExtension that removes the "For you" tab from X/Twitter and keeps the Home timeline focused on "Following" where possible.

---

## Features

- Removes the "For you" tab on X/Twitter.
- Keeps the Home timeline focused on "Following" where possible.
- Centers the remaining Following tab.
- Works on desktop and mobile web versions of X/Twitter.
- Runs locally in the browser.
- No analytics, no tracking, no external requests.

---

## Supported Browsers

- Firefox Desktop
- Firefox for Android

---

## Supported Websites

- x.com
- mobile.x.com
- twitter.com
- mobile.twitter.com

---

## Installation

Install from [Mozilla Add-ons](https://addons.mozilla.org/) once the extension is approved.

For development/testing, use [web-ext](https://github.com/mozilla/web-ext).

---

## Developer Testing

### Lint

```bash
web-ext lint
```

### Run (Firefox Desktop)

```bash
web-ext run
```

### Run on Firefox Android Nightly

```bash
web-ext run --target=firefox-android --android-device=YOUR_DEVICE_ID --adb-bin="C:\path\to\adb.exe" --firefox-apk=org.mozilla.fenix
```

### Run on Normal Firefox Android

```bash
web-ext run --target=firefox-android --android-device=YOUR_DEVICE_ID --adb-bin="C:\path\to\adb.exe" --firefox-apk=org.mozilla.firefox
```

---

## Privacy

The extension does not collect, transmit, or store user data. It only modifies the display of matching X/Twitter pages locally in the browser.

---

## Development Notes

- No external requests.
- No analytics.
- No third-party libraries.
- No minified code.
- No obfuscated code.
- No build step required.

---

## License

All rights reserved. See [LICENSE](LICENSE) for details.
