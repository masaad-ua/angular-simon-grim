# AngularSimonGrimm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# How to Build a Native App from Angular Projects with Capacitor (https://youtu.be/V2Wn2JROUEo)
- npm install @capacitor/camera (12.05) && npx cap sync
- ng serve -o --host 0.0.0.0
  + ipconfig (Windows) //ipconfig getifaddr en0 (ios) ==> get ip for capasitor.config.json ----> server: {
           url: 'http://192.168.88.34:4200',
           cleartext: true
    } (21.21)

# How to AUTOMATICALLY configure your Capacitor project (https://youtu.be/kYFZkmJ6rAc)
 - npx tsc configure/configure.ts && node configure/configure.js
 - npx cap-config run client-a.yml -y (11.10) // https://github.com/ionic-team/capacitor-configure/blob/main/examples/basic.yml
 - 


