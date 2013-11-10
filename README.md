source
======

This is a YEOMAN project.
Please check out and install. http://yeoman.io/gettingstarted.html .

1. Instal NPM
=============
Npm (node.js) - http://nodejs.org				#follow instructions to install NPM on your computer


2. Install Requirements
=======================
npm install -g yo								#installs Yo
npm install -g grunt-cli bower					#installs Grunt & Bower
npm install -g generator-angular				#installs the angular generator, which we use here


3. Setting up the project
=========================
npm install										#install the the npm dependencies which the project is using, such as grunt dependencies
bower install									#install all the bower dependencies which the project is using


4. Develop!
====================
grunt server									#run a dev server which live reload your webpage when files are edited
grunt build										#creates a build of the project


A. Usefull Commands
================
yo angular:controller myController				#create new controller
yo angular:directive myDirective				#create new directive
yo angular:filter myFilter						#create new filter
yo angular:service myService					#create new service