# My Angular Playground

## Localization

Have to kinda wrap my head around the whole `angular.json` config file and it's build settings, but I finally managed to deploy a multi locale website on Github pages 🤓

Problems encountered: using the `"localize": true` setting does build into multiple folders, but I wanted to set my default locale to build into the `root`, little did i know the `baseHref` option does jackshit about output folders and the locale's folder defaults to it's name...

So I had to build the site then copy and delete the default locale's folder and it's content...

It doesn't end there though... The links pointing to the other locales didn't work, because I forgot to set the `--baseHref=` option to the full url of my Github project's link: `https://itseramin.github.io/angular-playground/`...

🙂🙂🙂🙂🙂 It was an experience for sure...

Still searching for a usable method to use links/routes within the site with localization...

## SEO

So basically it's really damn hard to localize and do SEO together in Angular... At least for me lol

Kinda did something though that works, so that's a win I guess!
