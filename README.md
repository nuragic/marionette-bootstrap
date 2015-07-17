Marionette Bootstrap
====================

[![Join the chat at https://gitter.im/nuragic/marionette-bootstrap](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nuragic/marionette-bootstrap?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A modular web application architecture built on top of Marionette.

The complete stack includes:

- Backbone
- Marionette
- requirejs
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

The application architecture try to accomplish the following goals:

- lazy load modules by matching the corresponding route
- keep things loosely coupled and the responsibility of each component well defined
- keep modules interconnected with an event bus
- use precompiled templates, among others customizations

I recommend you to fork and hack into the souce code in order to fully understand this points. :)

The application itself (and also every module) needs to have the following required entities: **Router**, **Controller** and **Layout**.

The other application entities are: **Models**, **Collections** and **Views** (of any kind).

Modules
-------
An applicaton can be organized by splitting its whole funcionality into pieces. Every piece, or functional block, should be independent; to accomplish that we're using the Module class provided by Marionette. The module's configuration is centralized in the `module-config.js` file. If you want to add a module, you have to add an entry in this file and, obviously, add the coresponding folder in the src/modules folder. That's it!


Pull requests
-------------

Contributions will be very much appreciated! Here is a list with some pending TODO's if you need some inspiration:

- Production tasks
- Tests
- Not found page
- Better documentation?
- Scaffolding?

If you have any questions feel free to contact me.

Thank you!


License
-------
MIT license.
