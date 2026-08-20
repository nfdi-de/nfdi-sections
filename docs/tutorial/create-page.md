---
title: Create a new page
sidebar_position: 2
---

* Go to the [Sections Knoelge Base GitHub Repo](https://github.com/nfdi-de/nfdi-sections/)
* Open folder "/docs
* Open the folder that has the name of the menu item in which your new page is to be displayed in the menu, e.g. "sandbox"
* Click on the Button "Add File" and select "Create New File" from the dropdown
* Enter a name for your file, e.g. "my-sandbox-file.md". It is important that your file's name has the extension ".md"
* Enter the beginning of your file
```
---
title: [Your title here]
sidebar_position: [Position in left navigation bar here]
---  
```
e.g.
```
---
title: Wonderful New Page
sidebar_position: 9
---  
```
* Enter additional Content in Markdown syntax
* If you are finished, click button "Commit Changes"
* Enter a commit message
* Click button "Propose Changes"
* Click button "Create Pull Request"
* Wait for your page to be reviewed (For more info, see [Review Process](./review-process.md))
