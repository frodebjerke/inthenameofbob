In the name of Bob
==================

About
------------
In the Name of Bob is a web application to help people remember the names of people, it is going to be based on Memory techniques by Oddbjørn By.

Project structure
-------------
Based on suggestion from the [Unoficial Meteor FAQ](https://github.com/oortcloud/unofficial-meteor-faq#where-should-i-put-my-files).

```bash
lib/                       # <- any common code for client/server. 
lib/environment.js         # <- general configuration
lib/methods.js             # <- Meteor.method definitions
lib/external/              # <- common code from someone else
## Note that js files in lib folders are loaded before other js files.

collections/               # <- definitions of collections and methods on them (could be models/)

client/lib                 # <- client specific libraries (also loaded first)
client/lib/environment.js  # <- configuration of any client side packages
client/lib/helpers/        # <- any helpers (handlebars or otherwise) that are used often in view files
client/lib/strings/        # <- static string resources

client/application.js      # <- basic Meteor.startup code.
client/subscriptions.js    # <- subscriptions
client/routes.js           # <- Backbone router, with routes
client/session.js          # <- All Session values should have a Session.setDefault here.
client/index.html          # <- toplevel html
client/index.js            # <- and its JS
client/views/<type>/       # <- if you find you have a lot of views of the same object type
client/stylesheets/        # <- css / styl / less files

server/publications.js     # <- Meteor.publish definitions
server/lib/environment.js  # <- configuration of server side packages

public/                    # <- static files, such as images, that are served directly.

tests/                     # <- unit test files (won't be loaded on client or server)
```
