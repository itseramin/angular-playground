# Angular Playground

## Localization

Have to kinda wrap my head around the whole `angular.json` config file and it's build settings, but I finally managed to deploy a multi-locale website on GitHub Pages 🤓

Problems encountered: using the `"localize": true` setting does build into multiple folders, but I wanted to set my default locale to build into `root`, little did i know the `baseHref` option does jackshit about output folders and the locale's folder defaults to it's name...

So I had to build the site then copy and delete the default locale's folder and it's content... 🥰

Routing with localization is tricky enough, now try that on GitHub Pages 😏 yeah it doesn't really work well changing languages without direct links...

🙂🙂🙂🙂🙂 It was an experience for sure...

## SEO

Not sure why my wildcard routed 404 page doesn't get translated 🤔 but it's probably a problem related to GitHub Pages...

Kinda did something that works though, so that's a win I guess!
