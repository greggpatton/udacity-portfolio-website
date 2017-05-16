# Udacity Portfolio Website
How to run
----------
* Clone the repository

* Install the dependencies
```
$ npm install
```
* Run the development server:
```
$ npm run dev
```

Once the server is running, you can visit `http://localhost:8080/`
### DEPLOYING TO HEROKU
This app is set up for deployment to Heroku!

_This assumes you have already have a Heroku account and have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed_
```
$ heroku login
$ heroku create -a name-of-your-app
$ git push heroku master
$ heroku open
```