---
updatedDate: 2022-02-09T10:35:00+00:00
title: Importing your program
index: 0
description: Using the template spreadsheet to bulk-import your existing program.
author: Ed Nutting
isFeatured: false
---

Midspace's import template enables you to use popular tools, such as Excel or
Google Sheets, to quickly bulk-enter your existing conference program and import
it into Midspace. This page provides the template and explanations of the column
meanings, ways to use it and how the options provided by Midspace's importer.

The template spreadsheet and importer provide a range of options to enable you
to import your program in the configuration you desire. For example, whether to
import sessions in single blocks in the schedule, or as individual papers. Each
of the options is explained on this page.

## The Template

The template is available from [Midspace's Google
Drive](https://docs.google.com/spreadsheets/d/1XtQJPts8h59LNdIsShKRLMj4QndP97aC/edit?usp=sharing&ouid=101146156947887051687&rtpof=true&sd=true).

To start using it, [_Download_ a copy](#Using-Excel) or [_Make a
Copy_](#Using-Google-Sheets) of the template. Open your copy in Google Sheets,
Excel or your preferred spreadsheet editor.

### Data from external tools

If you have an external tool/system with existing data, it may provide a CSV,
XML or JSON export. If you are familiar with scripting languages (such as
JavaScript) may wish to write a script to convert your existing data into the
CSV format produced from Midspace's template spreadsheet.

### Using Excel

If you prefer to use Excel or another spreadsheet editing tool, you can download
a copy of the template using the following steps.

1. Click the File menu in the top-left corner
2. From the menu, click Download
3. From the submenu, select your preferred format. We recommend Microsoft Excel
   or OpenDocument formats.
4. Save the download file
5. Open the downloaded template file in your preferred spreadsheet program.

#### A note on Excel and Unicode

Excel does not work in Unicode, meaning accent characters, emojis and other
unusual characters may become corrupted or lost if you copy data from other
applications or from the internet. We urge caution when using Excel to process
data that may contain special characters.

### Using Google Sheets

If you have a Google Drive account and are logged in, you can make a copy of the
template using the following steps.

1. Click the File menu in the top-left corner
2. From the menu, click Make a Copy
3. Enter a name for your copy (e.g. "Conference 2022 Program")
4. Select a folder to store your copy
5. Click OK
6. A new tab should open with an editable copy of the template
   - This copy is only accessible to you and people you share it with.

### Overview

The template is designed to support a number of standard conference program
structures. These consist of Sessions, Presentations, Speakers, Authors and
Content.

- **Session:** A session is a group of one or more presentations.
- **Presentation:** A presentation may be a traditional paper presentation or it
  may be a demonstration, workshop, Q&A for the whole session, a social, or a
  variety of other options. These are described in more detail below.
- **Speaker:** A speaker is expected to be "on stage" to interact with the
  audience during a presentation.
  - Speakers may upload content for their presentation.
- **Author:** An author is the name of a person who contributed to the creation
  of the presentation (or associated works) but will not be speaking at the
  conference.
  - Authors are not able to upload content for presentations.
- **Content:** Additional information associated with a presentation.
  - Content may include an abstract, text, videos, images, slides or a website link.
    - More content types are available after importing your program.
  - You may optionally allow speakers to edit the abstracts of their
    presentations within Midspace.
  - Content is typically uploaded to Midspace by speakers using Midspace's
    purpose-built submissions system.

A typical conference will have one or more (parallel) tracks spread across
several days. Tracks may be represented within Midspace using one of our
advanced features (Rooms, Tags or Subconferences) depending on your conference
structure. Within each track, sessions are scheduled.

Sessions typically focus on particular topics, research areas or social
activities. A typical session consists of three presentations followed by a
group Q&A (though many other formats are possible).

A typical presentation has one or two speakers and several co-authors. Speakers
are commonly asked to provide an abstract, a pre-recorded video and a copy of
their slides. We recommend using Midspace's submissions system to manage content
uploads, particularly video submissions which support automatic subtitling and
speaker-editing of subtitles.

Additional advanced options exist to enable greater customisation of your
imported program. Please refer to the [Advanced Options](#Advanced-Options)
section below for more information.

### Using the template

We recommend starting with creating a few test sessions in the same structures
as typical sessions at your conference. After importing and testing the
structure meets your expectations, you should then move on to filling out the
import template with your complete conference program.

#### Getting help

For assistance with the template, please contact our support team. The dedicated
support email address for your conference is available from the Management
Dashboard of your conference.

#### Getting started

1. **Create a session**

   1. Enter a title for the session.
   2. Enter a start time for the session.
      - This must be in UTC time (not your localtimezone)
      - **Top tip:** Use Google Search to quickly convert times, e.g. ["10 am PST
        in UTC"](https://www.google.com/search?q=10+am+pst+in+utc)
      - We are working on improvements to make this more flexible in future.
   3. Enter a session duration in minutes.
      - This must be a whole number.
   4. A session requires a Chair - sometimes known as a session organizer or
      moderator.

   During initial testing, we recommend you put your own name and email address
   while you test things out.

   - Midspace uses email addresses to identify chairs and speakers of sessions.
   - Chairs and speakers will be invited to join the conference using the email
     addresses you provide.
   - If a chair or speaker's email address is inaccurate, it is likely to result
     in that chair or speaker being unable to access or properly manage their
     session or presentation.

2. **Create presentations**

   Presentations within a given session, start from the beginning of that
   session and occur back-to-back during the session. (Sessions may be listed
   out-of-order in the spreadsheet but presentations within a session must be
   placed in-order).

   The total duration of presentations within a session may be less than or
   equal to the duration of that session. The total duration may not exceed the
   duration of the session Midspace's importer will detect this issue and
   highlight it to you.

   A "presentation" may be different to a typical paper presentation. For
   example, it may be a demonstration, workshop, tutorial, social activity,
   sponsor slot or group Q&A for the session. These options are described in
   more detail below.

   To set up a presentation, enter a title, type and duration. You should then
   enter at least one speaker's name, email address and affiliation. If someone
   has no affiliation (or you are not aware of it), you may leave the
   affiliation blank.

   - Use semicolons (;) to separate names, email addresses and affiliations of
     multiple speakers.
   - If you have multiple speakers and do not know one of their affliations,
     enter an extra semicolon. E.g.
     - Names: "James; Julia; Hannah"
     - Affiliations: "Earth; ; Mars".
     - Julia has no affiliation.
   - Speakers will be listed in the program in the same order they are listed in
     the Speaker Names column.
   - Be careful to list speaker's names, email addresses and affiliations in the
     same order or they will become mismatched.
   - By default, speakers will be listed in the program before "other authors"

   During initial testing, we recommend you add a single speaker with your name
   or the name of one of your co-organizers while you test things out. You will
   also need their email address.

   During initial testing, we recommend you leave the remaining columns blank.

3. You now have a simple test program to try importing.

   **Please follow the [Preparing the file for import](#Preparing-for-import)
   steps** below as you must save your import data in a specific file format.

#### Types of Presentation

A number of options are available for the type of presentation. Please choose
the appropriate type for your requirements.

The type of presentation does not affect how people interact during the
presentation. It is simply a label to help your attendees better understand your
schedule.

- **Demonstration:** A practical exhibition and explanation of how something
  works or is performed.
- **Keynote:** A keynote presentation (a talk that establishes a main underlying
  theme of your conference).
- **Paper:** A presentation of a paper.
- **Poster:** A presentation of a poster.
- **Presentation:** A general presentation.
- **Session Q&A:** A group Q&A for everyone in the session.
- **Social:** A social activity.
- **Symposium:** A meeting to discuss a particular subject
- **Tutorial:** A small group meeting to discuss a topic led by a subject matter
  expert.
- **Workshop:** A small group of people meeting to engage in intensive
  discussion and activity on a particular subject or project.
- **Other:** Any activity that doesn't fit into one of the available labels
  above.

### Recommendations

We recommend the following:

- All presentations should be at least 5 minutes long, unless they are entirely
  pre-recorded.
- All sessions should be at most 90 minutes long
- For entirely virtual conferences, sessions in which papers are being presented
  should consist of several presentations followed by a group Q&A.
  - This has been a more successful format for virtual conferences than formats
    used at traditional physical conferences.
  - It reduces pressure on organizers, chairs, speakers and the audience. We
    recommend this format over the less successful "presentation followed by
    individual Q&A" format.
- All sessions should be scheduled with at least a 10 minute break afterwards.

### Advanced Options

The following advanced options are available for organizers who require greater
customization of the program configuration. We recommend trying out Midspace and
these options before choosing to use them. For more information, please contact
our support teams.

Typically additional configuration is required after import to make these
advanced options operate properly. We recommend configuring a test session
directly in your Midspace Conference to fully understand the configuration
required.

- **Interaction mode:**

  Ordinarily all presentations take place via Video Chat - which is a typical
  video chat, similar to Zoom, MS Teams, Google Meet or other platforms

  This option enables you to take advantage of Midspace's more advanced
  interaction modes to create session formats such as networking, breakout
  groups, live-streams (webinars) and events hosted outside of Midspace.

  - **Video-chat:** The default. Real-time (near 0 latency) video
    conversations/presentations.
    - Controls are available for chairs/presenters to manage who is speaking.
    - Controls are available to manage recording, timing and more.
    - Suitable for audiences up to 250 people.
      - The size limit may have increased since this documentation was written.
        Please refer to the information provided within Midspace's interface for
        accurate limits.
  - **Live-stream:** Live-stream (webinar) interaction.
    - The audience watches a stream while presenters join the stage to deliver
      their presentation.
    - This is most similar to YouTube live-streaming.
    - Midspace supports ingesting RTMP input streams from physical venues, Zoom
      or other sources.
    - Midspace supports egressing RTMP output streams to destinations such as
      YouTube, Vimeo and any other RTMP-capable destination.
    - This is suitable for audiences up to 10,000 people.
      - The size limit may have increased since this documentation was written.
        Please refer to the information provided within Midspace's interface for
        accurate limits.
    - The audience typically asks questions via text chat.
    - As with all live-streaming, there is a delay between the Stage (where the
      presenters are) and the video stream the audience sees. The lag for any
      given member of the audience varies depending on their location in the
      world. For presenters and audience members unfamiliar with live-streaming,
      this can be particularly confusing.
    - Additional training for chairs and presenters will be necessary to
      familiarise them with online streaming, Midspace's backstage environment
      and to get comfortable with the lag between saying something and the
      audience responding via text chat.
    - Rooms must be used to limit the number of generated live-streams.
    - Please talk to our support team to discuss your planned program before
      using live-streaming mode.
  - **Breakout video-chat:** Using an exhibition, multiple video-chat rooms are
    available for the audience to choose which one they wish to join.
    - This requires additional configuration after import to set up the items
      and rooms within the imported exhibition.
    - Note: The functionality of this mode is subject to change. Please discuss
      with our support team prior to using this mode.
  - **Networking:** Randomised one-to-one or group "shuffle" networking.
    - This requires additional configuration after import to set up the
      networking queues.
  - **External Event:** An event hosted outside of Midspace.
    - This requires additional configuration after import to set up the
      "External event link" to provide the audience with a clear button to click
      (i.e. place to go) in order to join the event.

- **Room Name:** It is possible to schedule multiple sessions into a single
  room. In this way, rooms may be used to represent tracks.

  - The same room is used for each presentation in a session.
  - Two sessions in the same room may not overlap in time.
  - By default, rooms are allocated automatically.

- **Tags**: Tags may be used to group presentations by theme, topic or track.
  - Separate multiple tags using semicolons.
  - We discourage tagging presentations by type - this isn't very helpful to
    attendees trying to find presentations on particular topics.
  - By default, presentations are tagged by the title of the session.

### Examples

#### Keynote

TODO:

#### Paper Session

TODO:

#### Poster Session

TODO:

#### Poster Exhibition (Unscheduled)

TODO:

#### Tutorial or Workshop

TODO:

## The Importer

TODO:

### Overview

TODO:

### Preparing for import

To prepare your spreadsheet for use with Midspace's importer, you must save it
as a .CSV file (Comma-separated Values).

**Note:** The file _must_ be a _comma_ separated values file. Some tools
incorrectly export CSV files separated by semicolons. The Midspace importer will
not correctly process such files. Values which contain commas must be escaped
using double quotation marks.

#### Google Sheets

1. Open the File menu (top-left corner)
2. Open the Download submenu
3. Select "Comma-separated Values (.csv)"
4. Save the file to your computer

#### Excel

1. Open the File menu (top-left corner)
2. Open the Export submenu
3. Select "Change file type"
4. Select "CSV (Comma delimited) (\*.csv)"
5. Click "Save As"
6. Save the file to your computer

### Using the importer

TODO:

### Options

- **Session:**
  - You can choose to import sessions as either:
    - Single blocks in the schedule containing details of each presentation
    - Or a separate block for each presentation
  - You can choose to record sessions as:
    - A single recording for the whole session
    - Or separate recordings for each presentation

### Identifying changes

TODO:

### Possible Errors

TODO:

- **"Presentations exceed session duration"**

  The total duration of the presentations within the highlighted session exceed
  the duration of the session. Either increase the duration of the session or
  reduce the duration of one or more of the presentations in that session.

### FAQ

TODO:

- **How can I schedule presentations for my sponsors?**

  We recommend scheduling sponsor sessions/presentations within Midspace after
  importing your main conference program. This will enable you to associate
  sponsors with their presentations. It is not possible to do this via the
  importer.

## Next steps

TODO:
