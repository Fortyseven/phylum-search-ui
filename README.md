# Phylum Search UI Recreation

This is an attempt to recreate the 'phylum search mode' UI from Star Trek IV: The Voyage Home. This is where the crew are trying to figure out what that creature is the disruptive probe is trying to contact.

Here's the scene in question: https://streamable.com/eo15q6

This is a WIP that was mainly so I could learn how to use [Svelte](https://svelte.dev/), but also because I just got a wild hair this weekend and wanted to see how far I could take it.

Uploading this unfinished version so I have it safe while I continue working on it. Hoping to get the entire sequence implemented,including audio. 😎

Enjoy!

## Credits

- Code by me.
- Graphics sourced from all over the internet, as one does.
- Amazing _"Whale Probe Data Analysis"_ audio by thatSFXGuy on YouTube without permission because this is just a fun personal project inspired BY this audio. [1]
  - I did a little bit of processing on it to fit the project, so I encourage you to check out the original.
  - _(And yeah, I probably should reach out to 'em at some point soon.)_

[1]: https://www.youtube.com/watch?v=eh7E-51doj8

----

## The original svelte template README:

*Looking for a shareable component template? Go here --> [sveltejs/component-template](https://github.com/sveltejs/component-template)*

----

# svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*

## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Deploying to the web

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name my-project
```

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
