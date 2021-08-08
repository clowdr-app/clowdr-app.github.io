---
title: Preparing, uploading and editing video captions
updatedDate: 2021-03-26T15:40:16Z
description:
  Preparing, uploading and editing video captions for pre-recorded and
  live videos.
author: Ross Gardiner
categories:
  - Videos
---

Video captioning is a significant part of Clowdr's commitment to
accessibility:

- **Clowdr auto-generates subtitles for all uploaded videos.**
- Clowdr has a built-in editor that gives authors the opportunity to correct any errors in the captions - as can happen with technical terms and acronyms!
- All captions are included when exporting videos from Clowdr to YouTube.
- All recordings of livestreamed events are run through our subtitle auto-generator before they are published. The captioned recordings of livestreamed talks are made available to attendees shortly after each talk ends.

**Live captioning is high on our priority list for summer 2021!**

<hr />

### Preparing and uploading a video to Clowdr

The following 6-minute video will guide you through the process of
uploading your video and editing the auto-generated captions:

`youtube:https://www.youtube.com/watch?v=SvHLXYJWO2k`

The process is also outlined in the following step-by-step
instructions:

1. **Invitation to upload**

   You will receive an email from the conference organizer (via Clowdr) requesting you to upload your video(s) to the platform. This email will include a direct link to the upload page. There is no need to log in!

2. **Upload video**

   Once you've landed on the upload page via the link in the
   request email, you will be able to drag-and-drop a file or click
   the upload button to browse files on your device and add your
   video.

   **Please note:** You
   are given three attempts to submit your video. This page will
   also include information on the maximum duration and quality of
   the video.

3. **Confirmation email**

   Once you've uploaded a video, you will receive an email from
   Clowdr confirming your submission was received and is being
   processed.

4. **Processing and captioning**

   This will be followed by two additional emails - one marking
   when your video has been processed, and a final email confirming
   that it has been captioned and is ready for viewing &
   editing. Please remember to check your spam folders for
   communications from Clowdr.

5. **Auto-generated subtitles**

   Clowdr will auto-generate the subtitles for your video - this
   typically takes 5 to 20 minutes, but can sometimes take longer.
   If you have not received any communications from Clowdr with the
   status of your video after 4 hours, please contact your
   conference organizers for technical assistance.

6. **Edits to captions**

   Once you receive the email confirming that your captions are
   ready for review, follow the link in the email to edit them. The
   space to enter modifications will be presented alongside the
   video. You can input edits by simply clicking the text you want
   to modify and typing directly into the body of the transcript.

7. **Saving edits**

   Please remember to click the Save button on the right hand side
   of the screen before exiting or reloading the page, to save and
   submit any changes. Failing to click Save will result in lost
   edits!

Taking the time to curate subtitles helps to ensure all attendees in all environments are able to enjoy your video. Thank you!

### Uploads: technical details

Clowdr supports a wide range of video upload formats. However, for the best results, we recommend that you upload videos in the following format:

- Codec: H.264 (AVC)
- Container: MP4
- Resolution: 1920x1080 (1080p)

Note: Clowdr does not support the following H.264 profiles: High 4:2:2, High 10-bit, High 4:4:4. Files produced in a 'lossless' mode are unlikely to work.

Tip: you can use the following [ffmpeg](https://www.ffmpeg.org/) command to convert many input videos to a format Clowdr accepts.

    ffmpeg -i <input file> -vcodec h264 -s hd1080 -crf 23 output.mp4
