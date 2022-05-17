# image-processing-Udacity
an simple endpoint resize your image and save the new one on your machine

## Available Scripts

In the project directory, run this command to install dependencies:
### `npm install`

to build the typescript file run:
### `npm run build`

or you can simply run this command to buid then start the nodemone server:

### `npm start`

and for testing run this: 

### `npm run test`

# How to get the project runinig on your local machine
 1. clone the repo to your machine
 2. run `npm run test` and make sure all the tests pass
 3. run `npm start` which run the build command `npm run build` then start the nodemon server
 4. ope your browser and go to [http://localhost:3000/images](http://localhost:3000/images)
 5. then add your query variables the url should be something like this `http://localhost:3000/images?filename=<yourfilename(without the extension)>&width=<wanted widtth>&length=<wanted length>`
 6. the browser will show you the image with the new dimesions and you can find it on the root directory of the app under thumbs directory


Notes:- 
  - You have to make sure there is an image with name `test.jpg` in assets directory to make sure the endpoint test pass
  - all images should be with the extension `.jpg`

