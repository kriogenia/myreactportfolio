[![Build Status](https://travis-ci.org/kriogenia/sotoestevezdotric.svg?branch=master)](https://travis-ci.org/kriogenia/sotoestevezdotric)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/458e6605276d4536ac2a6935916a1233)](https://www.codacy.com/manual/kriogenia/sotoestevezdotric?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=kriogenia/sotoestevezdotric&amp;utm_campaign=Badge_Grade)

Portfolio web page template made with React. [The example is hosted here](https://kriogenia.github.io/myreactportfolio/).

The main idea behind this project is building a portfolio web easily expandable to keep it updated with any new change 
someone would want to add like a new project or skills acquired. As so, those expandable options are right now JSON 
files on configs, you can easily create or update a new language or project just making an easy change on those files. 
If you want to fork this repository to build your own web from this one I highly encourage you to. 
The way to work with those files go as follows:

### Previous considerations

Right now the project is configured to be launched on the homepage specified at the package.json, 
you should change it there and rename it, this is the way to do it on GitHub Pages like me. 
You can follow [this steps](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f) to do it. 

```bash
https://{username}.github.io/{repository}/
```

You'll probably want to edit de **/public/index.html** to change the title, icon and description of the web to your needs.

If you want to test this on your computer you will need to launch this from the root of the project:

```bash
npm start
```

To deploy it you can do it with this, the first option does it on your own server and the other one is to deploy it on 
your respective GitHub Page:

```bash
npm run build
```

```bash
npm run deploy
```

#### Localization

The localization JSONs are on **/public/locales**, there's a directory with the language code for each language 
and inside the JSONs with the collection of messages to locate in the webpage.

The languages you will offer on your webpage will be changed with the icons on the navigation bar. 
You establish those with **configs/languages.json**, you need to specify a key that identify each one, the code of 
the language, the icon path and an alt for that icon to show in case it doesn't load.

#### Navigation bar links

You can find those on **configs/navbar-options.json**, you need to specify a key that identify each one, a label route 
from the internationalization files, the icon path if it will have one and the locale path it will lead to.

#### Social media

The Biography page offers a list of social media icons at the end of the presentation, those come from 
**configs/social-media.json**. Those will need a key, an icon and an alt like the languages, you should also specify 
a link to redirect to when clicking those.

#### Portfolio

The Portfolio page shows two different types of projects, the main ones and other projects you want to show.
You insert those on **configs/portfolio.json** in the main and other collections. They need a code name and link, 
if it's a main project it also needs a thumbnail icon and the logos to feature. This is not all, the code names
will lead to the located names and descriptions in the **/public/locales/{lang}/portfolio.json**.

#### Skills

The Skills page is divided in sections with skills. You set all those on **configs/skills.json**, int list you will
the different sections with a codename and its proficiencies. At the same time those need a codename, a level out of 5
and an icon. Like the portfolio page you define its names and descriptions in  **/public/locales/{lang}/skills.json**.
(Take into account the section titles go in titles).

## Utilities

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Continuous integration served by [Travis CI](https://travis-ci.org/). Code quality analysis of [Codacy](https://codacy.com/). Website style using [Bootstrap](https://react-bootstrap.github.io/) and customized [Superhero](https://bootswatch.com/superhero/) theme. Internationalization handled with [react-i18next](https://react.i18next.com/). The icons come from [freepick](https://www.freepik.es/).