# Authoring content

This guide will help you author or edit resource content through Forestry. You should already have access to a Forestry site attached to this repository.

### Create a new resource

- Click _Resources_ in the left sidebar.
- Navigate to the category where you want to create the new resource.
- Click _Create new > Resources_
- Fill in the title, description and your author name.
  - Warning: saving a resource will always make it publicly available through GitHub.
  - However, you can mark resources as 'draft' to hide them from being listed on the website. To do this, use 'Draft' as the first word of your title. For example, instead of _My resource_, you would choose the title _Draft My resource_.
- Write an initial version of the resource. See [Tips for authoring a resource](#tips-for-authoring-a-resource).
- Click _Save_. This will publish the resource.

### Publish a draft resource

When you are ready to publish a draft resource, it's easy to flip the switch.

- Open the resource file for editing.
- Click the 'three dots' menu button at the top right.
- Choose _Rename_.
- Remove `draft-` from the start of the _Filename_.
- Click _Rename_. Your resource will become visible on the website.

Note: you may also want to remove the word 'Draft' from your resource title! You can actually do this at any time, as changing the title does not change the file name of your resource page.

### Create a new category

- Open the _Resources_ section from the left sidebar.
- Navigate to the place where you want to create the new category.
- Create a new folder by clicking _Create new > Folder_.
  - Name your folder using 'kebab case'. So, instead of 'My New Category', the name would be 'my-new-category'.
- Next, we need to create an 'index' resource that contains a title and description for the category. Enter the new folder and click _Create new > Resources_.
- Set the title to `index` for now - we'll change it later.
- Click _Save_.
- Now, change the title to match the name of your category as you want it to be displayed to readers (e.g. 'My New Category').
- Add a description and your name as the author.
- Click _Save_ again.

Once you've done this, your category will appear on the resource site. You can now start adding individual resources to the category!

### Tips for authoring a resource

- You should use only Heading 2 and below. The article title will be displayed for you as a Heading 1.
- You can insert a YouTube video by typing a grave character (\`), then `youtube:`, then pasting the video URL, then another grave character (\`). It should end up looking something like this:
  ```
  `youtube:https://www.youtube.com/watch?v=SvHLXYJWO2k`
  ```
