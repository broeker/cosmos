# Cosmos

Cosmos is starter project you can use to spin up a simple website exactly like this one. It uses [Eleventy](https://www.11ty.io) for site generation, [Tailwind 2.0](https://tailwindcss.com/) for utility-based theming, and [Alpine.js](https://github.com/alpinejs/alpine) for a lightweight JavaScript engine. You can host your site on [Netlify](https://www.netlify.com), with automated [Github](https://www.github.com) deployments and an optional [Netlify CMS](https://www.netlifycms.org/) integration. Cosmos is designed to be:

* **Easy to use** 😀 -- drop in a new page and it appears magically in your navigation 
* **Writing focused** 📔 -- clean pages, nice typograpy and a simple blog with tags and multiple authors
* **Lightning fast and accessible** 🚀 -- static files, system fonts, minimal JavaScript, purge and minify All the Things, fully responsive, accesible to all
* **Easy on the eyes** 👀 -- a minimalist design and beautiful typography that lets your content shine
* **Markdown and Emoji friendly** 🦔 -- support for markdown footnotes, custom containers, anchors, and emoji!
* **Flexible** 💪 -- disable features you don't need, add advanced features with serverless functions or Apline.js

Cosmos is named in honor of the great communicator [Carl Sagan](https://en.wikipedia.org/wiki/Carl_Sagan) and his ability to explain complex ideas and complicated scenarios like the *entire universe* with simple words and illustrations. You can use Cosmos for documentation sites, developer blogs, to sketch out new ideas, or for whatever suits your fancy.  

- - -

## “Out of chaos, find simplicity.” -- Bruce Lee 🥋

Cosmos was inspired by my search of the modern web for the simplest possible way to stand up the simplest possible website in the least amount of time, with the freedom to extend as needed, zero cost, no maintenance burden, and virtually zero effort. Here is where I landed: 

* [Eleventy](https://www.11ty.io) for a super fast Node-based static site generator that stays out of your way and lets you ship only what you want to ship. It is really kind of great 🚀
* [Tailwind 2.0](https://tailwindcss.com/) for a brilliant and tiny utility-first CSS framework. The more projects I build with Tailwind the better it gets.  🎨
* [Alpine.js](https://github.com/alpinejs/alpine) a minimal framework for simple or advanced JavaScript. It is the Tailwind of JavaScript with a utility-based approach requiring zero lines of Javascript. 🕹️
* [Netlify](https://www.netlify.com/) for one-click installs, easy form support, free hosting, and an automated [Github](https://github.com/) deployment pipepline 🤖
* [Netlify CMS](https://www.netlify.com/) (optional) to provide an easy Markdown editor for creating and changing content 💻

Cosmos was built to satisfy a very particular desire for creating simple, notebook-like websites at the click of a button. If you wish, you may customize Cosmos or use it as the basis for your creating your own starter. There are also dozens of other [Eleventy starters](https://www.11ty.dev/docs/starter/) that may better meet your specific needs or tastes. 

- - -

## Want to get started? 🙋 Deploy a new Cosmos site now!

Clone your own copy of Cosmos and deploy it to Netlify with the click of a button. You'll need an existing [Github account](https://github.com/) and a [Netlify account](https://www.netlify.com/) (which you  can create during this process if you wish):

<div class="flex width-full  justify-center">
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/broeker/cosmos"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>
</div>

### Wait, what happens if I click that button?? 🤔

* Netlify will ask for permission to connect to your Github account, and then clone this git repository to your account (you can name your repository whatever you wish)
* Once connected, Netlify robots will spin up a new site configured to use your new repository
* You can immediately deploy changes simply by pushing to your repository
* Easy as pie 

## Whoa, slow down Tex 🐌 🤠

If you'd prefer to try this out locally first, you can do that also. These are also the same steps you'll use to work locally if you chose the option above.

### Step one

Grab a copy of the code by cloning the Cosmos repository:

```
git clone https://github.com/broeker/cosmos
```

### Step two

Install the site and run and initial build command:

```
cd cosmos

npm install (only necessary the first time!)

npn run build (only necessary the first time!)
```

### Step three

Now spin up your local server to see your site!

```
npm run start
```

and you are off the races. If you like what you see you'll want to fork this into your own repository. You can easily set up a new Netlify site manually simpy by pointing it at your repository. 🏇

## Requirements

You must be running version 12 or higher of Node due to the new Tailwind release. I recommend using NVM to easily manage your Node versions if you need to switch back and forth between older versions. 

* [Node and NPM](https://nodejs.org/)
* [NVM](https://github.com/nvm-sh/nvm) (optional)

#### To find your current node version:

```
node --version
```

## Coming someday ⛅

* More advanced code blocks with syntax highlighting
* Dark mode support (via Tailwind 2.0)
* A bit more use of Alpine.js e.g. smooth scroll to #top, smoother header animation
* Better support for nested pages/hierarchical menus [See examples](https://github.com/shanerobinson/demo-11ty-prev-next)
* Lightweight search 
* Netlify serverless function support
  ✨✨✨

## Caveats/TODOs

Netlify CMS is fully integrated and working, but not documented. Coming soon!

## Credits

Recently I was seeking a way to replace a jumbled mess of Google docs, Basecamp posts, wireframes, diagrams, and other content into a simple website. Cosmos is based on my experience researching more than a dozen existing starter kits to become familiar with Eleventy and to discover any common best practices and techniques. The following were especially valuable in my learning journey:

* [Eleventy Netlify Boilerplate](https://github.com/danurbanowicz/eleventy-netlify-boilerplate) by Dan Urbanowicz
* [Eleventy-Tailwind-AlpineJS Starter](https://github.com/gregwolanski/eleventy-tailwindcss-alpinejs-starter) by Greg Wolanski
* [Eleventy  One](https://github.com/philhawksworth/eleventyone) by Phil Hacksworth

There is no one "right way" to build an Eleventy site an this is just one small attempt.

Many starter kits are much more ambitious than this one, which is designed to be as simple and lightweight as possible while still allowing for some more features in the future (Alpine.js), an easy path toward a more advance design if desired (Tailwind), and an easy way for non-technical users to create and edit content (Netlify CMS). 

- - -

<!-- My thanks to Zach Leatherman and the Eleventy community for this platform and its wide variety of applications. Onward!

* Enable Identity in Netlify site dashboard -- Site settings > Identity

* Site settings > Identity : External providers > Add providers (Github/Google) with default settings 

* Site settings > Identity : Git Gateway > Enable -->
