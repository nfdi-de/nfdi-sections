# NFDI Sections Knowledge Base

This repo contains the code and - most importantly - content of the NFDI Sections Knowledge Base https://nfdi-de.github.io/nfdi-sections/ 
This website is built using [Docusaurus](https://docusaurus.io/).

The knowledge base is maintained by section spokespersons, section working groups, and section liason officers. Any contributions from sections members are welcome.

## Adding calendar entries for sections, working group meetings, workshop
Use the Issue Template "New Calendar Event" add all relevant information. A pull request will be created to add your event automatically.

## Contributing to the content

If you only need to tweak text or front matter in Markdown/MDX files and do not plan to run Docusaurus locally:

## Quick edits without a full local setup

1. Browse to the file in GitHub (for example `docs/...` or `blog/...`) and click **Edit**.  
2. GitHub will automatically fork the file into a new branch—give the branch a descriptive name (e.g., `patch/docs-typo`).  
3. Make the text changes in the browser; use the preview tab for basic Markdown rendering.  
4. When you save, describe the change in the commit message and let GitHub create the branch for you.  
5. Open the resulting pull request against `main`, mention any screenshots or context reviewers should know, and wait for the PR checks/review to merge.

Even for browser-only edits, the protected branch still requires the PR path so all changes are reviewed and the site build stays green.


## Contributing to the content with full local setup

The site is a standard [Docusaurus 2](https://docusaurus.io/) project: long-form documentation lives in `docs/`, blog posts go into `blog/` using the `YYYY-MM-DD-title.md[x]` naming pattern, and any static files (images, downloads) belong inside `static/`. Pages such as the imprint can be added in `src/pages/`. Keeping that structure intact ensures sidebar generation and routing continue to work as expected.

Because the protected `main` branch only accepts pull requests, follow these steps when you want to add or update content:

1. **Set up locally**  
   - Install Node.js 18+ and run `npm install` once to fetch dependencies.  
   - Start the dev server with `npm start` for a live preview, or use `npm run build` to validate the production build.
2. **Create a working branch**  
   - Update your local `main` (`git checkout main && git pull`).  
   - Create a topic branch (`git checkout -b feature/my-topic`) so your changes are isolated from `main`.
3. **Add your content**  
   - Place docs or guides in `docs/` using kebab-case filenames and front matter (`title`, `sidebar_position`).  
   - For blog posts, add a file in `blog/` with author metadata defined in `blog/authors.yml`.  
   - Add related assets either next to the Markdown file or in `static/` and reference them relatively.
4. **Preview and validate**  
   - Use the dev server to review the page, check links, and ensure images load.  
   - If you change navigation, verify the sidebar order and any custom routes still behave correctly.
5. **Commit and push**  
   - Commit concise, descriptive changes (`git commit -m "Add use-case guide"`).  
   - Push your branch (`git push origin feature/my-topic`).
6. **Open a pull request**  
   - Create a PR targeting `main`, describe the change, mention relevant sections affected, and attach screenshots for visual updates.  
   - After review feedback is addressed, the PR will be merged—direct pushes to `main` are blocked by design.

Following this workflow keeps the protected branch stable while making it easy for others to review and deploy your contributions.
