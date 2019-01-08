# Shuffle my Friends!

Shuffle my Friends! is a JavaScript test for a Full Stack Developer position.

### What is it about?
  - It helps shuffle your invitees list so each guest receives a random Secret Friend.
  - It provides an brief invitation text.
  - Currently not able to work magic, though!

> Secret Santa (**here I call it Secret Friends, an actual Portuguese literal translation for the same game**) is a Western Christmas tradition in which members of a group or community are randomly assigned a person to whom they give a gift. The identity of the gift giver is a secret not to be revealed until after the gift is opened.

*An excerpt from Wikipedia.*

### How was it done?

* [React] - Framework for Web Client Development.
* [Node.JS] - For the API Development.
* [MongoDB] - A noSQL Database.
* [Material UI] - React Components UI.
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [Mongoose] - Elegant mongodb object modelling for Node.JS
* [Mailgun] - Easy SMTP Integration
* [Enzyme] - An airbnb library for React testing

### Installation

Shuffle my Friends requires [Node.js] and [React] to run.
If you wish to run a local version, you will need [MongoDB].

Fork or Clone this [Repo]. You will have two main folders: *backend* and *frontend*.
```sh
$ git clone https://github.com/amancioandre/k121.git
```
##### Installing the Front End - *Client*

Move to folder and install dependencies:
```sh
$ cd frontend
$ npm i
```
To run the application type.

```sh
$ npm run start
```
##### Installing the Back End - *API*

Move to folder and install dependencies:
```sh
$ cd backend
$ npm i
```
Create a .env at root level and pass this environment variables:
```sh
$ touch .env
```
MONGODB_URI: The database url, local or web.
AUTHORIZED_URL: CORS need an authorized url to enable requests from addresses outside the server environment.
MAILGUN_API_KEY: Your Mailgun API key.
MAILGUN_DOMAIN: The sandbox domain Mailgun provides.


To run the application type.

```sh
$ npm run dev
```

##### Testing

###### Client

The client tests are powered by [Enzyme]. Please refer to the ** *.test.js ** files to see the tests.
At the cliend folder, run the command npm test
```sh
$ cd frontend
$ npm test
```


### Todos

 - Write more, better, tests for React and Node.
 - Review shuffling algorithm
 - Develop means to access Events and Friends and edit them after the request is done.
 - Add media queries to provide responsiveness

License
----

MIT

  [React]: <https://reactjs.org/>
  [Node.JS]: <https://nodejs.org/en/>
  [MongoDB]: <https://www.mongodb.com/>
  [Material UI]: <https://material-ui.com/>
  [Express]: <https://expressjs.com/pt-br/>
  [Mongoose]: <https://mongoosejs.com/>
  [Repo]: <https://github.com/amancioandre/k121>
  [Mailgun]: <https://www.mailgun.com/>
  [Enzyme]: <https://airbnb.io/enzyme/>
