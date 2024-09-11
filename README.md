This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Express-o

The title is a play on the word _espresso_, which is commonly mispronounced as _ex-press-o_, and embodies what I hope this app will achieve: an _express_ path into the world of coffee.

## Overview

This app is to help users learn about different types of coffee varieties and coffee drinks. Users can learn about different varieties and types of coffee, and take a quiz to receive a recommendation based on their preferences.

### Problem Space

When coffee is brought up in a casual conversation, most people don't even know that there are different roast levels (i.e. light, medium, dark, etc.). They know that there are different brands of coffee, and some may know about different roast levels, but that is usually the limit of their knowledge. As an avid coffee lover, I want to create an app that is easy to use and provides guidance for people who have no knowledge about coffee, and would like to explore the wonderful world of coffee. When I first started my coffee journey, there weren't any sites that had the functionality that I wanted, and I learned most of what I know from watching hours of YouTube videos. I hope Express-o is able to make this hobby more accessible to those who may not want to go down the rabbit hole, but want to learn just enough to appreciate coffee at a deeper level.

### User Profile

Anyone with an interest in coffee can use the app. They will be able to access the app on any device via web browser.

### Features

- Users can browse through the app to learn about coffee, such as origins, varieties, flavours, etc.
- Quiz to determine their preferences for coffee (i.e. nutty vs fruity, sour vs rich, etc.), where at the end they are given a recommendation for a type of coffee
- Users can create a profile to enhance their overall experience (currently unavailable)
- Users can interact with each other in the forum (currently unavailable)

## Installation

Run `npm install` to install all the required packages.

Once all the `node_modules` have been installed, run `npm run dev` to start the local server.

## Implementation

### Tech Stack

- Next.js
- Typescript
- Tailwind CSS
- Daisy UI
- PostgreSQL

### APIs

No external APIs are used.

### Sitemap

Home Page

- App name, logo, and navigation

About Express-o Page

- About Express-o, overview, features

About Coffee Page

- What is coffee, roast levels, differences in roasts

Beans Page

- General information about different coffee types
- One card for each type/variety of coffee
- Clicking on a card will navigate to detailed information about that coffee

Quiz Page

- Users answer each question based on their personal preferences
- Users will be shown a recommendation at the end, where they can click a button to learn more

## Data

Coffee table:

- coffee_id (primary key)
- coffee_type
- history
- region
- countries
- acidity
- flavour
- roast_profile

Quiz Questions table:

- question_id (primary key)
- question

Quiz Response table: each response is associated with a quiz question

- response_id (primary key)
- question_id (foreign key)
- option
- coffee_ids

### Endpoints

API calls are made to the database using SQL queries.

Sample request to return an array of all the coffees of coffee_type:

```
const data = await sql<Coffee>`SELECT * FROM coffee WHERE coffee_type = ${coffeeType}`;
return data.rows;
```

Sample response:

```
[
  {
    coffee_id: 9,
    coffee_type: 'Liberica',
    region: 'West Africa, Central Africa',
    history: 'Liberica coffee is native to West and Central Africa and was introduced to Southeast Asia during the colonial period. It is a lesser-known species of coffee, but is valued for its unique flavour profile.',
    countries: 'Liberia, Sierra Leone',
    acidity: 'moderate',
    flavour: 'fruity, floral, smoky, woody',
    roast_profile: 'medium to dark'
  }
]
```
