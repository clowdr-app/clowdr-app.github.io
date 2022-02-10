---
updatedDate: 2021-04-27T11:24:37+00:00
title: Troubleshooting microphone and camera permissions
index: 1
description:
  Use this information to get your camera and microphone working on supported
  platforms.
author: Ed Nutting
isFeatured: true
---

Please use the information linked to from this page to diagnose and fix your camera and microphone permissions on supported platforms.

If you are unable to get your device to work and require urgent support for a live conference, please send a message in the Technical Support chat. Otherwise, please submit the form linked below for a response within a few hours.

## Supported Platforms

### Operating systems

Recent versions of:

- Windows
- MacOS
- Linux
- Android
- Recent iOS devices (with Safari v14)

### Browsers

Latest versions of:

- Google Chrome
- Mozilla FireFox
- Microsoft Edge
- Safari v14 (inc. on iOS devices)

**_Please do not use:_**

- Safari v13 or lower

  - Including on iOS devices
  - **Please note: on iOS devices, all browsers are just Safari with a different UI.**

    Due to Apple's app store restrictions, Chrome, FireFox and other browsers are not permitted to use their own rendering engines. As a result, they are just a wrapper around the underlying Safari browser.

- iOS devices (iPad / iPhone) during a live-stream
  - This generally results in a poor connection and low quality sound/video
- Android devices during a live-stream
  - This generally results in a poor connection and low quality sound/video
  - Even the latest devices tend to under-perform on WebRTC connections

## Overview of steps

1. Close other applications that might be using your camera or microphone
2. Check in-browser permissions (lock or settings icon in the left end of the address/url/search bar)
   - [Instructions for Chrome](https://support.google.com/chrome/answer/2693767)
   - [Instructions for FireFox](https://support.mozilla.org/en-US/kb/how-manage-your-camera-and-microphone-permissions)
3. Mac OS / iOS: Check operating system permissions
4. Try using Settings to (temporarily) select a different device
5. [Try a test call](https://tokbox.com/developer/tools/precall/)
6. Clear browser permissions, restart your browser, refresh the page twice, then try again

## 1. Try the troubleshooting form

[This step-by-step form](https://form.asana.com?k=2O5KSgfyRmNoddFkKdJh5Q&d=1198973227684402 "Mic/Cam Troubleshooting form") provides links to support information for specific browsers and operating systems. Hopefully it will help you diagnose and fix the problem you are having.

[https://form.asana.com?k=2O5KSgfyRmNoddFkKdJh5Q&d=1198973227684402](https://form.asana.com?k=2O5KSgfyRmNoddFkKdJh5Q&d=1198973227684402 "Mic/Cam Troubleshooting form")

If the form doesn't help you solve the issue, you can submit the form to the Midspace team as a record of what system/browser you are using and what you have tried. This will enable us to help you most effectively.

## 2. Examples

1. **Apple devices: Enable camera/microphone/screen-sharing ("screen recording") via the _System Preferences_**

   If the operating system is denying permissions, you may experience "permission denied" errors in the browser, even if you allow the browser's permissions (as shown below).

   ![Permissions denied in Chrome on MacOS](/images/chrome-os-permissions-1.gif "Permissions denied in Chrome on MacOS")

   Apple Mac and iOS devices pose particular challenges, as Apple have added an additional layer of security to the operating systems. By default this prevents browsers from accessing the microphone and camera.

   ![Use System Prefences to enable microphone/camera](/images/chrome-os-permissions-2.gif "Use System Prefences to enable microphone/camera")

2. **Example: Reset permissions in Safari, then try enabling your microphone**

   ![Enable mic in Safari](/images/safari-allow-microphone.gif "Enable mic in Safari")

3. **Example: Reset permissions in Safari, then try enabling your camera**

   ![Enable camera in Safari](/images/safari-allow-camera.gif "Enable camera in Safari")

4. **Example: Try changing device in Settings then (secondly) enable mic/camera**
   ![Change settings then enable mic/cam](/images/fix-device-selection.gif "Change settings then enable mic/cam")
