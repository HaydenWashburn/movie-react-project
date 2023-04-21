
<!-- Description of App -->
-This website will have very simple functionality. The user will be able to see a rendered list of movies with the ability to search for specific movies. 

--When a movie is selected the user will see the poster for the film as well as a description of the film. 

---Users will be able to create an account to add favorites as well as a watch list for future reference.

<!-- Desription of App -->

<!-- Challenges I faced working on this App -->

-This project immediately brought on many challenges. To start I spent the first two days trying to find an API that works.

--After finding a working API I quickly learned that the initial fetch URL only returned 20 items at a time so I then had to learn how to use the Promise.All() method to call multiple

fetches at once to broaden the amount of items returned from the array. (By calling multiple fetches I was able to specify the amount of pages to return from each fetch)

--- Next came the styling portion of the project which initially was not complicated but I quickly learned that the styling I implemented was not responsive at all so it had to be 

redone. I switched all styling to Materialize.css but for some reason it kept giving me one or two minor problems so I then scrapped that plan and went back to writing my own CSS. 

I kept it simple and used basic display:grid to set up columns and rows and then used media queries to make the webpage responsive when viewed on smaller screens.


<!-- Final Touches to complete App for submission -->

-Currently working on finishing up the login section of the app so the user can create an account.

--Still need to add Pagination to the home page so the user can filter through multiple pages of the movie list

