---
updatedDate: 2021-05-26T09:05:07+00:00
title: Exporting your data
index: 0
description: Instructions for exporting your data from Midspace.
author: Ed Nutting
---

## Ready to archive your conference's program?

As an organizer, Midspace makes it easy to download copies of all your data that
we hold on your behalf. There are three kinds of data we can provide:

1. CSV exports of your program
2. File downloads of your images, videos, PDFs, etc.
   - See also [exporting your videos directly to
     YouTube](exporting-videos-to-youtube) (which avoids having to download and
     re-upload each video file and preserves the edited captions)
3. CSV exports of your analytics

In each page of Midspace's admin UI you will find an Export button which enables
you to download the CSV file.

## Your Conference Program

To download a complete copy of your conference program you should download the
exports from the following pages:

1. Content: For each of the following types, click the Export button and select
   that type
   - Tags
   - Exhibitions
   - Content
2. Content: Images/PDFs
   - You will find the URLs to the images, PDFs and any other files (including
     videos and subtitle SRT files) in the Element Data columns of the Content
     export. You can use these to download each file.
   - A script is provided below to automatically process your content export CSV
     file, and download each file in turn. You can optionally skip downloading
     videos.
3. Content: Videos
   - Go to Admin → Export → Upload to YouTube (or Download videos)
   - You can choose to export videos directly to YouTube or to download each
     video.
   - Please see [exporting your videos directly to
     YouTube](exporting-videos-to-youtube) (which avoids having to download and
     re-upload each video file and preserves the edited captions)
4. Schedule: Click Export and select All Rooms
5. Program People: These are included in the content export, but you can also
   export the list separately
6. Rooms
7. Sponsors: These are included as part of the Content export
8. Registrants:
   - Choose whether to include profile data or not
   - Click all registrants or choose a group to download
9. Analytics: Download options are available at Admin → Analytics

## Script to download content files

If you are familiar with NodeJS, you can use the script in [this
repository](https://github.com/clowdr-app/downlolad-content-files) to download
each video, audio, image, PDF or other kind of file in turn from your content
export.
