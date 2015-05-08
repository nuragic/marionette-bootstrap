Marionette Bootstrap
====================

An application boilerplate built with Backbone Marionette (v2.x) and Twitter Bootstrap (v3.x).

The full stack includes:

- Backbone
- Marionette
- require
- jQuery
- lodash (+ lodash template loader)
- Gulp
- Express
- bower
- npm
- bootstrap


Installation
--------------

Once you've the repository in your local machine, run:

npm install (backend dependencies, see package.json)
bower install (frontend dependencies, see bower.json)
gulp (runs the app and api servers, see Gulpfile.js)


Architecture
------------

The application has some architecture to achieve a few things:

- lazy load and start marionette modules in a simple way
- use precompiled templates, among others customizations

Anyway, you should navigate into the code to understand what it's doing under the woods... :)


Modules
-------
Every part of the application (block of funcionality for ex.) can be organized by modules. To do so the app use the Marionette.Module implementation: the folder structures
The module's configuration is centralized in the module-config.js file, Every module should have a


Pull requests
-------------

Contributions will be very much appreciated! Anyway, there are some todo's if you need some inspiration:

- Unit test
- Functional tests
- Enhancements on Gulpfile (build, watch, optimization...)
- Not found page
- Scaffolding
- [your item here]


License
-------
MIT license.
