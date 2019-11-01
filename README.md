# Project Title

Greenfield Hack Reactor Front End Capstone

## Getting Started

Git clone the following URL to a folder: https://github.com/Precise-Pangolins/greenfield.git

### Prerequisites

Requires git to retrieve the packages, a node environment with npm available to run the files. 

### Installing
Once the file has been cloned to a local folder, cd into the folder and npm install. 

If you want to be able to make use of the image upload functionality go to https://imgbb.com/ make an account. Then, retrieve the API key and replace the current inactive API key in client/components/shared/imageLoad.config.js. 
Otherwise, comment out the APIkey import and relevant variables inside of ImageUpload.jsx


If you have nodemon in your environment you can run the following npm scripts to launch the program:
npm run react-dev & server-dev

otherwise:
**npm run react-dev**
**node server/index.js**


## Running the tests

Our project makes use of Jest, enzyme and pupeteer. All tests can be run using the command **npm jest**

### Break down into end to end tests

In development...

### And coding style tests

In development...

## Deployment

Currently the project is only set up to run on AWS EC2. 


## Built With

* [React](https://github.com/Precise-Pangolins/greenfield/graphs/contributors) - Front end framework 
* [Redux](https://redux.js.org/introduction/getting-started) - State management
* [MaterialUI] (https://material-ui.com/getting-started/installation/) - CSS front end framework


## Authors

**Brittany Yee** 
**Lauren Albert**
**Richard Horvath**

See also the list of [contributors](https://github.com/Precise-Pangolins/greenfield/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License


