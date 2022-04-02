---
updatedDate: 2021-04-21T05:57:27.000+00:00
title: Events
index: 0
description: A conference's program schedule is made up of events.
author: Kelly Kresge
---

A conference's program schedule is made up of events.

# What is an Event? 

Events are shown as blocks on your conference's calendar.

![image-20220310172819189](/images/event/image-20220310172819189.png)

An event can be configured to have your attendees watch a live-streamed presentation, interact with selected content (like viewing a paper), participate in a Q&A, join a social gathering, and much more!

**Note**: We often refer to an event as a "session". See [Sessions](#Sessions) later in this article for more information on this.

## Manage your Events

You can add new (and edit existing) events using the Schedule section of the Manage menu.

![](/images/event/image-20220328172232575.png)

## Create a New Event

You can add an event using the Create New event menu.

![](/images/event/image-20220328172420514.png)

![image-20220310173855509](/images/event/image-20220310173855509.png)

![image-20220310174027940](/images/event/image-20220310174027940.png)

Your existing events will be displayed in a table view.

### Start Time and End Time

These should be entered in Coordinated Universal Time (UTC). You can [use an online tool to convert](https://www.utctime.net/utc-time-zone-converter) from your local time zone to UTC.

### Room

Currently it is required to add a room to every event. See [Rooms](/organizer-guides/concepts/Rooms).

### Modes

Midspace has a range of modes to choose from, which can be combined to achieve various kinds of session.

| Mode         | Category             | Description                                                  |
| ------------ | -------------------- | ------------------------------------------------------------ |
| None         |                      | You can use content elements on the item to add any information, such as links to external websites. |
| Video-chat   | Single video-chat    | A single video chat for up to 45 people is made available for anyone in the room to join. |
| Exhibition   | Parallel video-chats | This mode focuses on the associated Exhibition. The content summary is hidden. Attendees use discussion rooms (one for each item in the exhibition) and can join any of the parallel conversations that are happening. They choose which discussion room(s) to join and how long to stay for. |
| Pre-recorded | Live-stream          | A live-stream is shown to attendees in a video player. The Broadcast Video associated with the selected content item is played back in the live-stream. |
| Presentation | Live-stream          | A live-stream is shown to attendees in a video player. The live-stream shows a video-chat. The video-chat comes from the backstage where presenters and chairs join to turn on their mic/camera/screenshare. More details are available on Midspace’s resource pages about live-streaming. |
| Q&A          | Live-stream          | The same as Presentation mode, but the label shown to attendees reads Q&A instead of Presentation. In all other respects these modes are currently identical. |
| Video Player | Video                | Primarily used to support mirroring by playing back a recording of an earlier stream. Can also be used to show a video from many other sources (e.g. YouTube). Allows attendees to watch at their own pace and rewind, rather than the continuous live stream playout (see pre-recorded mode). |
| Shuffle      | Parallel video-chats | Used to add a pre-defined Shuffle Queue to the main schedule. Organised social time, mentoring events and more. |
| Zoom         | External             | Displays a button with the link to Zoom. The Zoom link is added to associated content and marked as “hidden”. This way, the link is only available during the event time (and 10 minutes in advance of the event). |

Modes are not an actual UI element of Midspace—rather, they are concepts that can be implemented in a conference.

There are two main modes:

- Live-stream
- Video chat

### Name

You should set a name for your event. If there is only one paper (or other content item) being presented at the event, you may want to give them the same name. If there will be multiple papers being presented at your event, we recommend giving the event a more general name.

![image-20220310172825792](/images/event/image-20220310172825792.png)

![image-20220310173149296](/images/event/image-20220310173149296.png)

### Content

See the article on [Content](/organizer-guides/concepts/Content/) for more general information.

You can select a content item for an event.

![](/images/event/image-20220310174851840.png)

**Note**: You need to add the content item from content management menu before you can add it to an event.

#### Exhibition

![](/images/event/image-20220310180026603.png)

Most events have a content item and/or an exhibition associated with them. These define the paper, poster, or group of items being presented at the event. However, this is optional: your events do not have to have a content item nor exhibition associated with them. Such events just have a name and no other content—this can be used to set up an event for scheduled social time.

Exhibitions are added via the content management menu. (See: [Content](/organizer-guides/concepts/Content/))

An exhibition doesn't have to be part of a scheduled event, but you can optionally create an event with an associated exhibition to add it to the schedule. You can join an exhibition even if it's not on the schedule using the Exhibitions tab:

![](/images/event/image-20220311135944927.png)

Where a session is a collection of one or more events, **an exhibition** is a *collection of content*, where each content item can have its own associated discussion room.

### Shuffle Period

Documentation will be added later.

### Recorded

You can choose to record sessions as:
- A single recording for the whole session
- Separate recordings for each presentation.

### Participation Survey

Documentation will be added later.

### Event People

A person can be listed as either a presenter or a chair for an event. You can add multiple people to an event. You can view and edit an event's people by clicking the pencil icon.

![](/images/event/image-20220328172637264.png)

Then, select "Manage Event People".

![](/images/event/image-20220312182054071.png)

![](/images/event/image-20220312182202919.png)

## Sessions

A conference's program schedule is made up of events that are shown as blocks on your conference's calendar. An event at a conference is often comprised of a series of related presentations that are scheduled back-to-back in an auditorium. In common language, this would be called a "session". Sessions typically focus on particular topics, research areas or social activities. Because of the common usage of this term, we often refer to a block on the conference calendar as a "session" instead of an event.

To create a session-style event like this in Midspace, you will need to add a content item that has its type set to *session* to your event. (See [this article](Content.md#Types) for more information about content types). That content item should then be configured to contain details about the series of presentations occurring at that event. A typical session-style event consists of three presentations followed by a group Q&A (though many other formats are possible). While this can be configured manually in the Manage menu, it is recommended to use the [importer]([Using the Importer](../Midspace%20How%20To/Using%20the%20Importer.md)) to create events in this style.

**Session types**:

You can combine events to achieve different kinds of sessions (plenary, paper presentations, Q&As, AMAs, poster presentations, poster competitions). See: [Event Modes](/organizer-guides/conference-setup/event-modes/).

### Presentations

A session contains one or more presentations. A presentation can be a traditional paper presentation, a demonstration, a workshop, a Q&A for the whole session, a social, or a variety of other options. You can add a presentation to your conference by [adding a content item](/organizer-guides/concepts/Content/) and giving it an appropriate label. You can add an abstract, text, videos, images, slides, or a website link to your presentation.

A typical presentation has one or two speakers and several co-authors. Speakers are commonly asked to provide an abstract, a pre-recorded video and a copy of their slides.

## Additional Event Information

You can view and edit additional fields for an event by clicking the pencil icon. If you added a session using the importer, you can view and edit it here.

![](/images/event/image-20220328172637264.png)

Here you can associate people with your event, add continuations, and configure real-time captions.

![](/images/event/image-20220328172928699.png)
