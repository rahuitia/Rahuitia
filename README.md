# Rāhui

# Final Group Project

Rāhui

1. (verb) (-ngia,-tia) to put in place a temporary ritual prohibition, closed season, ban, reserve - traditionally a rāhui was placed on an area, resource or stretch of water as a conservation measure or as a means of social and political control for a variety of reasons which can be grouped into three main categories: pollution by tapu, conservation and politics.

This App will attempt to provide an API resource that allows Iwi to geo-locate and display knowledge and other recommendations related to Whenua (land) such as Rāhui. 

This is an app to display Rāhui and other concerns in cartographic format.

The idea of the App is to be able to display current Rāhui and to be able to Tautoko or support certain Rāhui. A user can sign up by listing their iwi affiliation and biographical information. A registered user can then create and locate a rāhui..

## User Stories

### MVP

As a user:
  * I want to find out more information about the custom of rāhui.
  * I want to find out what locations or areas have rāhui placed on them.
  * I want to see a map of the location of a particular rāhui.
  * I want to find out about the above rāhui, including information on who placed it, their name, iwi, hapū affiliations, and a description of the rāhui (why was it placed etc?)
  * I want to acknowledge or offer my tautoko for a particular rāhui and post to the page how myself or a group I represent will respect this rāhui.
  * I want to create an account and register on behalf of my iwi and authorised person, in order to add a rāhui to the app.
  * I want to select an area on a map when I add a rāhui.
  * I want to post my contact details so if anyone would like to find out further information they can contact me.
  * I want to be able to read the sites content in Te Reo Māori.

### Stretch
  * I want to see a progress bar when I register an account.
  * I want to view news articles or other related resources to a particular rāhui.
  * I want to draw an outline of the rāhui on a map.
  * I want to select language preference.
  * I want to search a location using a search bar.

  ---

## Views (Client Side)
  | name | purpose |
  | --- | --- |
  | Login | View for user to enter their login credentials |
  | Register | View for user to sign up for the App |
  | CreateRāhui | View for user to geo-locate and describe Rāhui - this will be a 'stepped' form |
  | Rāhui Map | View to display current Rāhui in map form |
  | Rāhui Map | View to display current Rāhui in map form | 
  | Landing | A landing page that describes what a Rāhui is |
  | About | A detailed about page that describes what the app is, who can and how to use it |
  

## DB (Server Side)
  There should be five tables for the MVP

### Users
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer | Primary |
  | user_name | String (unique)|
  | first_name | String |
  | middle_name | String |
  | last_name | String |
  | email | String |
  | password_hash | string |

### Rāhui
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer | Primary |
  | user_id | integer |
  | description | string |
  | korero | string |
  | date_placed | string |
  | date_lifted | string |
  | location | array |

### Tautoko

  Many Users can tautoko many rahui

 | Column Name | Data Type |
 | --- | --- |
 | id | integer |
 | user_id | Integer |
 | rahui_id | Integer |
 
 ### Iwi

  Many Users can tautoko many rahui

 | Column Name | Data Type |
 | --- | --- |
 | id | integer |
 | user_id | integer |
 | rahui | string |
 
 ---
 
  ### Hapu

  Many Users can tautoko many rahui

 | Column Name | Data Type |
 | --- | --- |
 | id | integer |
 | user_id | integer |
 | hapu | string |
 
 ---

## Setup

Run the following commands in your terminal:

```sh
npm install
npx knex migrate:latest
npx knex seed:run
mv .env.example .env
```

To run in development:
```sh
npm run dev
```

To run in production:
```sh
npm start
```


## Heroku!!!

### Creating your app

Create your app with `heroku create [name]`

You can check that this was successful by running `heroku apps` to view a list of your apps


### Adding postgres
Rāhui
Login

Add postgresql (hobby dev) to your app at `https://dashboard.heroku.com/apps/[APP NAME HERE]/resources`

Check that pg has been added by running `heroku addons` to ensure the postgresql db is on your app


### Deploying!

There are several npm scripts created that will be useful for deploying your app to heroku easily.

To push your local master branch to your heroku app:
```sh
npm run h:deploy
```

Run heroku migrations:
```sh
npm run h:migrate
```

Run heroku seeds:
```sh
npm run h:seed
```

If ever you need to rollback, you can also:
```sh
npm run h:rollback
```


### Ta-Da!
Your app should be deployed!
