DE-BUFF PARTY PARTICIPANT RECRUITMENT WEBSITE

TARGET URL
https://krisshieh.com/participate/

FILES
- index.html
- styles.css
- script.js
- qr-participate.png

BEFORE PUBLISHING
Search index.html for every instance of:
[INSERT
[APPROVED
REPLACE_WITH_

Replace those placeholders only with wording/links consistent with your approved study documents.

TO ADD PROTOTYPE SCREENSHOTS
1. Put image files in this folder, e.g.
   hat-selection.jpg
   emotion-bubble.jpg
   table-cube.jpg
   chess-puzzle.jpg
2. In index.html, replace each:
   <div class="placeholder">...</div>
   with:
   <img class="prototype-image" src="hat-selection.jpg" alt="Hat Selection in De-buff Party">
3. Add this to styles.css if desired:
   .prototype-image { width:100%; aspect-ratio:16/10; object-fit:cover; border-radius:20px; border:1px solid var(--line); }

GITHUB PAGES DEPLOYMENT
If krisshieh.com is served from your GitHub Pages repository:
1. Open the repository that currently contains your portfolio site.
2. Create a folder named: participate
3. Upload ALL files from this package into /participate/
4. Commit the changes to the branch used by GitHub Pages (commonly main).
5. After deployment, open:
   https://krisshieh.com/participate/
6. Test the registration button and Participant Information Sheet link.
7. Scan qr-participate.png with your phone. It should open the same URL.

IMPORTANT
Do not change the QR destination after printing recruitment posters. Because the QR points to the webpage, you can update the webpage's registration form later without reprinting the QR.
