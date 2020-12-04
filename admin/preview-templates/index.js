import Post from "/admin/preview-templates/post.js";
import Page from "/admin/preview-templates/page.js";
import Globals from "/admin/preview-templates/globals.js"
// Register the Post component as the preview for entries in the blog collection
CMS.registerPreviewTemplate("globals", Globals)
CMS.registerPreviewTemplate("blog", Post);
CMS.registerPreviewTemplate("pages", Page);

CMS.registerPreviewStyle("/style.css");

// Register any CSS file on the home page as a preview style
// fetch("/")
//   .then(response => response.text())
//   .then(html => {
//     const f = document.createElement("html");
//     f.innerHTML = html;
//     Array.from(f.getElementsByTagName("link")).forEach(tag => {
//       if (tag.rel == "stylesheet" && !tag.media) {
//         CMS.registerPreviewStyle(tag.href);
//       }
//     });
//   });
