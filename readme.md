From The Odin Project's [curriculum](https://www.theodinproject.com/courses/javascript/lessons/restaurant-page)

# Instructions
- Create a bare-bones home page for a restaurant, include an image, headline, and some copy about the restaurant
- Remove these elements from HTML and leave only the <div id='content'>
- Add all these elements only using JavaScript by appending each new element to the div#content
- Write this code inside it's own module and then import and call it inside of index.js
- Next set-up your restaurant to use tabbed-browsing to access the contact and menu pages
- Put the contents of each 'tab' in it's own module. Each module will export a function that creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM
- Write the tab-switching logic inside of index.js -> you should have event listeners for each tab that wipes out the current contents and then runs the correct 'tab module' to populate it again
- Deploy as a sub folder on github pages -> https://gist.github.com/cobyism/4730490