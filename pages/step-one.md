---
title: 'Step 1: Configure your spacebook' 
date: 2020-11-20
permalink: /getting-started/step-one/index.html
eleventyNavigation:
  order: 5
  parent: Home
  key: Step one 
  title: 'Step 1: Configure'
---
Once you have your spacebook running, your first step is to do some basic configuration to make it your own. All site configuration is stored in a single file located at **_data/site.json**. If you have a local copy of your site installed you can edit this file directly, or you can edit and commit the file using the Github UI. The default site.json file looks like so: 

```
{
  "name": "Spacebook",
  "subtitle": "Create fast and simple documentation to explain almost anything.",
  "description": "A simple document generator based on Eleventy, Tailwind 2.0, and Alpine.js",
  "footer": "Made with ❤️️ in Minneapolis",
  "emoji": "💥️️",
  "url": "https://spacebook.netlify.app",
  "githubUrl": "https://github.com/broeker/spacebook/",
  "githubBranch": "main",
  "authorEmail": "broeker@gmail.com",
  "authorName": "Tim Broeker",
  "enableSearch": true,
  "enableContact": true,
  "enableDarkMode": true,
  "enableEditButton": true,
  "enableGithubLink": true,
  "enableNetlifyCMS": false,
  "enableCloudinary": false
}
```

::: callout
Note: If you enable the optional Netlify CMS integration, all of these settings can also be changed via the CMS.
:::

When you make changes to this file and deploy your site will automically update to reflect your new settings:

* **Name** -- this is the name or title of your site as it appears in the header
* **Subtitle** -- this is the short subtitle that appears directly below your site name (optional)
* **Description** -- this is used as your default metadata page description and can be overridden on a page-by-page basis as needed
* **Footer** -- this is the plain text that appears in the bottom footer

* [Eleventy Netlify Boilerplate](https://github.com/danurbanowicz/eleventy-netlify-boilerplate) by Dan Urbanowicz
* [Eleventy-Tailwind-AlpineJS Starter](https://github.com/gregwolanski/eleventy-tailwindcss-alpinejs-starter) by Greg Wolanski
* [Eleventy  One](https://github.com/philhawksworth/eleventyone) by Phil Hacksworth

There is no one "right way" to build an Eleventy site an this is just one small attempt.

Many starter kits are much more ambitious than this one, which is designed to be as simple and lightweight as possible while still allowing for some more features in the future (Alpine.js), an easy path toward a more advance design if desired (Tailwind), and an easy way for non-technical users to create and edit content (Netlify CMS). 
