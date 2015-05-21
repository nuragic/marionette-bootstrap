Marionette Bootstrap
====================

An application boilerplate built with Backbone Marionette (v2.x) and Twitter Bootstrap (v3.x).

The complete stack includes:

- Backbone
- Marionette
- requirejs (AMD)
- jQuery
- lodash (+ lodash template loader)
- Gulp
- Express (+ json server)
- bower
- npm
- bootstrap


Installation
--------------

Once you've cloned the repository in your local machine, run:
````
npm install
bower install
npm run dev
````

Architecture
------------

The application has some architecture in order to:

- lazy load modules and match the corresponding action by route
- keep things loosely coupled and the responsibility of each component well defined
- keep modules interconnected with a global channel (event aggregator)
- use precompiled templates, among others customizations

Anyway, I recommend you to navigate into the souce code in order to understand what it's doing under the hoods... :)

The application itself, and also every module, has the following, required pieces: **Router**, **Controller** and **Layout**.

The other (optionals) pieces are: **Models**, **Collections** and **Views** (of any kind).

Modules
-------
An applicaton can be organized by splitting its whole funcionality into pieces. Every piece, or functional block, should be independent; to accomplish that we're using the Module class provided by Marionette. The module's configuration is centralized in the module-config.js file. If you want to add a module, you have to add an entry in this file and, obviously, add the coresponding folder in the src/modules folder. That's it!


Pull requests
-------------

Contributions will be very much appreciated! Anyway, if you need some inspiration, there are some pending TODO's:

- Enhancements on Gulpfile (build, watch, tuning...)
- Unit tests
- Functional tests
- Better documentation
- Not found page
- Scaffolding
- [your idea here]

For any questions, feel free to send me an email. Thanks!

License
-------
MIT license.
