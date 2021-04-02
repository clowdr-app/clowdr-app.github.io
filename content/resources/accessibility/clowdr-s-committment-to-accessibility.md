---
updatedDate: 2021-04-02T07:36:04.000+00:00
title: Clowdr's committment to accessibility
slug: accessibility
description: Clowdr is committed to accessibility as a core part of our platform.
  In this page we explain how we deliver on that commitment.
author: Ed Nutting
category: Accessibility

---
**Clowdr aims to provide a social platform. One key element of that is providing a platform that anyone can access. Another is making sure everyone feels welcome. That's why accessibility and inclusivity are woven into every part of our software.**

## **Accessibility**

Our app is fully keyboard navigable, screen reader accessible, colour-contrast compliant (and assists organisers and attendees with choosing contrasting colours when customising the design), does not rely on colour as the sole means of communicating purpose, and many other key elements that make our app accessible.

For example, our chat provides easy buttons for resizing the font independently of the rest of the app. Chat text can be made up to 250% larger than the browser's base font size. We also provide adjustable spacing (line height and margins around messages). Furthermore, the whole app builds off of the browser's base font size - unlike most apps, we don't override it. So users relying on their browser's built-in accessibility features will have no trouble reading content on Clowdr. (Our CEO, Ed Nutting, uses this too!)

We chose the [Chakra UI](https://chakra-ui.com/ "Chakra UI framework") framework because one of its design goals was providing an out-of-the-box accessible UI for React apps like ours. We cannot thank the Chakra UI team enough - their work has made a world of difference to our app! We really enjoy using the framework. We hope to contribute back to the project in due course.

We also support [curated video captioning](/resources/video-subtitles "Learn about Clowdr's video captioning features") - a mechanism we purpose built for large academic conferences and that is unrivaled by any other platform. When authors upload their videos, we auto-generate captions and, importantly, we give them the opportunity to edit those captions - without the need for any input from organisers. This enables the submission of hundreds of videos by several thousand authors, all with fully curated captions and without burdening organising committees. These captions are included when playing back videos on item pages, when playing them as part of a live stream and when exporting videos (to MP4s or to YouTube). We also generate captions for recordings of live streams before publishing the recordings (and, of course, editing is available).

Both automatic and manual live captioning of video chat rooms (social rooms) as well as of live presentations in streams (such as live presentations or Q&As) is top on our to-do list for summer 2021. It's a hard problem that we are determined to solve because it makes such a difference to attendees.

## **Inclusivity**

We recognise that many attendees will be using Clowdr for the first time at a conference, and may only be on the platform for a few days. As such, we cannot rely on the kind of time investment and user familiarity that users often acquire when they regularly use apps like Zoom or Teams. We work hard to make sure that when a user logs in for the first time, they can easily set up their profile and find the content, events and people they're looking for - or discover new connections - with minimal effort. We use icons that have universally understood meaning and neutral dark/light themes that make everyone feel welcome.

Clowdr serves many different communities. As such, Clowdr's profile pages provide a broad range of options for people to share with other attendees  who they are and what they're working on. This includes their display name, picture, customisable badges, affiliations, social media handles, bio paragraph, pronouns and more. With the exception of display names, each part is optional so attendees can provide as much or as little information as they are comfortable sharing.

## **Standards and Browsers**

We are close to WCAG 2.1 AA compliance, and are working on AAA compliance. Currently we are working with members of the SIGCHI and IBM Accessibility groups to evaluate, improve and prepare Clowdr for a formal compliance evaluation. (Live captioning is a key feature on our list before we go for formal review).

Currently we support Firefox, Chrome, Edge and Opera browsers on desktop/laptop devices (Windows/Mac/Linux). We also support Safari 14 on most recent Mac devices. We support Chrome and Firefox mobile on Android. We do not currently support iOS devices but are continuing to work on compatibility throughout 2021.