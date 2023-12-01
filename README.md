# FED_S10258457_YeoJinRong_Assg1_Website

## User Audience Intent and Purpose
This website is orientated towards **international** fans of the Japanese Indie Rock band 'Yorushika' 
The intent is to broaden its fanbase in the international community as the barriers of entry to J-Rock bands is high, due to the language barriers and differences in cultural norms.

 
## Design Process
 
Provide us insights about your design process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.
This website focuses on having a clean, modernised and sleek design, to deliver relevant information succinctly and efficiently to fans.
The band wants to acquire new international fans as well as establishing loyalty amongst its existing overseas fanbase, in order to not solely be reliant on its domestic Japanese fanbase

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:
- As a fan, I want to be able to view the band's album and social handles easily, to learn more about the band
- Additionally, they want to be able to view the music platforms that the band is predominantly featured on so that fans are able to stay up to date on the latest tracks.
- Furthermore, they want to be able to purchase merchandise seamlessly and easily, so that they are able to support the band.
- Lastly, fans need to be able to view information on the Live Tour 23/24, so that they have relevant information to decide on attending.

The website is in English, which is the most popular medium of commuication across the world.
This provides the band an opportunity to bridge the cultural divide between itself and international fans

### Wireframe:
https://xd.adobe.com/view/42384bc7-f8fd-4d1d-963e-4b3841b46775-176b/

## Features

1) Clean and modernised homepage that broadcasts what shows are upcoming
2) "About Us" section that briefly describes the band and links to music platforms
3) Online Merchandise Shop with functional cart, with features of adding items to cart, removing items from cart and "buy now" button
4) "LIVE" Page that showcases the google map location of respective venues for the live tour 

## Technologies Used
Visual Studio Code utilised to compile code
https://code.visualstudio.com/
Utilises HTML5, CSS and Javascript
HTML5 - https://developer.mozilla.org/en-US/docs/Glossary/HTML5
Utilised for constructing website in html
CSS - https://developer.mozilla.org/en-US/docs/Web/CSS
Utilised to provide styling for HTML 
JavaScript - https://developer.mozilla.org/en-US/docs/Web/JavaScript
Utilised to construct navbar menu and shopping cart
FormBold - https://formbold.com/
Used for form submissions
## Testing
### 1. Navbar
i) Check mobile responsiveness of navbar
	a. Mobile view, navbar changes to use a side menu
	b. Check hover functionality for the navbar options
	c. Check for style changes when in mobile format
ii) Check all options link properly to other html files

### 2. Home Page
i) Check social links:
	a. Click on all social media icons and check that they open respective pages properly
	b. Check that all hover functionality works (change to blue colour)
ii) Check spotify links:
	a. Click on all spotify buttons and check that they open respective pages properly
	b. Check that all hover functionaility works with transitions
iii) Check upcoming shows table:
	a. Check all the formatting is correct
	b. For the live tour 2023, check the the "click for more details" button works to link to live.html
iv) Test Booking Form: 
    	a. Go to the "Home" page
    	b. Try to submit the empty form and verify that an error message about the required fields appears
   	c. Try to submit the form with an invalid email address and verify that a relevant error message appears
    	d. Try to submit the form with all inputs valid and verify that a success message appears.
v) Check footer links:
	a. Check all icons link to respective pages properly, opening new page
	b. Check that all justified and centered
vi) Check mobile responsiveness:
	a. For about page, check that it flexes vertically
	b. For Discography section flex properly, uses width 100%
	c. Upcoming shows table converts into show boxes in mobile format

### 3. About Page
i) Check about me section:
	a. Check all social media links (same as previous ones)
	b. Check that gif is properly displayed occupying 100% width, 50% of div
	c. Check the text is centered and aligned properly
ii) Check album section:
	a. Check all the individual album cards are styled properly
	b. Ensure that all album cards link to respective albums on spotify
	c. Check that it is all aligned properly in a flex
iii) Check platforms section:
	a. Check all platform card whether the "Listen Now" button works
	b. Check all platform cards are aligned properly
iv) Check mobile responsiveness:
	a. Check that about me section flexes column-wise when in mobile view
	b. Album sections will flex, being in a column of 2 then column of 1 for smaller screen sizes
	c. Platform sections will combine and be viewed vertically

### 4. Shop Page
i) Check product cards:
	a. Check product boxes have a border when hovered over, with transition
	b. Check that each product card is displayed correctly
	c. Check that the cart button functionaility works
ii) Check cart functionality:
	a. Check functionaility to add items
	b. Check functionaility to remove items
	c. Check functionaility to change quantity of items
	d. Check functionaility to buy items by clicking buy now
	e. Check functionaility of cart icon to open cart
iii) Check mobile responsiveness:
	a. Check cart will be a submenu inside nav bar
	b. Check that product cards flex properly and reduces the number of columns based on size

### 5. About Page
i) Check Band Line Up section:
	a. Check icons have proper styling
	b. Check band lineup is aligned and centered
	c. Check that google map embeds are working
	d. Check that venue information sections are aligned properly
ii) Check mobile responsiveness:
	a. Check that in mobile view, the sections shrink but text remains at 100% width in boxes

Bugs Encountered:
i) Javascript not working and calculating properly, took time to refine the code
ii) Some mobile responsiveness media queries do not work if using min-width, had to employ some max-width parameters to coincide
iii) Some difficulty changing gradient of icons, had to use an interesting method using background to change the gradient
iv) Contact.js button is not working, despite the code being sound and logical. Error might be linked to browser cache or email settings,
possible that javascript can only open a prompt to email instead of sending it remotely
v) Intialising multiple javascript files into a single html file is not possible, unless an additional javascript file wrapping all the functions in a single function, then using window.onload = function;
This was an issue when trying to implement cart.js and navbar.js

## Credits

### Content
- The text for band information was copied from the https://en.wikipedia.org/wiki/Yorushika
- The text for band line up for live concert and venues are from https://yorushika.com/feature/livetour_2023

### Media
- The photos used in this site were obtained from:
https://media.tenor.com/ukcB7ii25V0AAAAC/yorushika-yorushika-logo.gif
https://icons8.com/icons/set/checkmark
https://icons8.com/icon/6483/cross
https://yorushika.fandom.com/wiki/Magic_Lantern
https://yorushika.fandom.com/wiki/Plagiarism_(Album)
https://yorushika.fandom.com/wiki/Elma_(Album)
https://yorushika.fandom.com/wiki/Moonlight_(Album)
https://yorushika.fandom.com/wiki/Underdog_(EP)
https://static.wikia.nocookie.net/yorushika/images/a/a5/YorushikaWikiLogo.png/revision/latest?cb=20220304180740
https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fdg9tis5l4v751.png
https://store.plusmember.jp/yorushika/ (All product images taken directly from store)
https://boxicons.com/
https://fontawesome.com/


### Acknowledgements

- I received inspiration for this project from:
https://youtu.be/cT_ZYrS3tKc?si=9m7flReWfmaf952_
https://youtu.be/dX8396ZmSPk?si=kqqPcCmlX3nVaTbC
https://youtu.be/YeFzkC2awTM?si=lS1PKD6n-2DKk-L6
