---
updatedDate: 2021-04-26T04:13:48.000+00:00
categories:
- support
title: Technical requirements for using Clowdr
slug: requirements
description: Review the minimum technical requirements for using Clowdr
author: Cristal Mojica
draft: false

---
### Getting Ready to Use Clowdr?

We want to make sure that all users have a great experience on Clowdr!

Here is the brief list of minimum technical requirements for using our platform:

* Highly recommended to have a stable connection of at least 5Mbps (the same as YouTube recommends for 1080p)
* Newest version of [Google Chrome](https://www.bing.com/aclk?ld=e8nrVhoguVZwYZ2gA-FTA7YzVUCUwzEPscD5pA1AHjQJdMukkEd6SmZQ22O4tDUzrZSPcIq8ONMj5OyECe3oAmC1zBqkJL2onam3zijpD7LgUMj4yPB4H11H4llZPv2LcoqY_dkKiA2OdLs-4eAnv_1AvgCHe3faG31liNmSBJUzIAxZ0HuUn_7-zIkZFWAgJIyt_7IA&u=aHR0cCUzYSUyZiUyZmNsaWNrc2VydmUuZGFydHNlYXJjaC5uZXQlMmZsaW5rJTJmY2xpY2slM2ZsaWQlM2Q0MzcwMDA1Mjc4NDAzNjIxNCUyNmRzX3Nfa3dnaWQlM2Q1ODcwMDAwNTc4NDg3MzYyNyUyNmRzX2FfY2lkJTNkNDA1NTI1ODAwJTI2ZHNfYV9jYWlkJTNkOTc3MDA1NTczMyUyNmRzX2FfYWdpZCUzZDEwMDA5NzMxMTg1NiUyNmRzX2FfbGlkJTNka3dkLTEwNDc4NjIzMTgzJTI2ZHNfeF9hZHhpZCUzZDgzNzAwMDA3MDYzMDk4MjI4JTI2ZHNfeF9hZHh0eXBlJTNkMSUyNmRzX2FfY2lkJTNkNDA1NTI1ODAwJTI2ZHNfYV9maWlkJTNkMTIyNTQ3Njk1MTk4JTI2ZHNfZV9hZGlkJTNkODA0MDE4ODgxNzg0MTklMjZkc19lX3RhcmdldF9pZCUzZGt3ZC04MDQwMTk5Mzg5MDU2NCUzYWxvYy0xOTAlMjYlMjZkc191cmxfdiUzZDIlMjZkc19kZXN0X3VybCUzZGh0dHBzJTNhJTJmJTJmd3d3Lmdvb2dsZS5jb20lMmZjaHJvbWUlMmYlM2ZicmFuZCUzZENIQkYlMjZicmFuZCUzZFZES0IlMjZnY2xpZCUzZDVkNTU2Y2U2MmMxNzE4MWVjNzM2MGM2MTE3ZTNjNTczJTI2Z2Nsc3JjJTNkM3AuZHMlMjZ1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2QxMDA5OTM2JTI1MjAlMjU3QyUyNTIwQ2hyb21lJTI1MjBXaW4xMCUyNTIwJTI1N0MlMjUyMERSJTI1MjAlMjU3QyUyNTIwRVNTMDElMjUyMCUyNTdDJTI1MjBOQSUyNTIwJTI1N0MlMjUyMFVTJTI1MjAlMjU3QyUyNTIwZW4lMjUyMCUyNTdDJTI1MjBEZXNrJTI1MjAlMjU3QyUyNTIwU0VNJTI1MjAlMjU3QyUyNTIwQktXUyUyNTIwLSUyNTIwRVhBJTI1MjAlMjU3QyUyNTIwVHh0JTI1MjAlN2UlMjUyMFRvcCUyNTIwS1dEUyUyNnV0bV90ZXJtJTNkZ29vZ2xlJTI1MjBjaHJvbWUlMjZ1dG1fY29udGVudCUzZERlc2slMjUyMCUyNTdDJTI1MjBCS1dTJTI1MjAtJTI1MjBFWEElMjUyMCUyNTdDJTI1MjBUeHQlMjUyMCU3ZSUyNTIwR29vZ2xlJTI1MjBDaHJvbWUlMjUyMFRvcCUyNTIwS1dEUw&rlid=5d556ce62c17181ec7360c6117e3c573),[ Firefox](), [Edge ](https://www.microsoft.com/edge)or[ Safari]()
* Windows 10 or latest macOS

#### Technical Requirements for Uploads

Clowdr supports a wide range of video upload formats. However, for the best results, we recommend that you upload videos in the following format:

* Codec: H.264 (AVC)
* Container: MP4
* Resolution: 1920x1080 (1080p)

Note: Clowdr does not support the following H.264 profiles: High 4:2:2, High 10-bit, High 4:4:4. Files produced in a ‘lossless’ mode are unlikely to work.

Tip: you can use the following [ffmpeg](https://www.ffmpeg.org/) command to convert many input videos to a format Clowdr accepts.

    ffmpeg -i <input file> -vcodec h264 -s hd1080 -crf 23 output.mp4

**Tip:** We also highly recommend attendees use headphones and an external camera, when available. This ensures a more comfortable experience during those long networking hours!