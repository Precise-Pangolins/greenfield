# Project Title

Greenfield eCommerce website

## Description
Given business a requirement docs and a mockup, this project was a a full redesign of a retail web portal. The focus of the project was to produce an MVP in approximately a two week time frame. The main focus was the Item Detail page which for us comprised of three sections: 
  - Product Details/Overview 
  - Ratings & Reviews 
  - Questions & Answers

### The overview section contains the following modules:
1. Image gallery 
2. Product information
3. Style selector
4. Add to cart

### Questions and Answers Section:
1. View questions
2. Search for a question
3. Asking a question
4. Answering a question

### Ratings and Reviews section contains:
1. Write new review
2. Reviews List
3. Sorting 
4. Rating Breakdown
5. Product Breakdown

### Quality Control and SLAs
  - Time to First Paint: 0.5 seconds
  - Time to First Meaningful Paint: 0.7 seconds
  - Time to Interactive: 1.0 seconds

## Getting Started

Git clone the following URL to a folder: https://github.com/Precise-Pangolins/greenfield.git

### Prerequisites

Requires git to retrieve the packages, a node environment with npm available to run the files. 

### Installing
Once the file has been cloned to a local folder, cd into the folder and npm install. 

If you want to be able to make use of the image upload functionality go to https://imgbb.com/ make an account. Then, retrieve the API key and replace the current inactive API key in client/components/shared/imageLoad.config.js. 
Otherwise, comment out the APIkey import and relevant variables inside of ImageUpload.jsx


If you have nodemon in your environment you can run the following npm scripts to launch the program:
* `npm run react-dev` 
* `npm run server-dev`

otherwise:
* `npm run react-dev` 
* `node server/index.js`


## Running the tests

Our project makes use of Jest, Enzyme and Puppeteer. All tests can be run using the command **`npm jest`**

### Break down into end to end tests

In development...

### And coding style tests

In development...

## Deployment

Currently the project is only set up to run on AWS EC2. 


## Built With

* [React](https://github.com/Precise-Pangolins/greenfield/graphs/contributors) - Front end framework 
* [Redux](https://redux.js.org/introduction/getting-started) - State management
* [MaterialUI](https://material-ui.com/getting-started/installation) - CSS front end framework


## Authors

 - **Brittany Yee** 
 - **Lauren Albert**
 - **Richard Horvath**

See also the list of [contributors](https://github.com/Precise-Pangolins/greenfield/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License


