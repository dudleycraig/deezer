# deezer react/redux application 
[Demo](https://functional.org.za)

![dynamic screenshot](https://raw.githubusercontent.com/dudleycraig/deezer/master/screencast.gif)

## installation

### clone repository

> git clone https://github.com/dudleycraig/deezer.git deezer

### update config to reflect your environment

> vim webpack.config.js
change key 'host:' to your dev servers' domain
```javascript
module.exports = {  
   ...  
   devServer: {  
      ...  
      host:'*your-servers-domain.com*'  
   }  
}  
``` 

### pull node modules

> npm install

### run server in development mode

> sudo npm start

## app structure
package.json         | application package requirements  
webpack.config.js    | build environment configuration  
.babelrc             | versions of javascript compiled and supported  
.eslintignore        | files for the linter to ignore  
.eslintrc.json       | configuration for both the editor(vim) and environment  
.tern-project        | vim, eslint and syntastic integration  
.vimrc               | editor configurations  
dist/                | output of built files  
 |- index.js         | packaged application archive  
public/              | hosting environment  
 |- index.html       | application entry point  
 |- images           | application resource images  
vendor/              | 3rd party libraries not included within node repositories  
 |- DZ.js            | deezer 3rd party client API  
src/                 | javascript and sass source files  
 |- actions/         | redux action creators and business logic  
 |- components/      | react components  
 |- containers/      | react containers  
 |- reducers/        | redux state mappings  
 |- styles/          | sass (scss) style source  
 |- types/           | redux event types  
 |- index.js         | react application entry point  
 |- store.js         | redux state handler configuration  


## workflow

console based, event driven

## issues

* validation required for search input field
* application messages only reflect autocomplete. albums and tracks messages need to be included
* albums display requires a horizontal display, currently the overflow albums are hidden
* fetched album result sets are currently parsed three times. to extract albums from results, to filter unique albums, and to reduce albums to a hash object. this can be achieved with a single parse via the reducer
* autocomplete, albums, and tracks panels need to be destroyed on subsequent search inputs
* too many unused libraries within package.js
* a webpack production flow needs to be added
 
