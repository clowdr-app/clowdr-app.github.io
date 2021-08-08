---
updatedDate: 2021-05-26T09:05:07+00:00
categories:
  - Videos
title: Exporting content from Clowdr to YouTube
description:
  Simple instructions for exporting video content from Clowdr directly
  into YouTube!
author: Cristal Mojica
draft: false
---

#### Ready to Archive Your Conference Content?

Clowdr makes it quick and easy to package and export conference content directly to your organization's YouTube channel.

Exporting presentations from within Clowdr can save you a great deal of time as an organizer, by reducing the steps involved in post-event content management.

1. **Combine videos**

   You may have scheduled pre-recorded videos followed by live Q&As. We recommend combining the pre-recorded video with the Q&A, to form a single video.

2. **Export to YouTube**

   With Clowdr, you can export videos directly to YouTube - there's no need to download and re-upload the video files. Clowdr's export also includes subtitles and template-based descriptions to include abstracts, author names and links.

Follow these simple instructions to get started!

#### **1. Combining videos**

Combining videos enables you to stitch together videos, such as a pre-recorded presentation followed by the Q&A recording.

**Step 1.** Open the **_Manage Content_** panel from the admin dashboard.

**Step 2.** Click the **_Bulk Edit_** menu and select **_Combine videos_**_._

**Step 3.** Scroll down the menu to select the items you wish to edit. Select either _All Items_ or the items from a particular tag.

**Step 4.** Use the filtering options to narrow down which videos you wish to combine. A common example is to **filter by _Type_** to **_Video Broadcast_** and **_Video File_**_,_ to combine pre-recorded presentations with Q&A recordings.

**Step 5.** Review the combinations that are about to be generated.

> Please note that combining many videos may take Clowdr many hours, particularly if any of the videos are long recordings.

**Step 6.** Click **_Combine_**. You can now close the page while you wait for the combines to complete.

#### **2. Exporting to YouTube**

After combining videos has completed, you can then move on to exporting videos directly to YouTube.

**Step 1.** Navigate to the **_Export_** panel in the Clowdr admin dashboard.

![](/images/export-1.jpg)

**Step 2.** In the Export area, you will see three tabs - _Connected YouTube Accounts_, _Upload Videos to YouTube_, and _Uploaded Videos_. In the **_Connected YouTube Accounts **tab, click **_+Connect to YouTube**.

![](/images/export-2.jpg)

This will take you to a Google authentication page. From here, you can select the correct Google/YouTube account to link to Clowdr.

![](/images/export-3.jpg)

The newly added YouTube account will now appear in your list of _Connected Accounts_.

![](/images/export-4.jpg)

**Step 3.** Now that you have linked an account to upload content to, navigate to the **_Upload Videos to YouTube_** tab. From here, you are able to choose one or more videos to upload.

We recommend using **_Add videos by tag_** and filtering the file name to select only the combined videos (generated above). For example, **_filter by_** "**_Combined video_**" (without the quotes).

![](/images/export-5.jpg)

![](/images/export-7a.jpg)

We recommend configuring the privacy setting (which determines of each video's privacy setting in YouTube); the video title and description. A recommended description template is provided below.

![](/images/export-6.jpg)

**Recommended Title Template**

If you are uploading combined videos, we recommend removing the "{{fileName}}" from the video title.

    {{itemTitle}} ({{fileName}})

**Recommended Description Template**

    {{#abstract}}{{abstract}}

    {{/abstract}}
    {{#authors.length}}
    {{#authors}}{{name}}{{#affiliation}} ({{affiliation}}){{/affiliation}}, {{/authors}}

    {{/authors.length}}
    {{#paperLinks.length}}
    {{#paperLinks}}{{#url}}
    * {{text}}: {{{url}}}
    {{/url}}{{/paperLinks}}

    {{/paperLinks.length}}
    {{#paperUrls.length}}
    {{#paperUrls}}{{#.}}* {{{.}}}
    {{/.}}{{/paperUrls}}

    {{/paperUrls.length}}

When exporting videos, you are able to select from the list of connected Google/YouTube accounts, as well as upload to specific channels and playlists.

**Step 4.** Once you've uploaded content to YouTube, you are able to view the full list of videos in Clowdr from the _Uploaded Videos_ section.

The information listed includes the video YouTube ID, privacy status, and preview with playback ability.

![](/images/export-7.jpg)

### Now you're ready to start exporting!

Please note: Google currently imposes tight API rate limits that restrict the volume of videos Clowdr can export per day (across all our customers). We will provide instruction about managing your export at the end of your conference.

If you need any advice or guidance, please don't hesitate to contact Clowdr.
