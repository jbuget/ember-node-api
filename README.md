# Experiment of using Fortune.js as a back-end for Ember Data

The goal of this project if to try Fortune.js in order to make a _productive_ API for an Ember.js / Ember Data front-end application.

> Fortune.js is a non-native graph database abstraction layer for Node.js and web browsers. 

By default, Fortune.js is set upfront to a single or multiple database(s).

In our case, we will use only one DB - PostgreSQL - with the dependency `fortune-postgres`.

Fortune.js also offers an interesting mechanism of _plugins_ to improve its integration in other parts: networking, serialization, adapters, etc.

In our case, we want to have a Web server that automatically exposes routes based on defined record types. So we use `fortune-http`.

Moreover, we want the requests & responses to follow JSON:API format. Lucky us, there is another cool plugin we can use: `fortune-json-api`.


## Prerequesites

* Node (v8.9+)
* npm (v5.6+)
* Docker (v1.8+)  
* a running container using Docker PostgreSQL image
 
```bash
docker run --rm -e POSTGRES_DB=fortune -dit -p 5432:5432 postgres
```
 
## Getting Started

```bash
$ git clone git@github.com:jbuget/test-fortunejs.git
$ cd test-fortunejs
$ npm install
$ npm start
$ curl http://localhost:3000
```

## Adding a resource

The adding of a resource follow 3 steps:

1. Define the record type in `./lib/types` directory and index 
2. (optionnal) Define the hooks in `./lib/hooks` directory and index
3. (optionnal) Add the DB table name mapping in the Fortune instance, `./store.js` 

## ⚠ Important!

**According to the JSON:API specs, all requests must have define the header `Content-Type` with value `application/vnd.api+json`.** 

## Links

* [Fortune.js](http://fortune.js.org)
* [fortune-http](https://github.com/fortunejs/fortune-http)
* [fortune-postgres](https://github.com/fortunejs/fortune-postgres)
* [fortune-json-api](https://github.com/fortunejs/fortune-json-api)
* [JSON:API specs](https://jsonapi.org/)