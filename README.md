# Movie React App

## Table of Contents
- Description
- Screenshot of App
- Challenges Faced
- Things I Learned
- Links


## Description of App
- This App has a very simple purpose which is to provide a list of movies for the user. The user will be able to scroll through a general list of all movies, a list of Trending movies, and a list of suggested movies that is randomly generated each time the page is refreshed. The user can also create their own profile and save movies to a watch list.

## Screenshot of App
![screenshot of App](FinalProjectGif.gif)


## Challenges I faced working on this App

- This project immediately brought on many challenges. To start I spent the first two days trying to find an API that works.

- After finding a working API I quickly learned that the initial fetch URL only returned 20 items at a time so I then had to learn how to use the Promise.All() method to call multiple

fetches at once to broaden the amount of items returned from the array. (By calling multiple fetches I was able to specify the amount of pages to return from each fetch)

- Next came the styling portion of the project which initially was not complicated but I quickly learned that the styling I implemented was not responsive at all so it had to be 

redone. I switched all styling to Materialize.css but for some reason it kept giving me one or two minor problems so I then scrapped that plan and went back to writing my own CSS. 

I kept it simple and used basic display:grid to set up columns and rows and then used media queries to make the webpage responsive when viewed on smaller screens.

## Things I learned

- I learned much more about API's and how to manipulate them.

- I relearned how to make a web page responsive for desktop, tablet, and mobile view

- I was able to use Auth0 to create a login/logout feature for my web page. A good thing to use on the frontend for a basic app

- I learned how to include pagination

## Links






