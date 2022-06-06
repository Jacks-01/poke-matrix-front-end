# Poke-Matrix

- [Poke-Matrix](#poke-matrix)
  - [Author: Jack Stubblefield](#author-jack-stubblefield)
  - [Overview](#overview)
  - [Problem Domain](#problem-domain)
  - [Version](#version)
  - [Libraries, Frameworks, and Packages](#libraries-frameworks-and-packages)
  - [Instructions](#instructions)
  - [API Info](#api-info)
  - [Database Schemas](#database-schemas)

## Author: Jack Stubblefield

## Overview
  - Poke-Matrix is a tool to find clear and concise information about pokemon, save your favorites so you can re-vist them quickly or search a specific pokemon that you are looking for.

## Problem Domain
    - Poke Matrix exists to provide users with a simple and straightforward way to view and save pokemon data.

## Version
    - 1.0.0
      - Update Log:
        - 6/4/2022
          - Allowed users to view all pokemon 
          - Added a search bar that allows users to search for a specific pokemon
          - Allowed users to mark a pokemon as 'favorite'
          - Added a button that will display all pokemon currently marked as 'favorite'
          - Added a navigation bar that links to the `About Me` page
          - Styled the page
        - 6/5/2022
          - Added a github icon that takes users to my github profile.
          - deployed app to Heroku and Netlify
          - removed server from public directories, moved new URL to a key.
          - added more content to the about me page

## Libraries, Frameworks, and Packages

  - Axios
  - MUI (for styling)
  - React-Router DOM
  - Netlify


## Instructions

  - To favorite a pokemon, simply click the heart icon. To unfavorite, click it again.
  - To view only pokemon marked as favorite, hit the favorites button underneath the search bar.
  - To search for a specific pokemon, type the FULL name of the pokemon (not case sensitive).
  - You can interact with all of the icons in the navigation bar.

## API Info
    - Endpoints
      - /users --> a list of all users in the mongoDB
      - /pokemon ---> a list of all pokemon documents and their items


## Database Schemas
    - Pokemon
    - Users
  
  *For a more detailed look at the schemas, view the server readme.*