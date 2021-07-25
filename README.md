# RUTA 40

This is a project for Milestone 2 for the Code Instiute.

I want to showcase some of my favourite areas of Argentina that lie on Ruta 40 (Route 40). With more than 5,000 kilometers, it is the longest route in Argentina. From the Tropic of Capricorn to almost the Antarctic Circle, it crosses 21 National Parks.
The website would be useful for any person organising a trip.

![Responsive image](https://github.com/cnavotka/ruta40/blob/master/assets/images/responsive.png)

## Project Resubmission
This is a resubmission, the failed points are:
* LO 1 1.1 Navigation link "Home" is highlighted in all pages.
* LO 1 1.2 Upon form submission, no feedback is shown to the end user.
* LO 3 3.4 Test section can be improved and enhanced significantly in README.
* LO 5 5.1 Design (User Stories), Development (Commits), Testing and deployment documentation all present in ReadMe file, however details are sparse for the sections.


## UX

The website is aimed at users who want to travel or they are interested in finding out more about the area.

* As a user I like to find the information for a selected area easily and fast.
* The information needs to be clear and short, because that would help to decide if I want to investigate more possible place to visit.
* As a site visitor, I would like to gain an understanding of the website's purpose from the landing page.
* I would like to easily navigate through the site and find what I am looking for with an ease.
* As a site visitor, I would like to find the aesthetics of the website enjoyable and I want to use interactive elements on the website.
* As a site visitor, I would like to be able to easily find and navigate to the National Parks social media and get in touch if I might have any queries.
* As a site visitor, I want to use map to find exciting national parks in Argentina and based on the provided information decide what places to visit and I want to get information how to get to the national parks.
* Having the location and one general picture can help me to decide if I am interested in certain spot and is useful for making travel itineraries.

### Colours

The colour palette mimicks the Road Traffic signals in Argentina (three stripes in blue, white and black).
Based on that, I tried to keep the colour usage and design in a minimalistic way, to avoid distractions for the user. Thinking about the website as the Road signal, something basic but clear to get the information required in a fast way.

Here there is an example:

![Ruta 40 road signal](https://github.com/cnavotka/ruta40/blob/master/assets/images/ruta.png)

### Scope
* Create a fully responsive single page mobile first website.
* Use of APIs to show relevant information to the user.
* Interactive features that allow the user to engage and find needed information.
* An easy-to-use contact form that sends emails to the owner using EmailJS.

The user would be able to find general and specific information about different areas crossed by Ruta 40. The nature of the road means that the users are mostly people looking for adventures and lots of outdoors recreational activities.

Here you can get the wireframes for the different sections and sizes:

Home Desktop

![Home Desktop](https://github.com/cnavotka/ruta40/blob/master/assets/images/homedesktop1.png) 

Gallery Desktop

![Gallery Desktop](https://github.com/cnavotka/ruta40/blob/master/assets/images/gallerydesktop.png) 

Contact Desktop

![Contact Desktop](https://github.com/cnavotka/ruta40/blob/master/assets/images/contactdesktop.png)

Home iPad

![Home iPad](https://github.com/cnavotka/ruta40/blob/master/assets/images/homeipad.png)

Gallery iPad

![Gallery iPad](https://github.com/cnavotka/ruta40/blob/master/assets/images/galleryipad.png)

Contact iPad

![Contact iPad](https://github.com/cnavotka/ruta40/blob/master/assets/images/contactipad.png)

Home iPhone

![Home iPhone](https://github.com/cnavotka/ruta40/blob/master/assets/images/homeiphone.png)

Gallery iPhone

![Galley iPhone](https://github.com/cnavotka/ruta40/blob/master/assets/images/iphonegallery.png)

Contact iPhone

![Contact iPhone](https://github.com/cnavotka/ruta40/blob/master/assets/images/contactiphone.png)

### Project Goals

* To enable easy access to the information needed about to plan the trip.
* To show the information about the Argentina's national parks to visit around the Ruta 40.
* To provide the information on how to get there.
* The content provided is relevant and regularly updated.


## Features

### Home
#### Navigation Bar
* Featured in all three pages, the full responsive navigation bar includes links to the Home Page, Gallery and Contact page and it is identical in each page to allow easy navigation. In smaller screens, the Navigation bar is collapsible

#### Hero image
* A photograph that shows to the user one of the landscapes crossed by Ruta 40.

#### Map and Picture
* This section includes an exact location in Google Maps with a picture of the area, plus information about the place and how to get there. This will help the visitor to gain knowledge of the area before visit it.

#### Footer
* This section includes links to the relevant social media sites connected with Ruta 40. The sites are up to date with all the information from the National Parks Administration.

### Gallery
* The Gallery will provide the users with supporting images to motivate them to travel around the Ruta 40. 

### Contact
* This page will allow the user to be in touch to clarify any doubt and help it to organise the journey around Ruta 40. Every time a visitor submit the contact form, I'll get an email. The user would see a Modal that let them know the contact was succesful.

### Future Implementations

* Newsletter subscription
* Add a blog section that the users can leave comments or experiences
* Create 404 error page
* Expand content with places to stay and things to do and give users the option to rate them

## Technologies used
The technologies used are: 
* Gitpod 
* Github 
* HTML 
* CSS 
* JavaScript 
* Bootstrap 
* API Google Maps 
* JSon 
* JQuery

## Testing
* Passed JS Hint Validator without errors in the Modal and Maps file:

Modal file:

![JS Hint Modal](https://github.com/cnavotka/ruta40/blob/master/assets/images/jshint-modal.png)

Maps file:

![JS Hint Maps](https://github.com/cnavotka/ruta40/blob/master/assets/images/jshint-maps.png)

* Passed HTML Checker without errors in the Index, Gallery and Contact file:

Validator Index file:

![HTML Validator Index](https://github.com/cnavotka/ruta40/blob/master/assets/images/html-checker-index.png)

Validator Gallery file:

![HTML Validator Gallery](https://github.com/cnavotka/ruta40/blob/master/assets/images/html-checker-gallery.png)

Validator Contact file:

![HTML Validator Contact](https://github.com/cnavotka/ruta40/blob/master/assets/images/html-checker-contact.png)


* Passed CSS Validator without errors in the Index, Gallery and Contact file (note that the two errors in the screenshot belongs to Bootstrap):

Index file:

![Css Validator Index](https://github.com/cnavotka/ruta40/blob/master/assets/images/css-checker-index.png)

Gallery file:

![Css Validator Gallery](https://github.com/cnavotka/ruta40/blob/master/assets/images/css-checker-gallery.png)

Contact file:

![Css Validator Contact](https://github.com/cnavotka/ruta40/blob/master/assets/images/css-checker-contact.png)

* Lighthouse Performance:

![Lighthouse Performance](https://github.com/cnavotka/ruta40/blob/master/assets/images/lighthouse-perfomance.png) 

* The project was tested in iPhone, iPad and Macbook. 
You can see the screenshots here using Responsive Design Checker:

iPhone

![iPhone screen](https://github.com/cnavotka/ruta40/blob/master/assets/images/responsive-iphone.png)

iPad

![iPad screen](https://github.com/cnavotka/ruta40/blob/master/assets/images/responsive-ipad.png)

Macbook

![Macbook screen](https://github.com/cnavotka/ruta40/blob/master/assets/images/responsive-macbook.png)

Desktop

![Desktop screen](https://github.com/cnavotka/ruta40/blob/master/assets/images/responsive-desktop.png)

* All the social media links are working and opens in a new tab, as you can see here:

Facebook

![Facebook link](https://github.com/cnavotka/ruta40/blob/master/assets/images/test-facebook-screenshot.png)

Twitter

![Twitter link](https://github.com/cnavotka/ruta40/blob/master/assets/images/test-twitter-screenshot.png)

Instagram

![Instagram link](https://github.com/cnavotka/ruta40/blob/master/assets/images/test-instagram-screenshot.png)

* Netwotk working without issues, getting status 200

![Network](https://github.com/cnavotka/ruta40/blob/master/assets/images/network-test-console.png)

The error that appears is out of my reach to fix it, as you can see in the screenshot the answer I was given by the lead of the Slack Interactive Channel of the Code Institute:

![Answer to error](https://github.com/cnavotka/ruta40/blob/master/assets/images/error-interest-cohort.png)

* As per feedback received in the Assesment (LO1 Design, develop and implement a dinamyc Front End web application using HTML, CSS and JavaScript 1.2) I implemented a Modal that appears after the submission of the contact form:

Modal in Macbook

![Modal in Mackbook](https://github.com/cnavotka/ruta40/blob/master/assets/images/modal-test-laptop.png)

Modal in iPhone

![Modal in iPhone](https://github.com/cnavotka/ruta40/blob/master/assets/images/modal-popup-test-iphone.png)

* Test of the email I receive every time an user submit the contact form:

![Email](https://github.com/cnavotka/ruta40/blob/master/assets/images/email-test-contact-form.png)

* As per feedback received in the Assesment (LO3 Test an interactive front end web application through the development, implementation and deployment stages 3.4), the Test section is significantly improved.

## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:

1. In the GitHub repository, navigate to the settings tab

2. From the source section drop-down menu, select the Master Branch

3. Once the Master Branch has been selected, the page will automatically refreshed with a detailed ribbon display to indicate the succesful deployment.

The live link can be founded here:
<https://cnavotka.github.io/ruta40/>

### Forking the Repository
* To fork the repository please follow the below steps:

2. Go to the main page of Ruta 40 repository.

3. At the top right corner of the page click on the "Fork" button.

4. You have forked the repository.

### Local Deployment

To create a local copy of the repository please follow the below steps:

1. Login into GitHub with your account.

2. Go to the project repository.

3. Click on the "Code" button (located next to the green "Gitpod" button).

4. From the dropdown menu copy the HTTPS URL.

5. In your local IDE open the terminal.

6. Change your working directory to the location where you want the cloned project saved.

7. Type "git clone" and paste copied URL.

8. git clone //github.com/USERNAME/REPOSITORY

9. Press enter and your repo will be created.



## Bugs 

Removed empty brackets and fixed "/" in the notation that were causing issues with css working properly and found it while doing an early test.

![Bug](https://github.com/cnavotka/ruta40/blob/master/assets/images/bug.png)
![Bug1](https://github.com/cnavotka/ruta40/blob/master/assets/images/bug1.png)

Error found in the contact.html file while doing a test. The line that was causing the error was deleted.
Screenshot with the error:
![Bug3](https://github.com/cnavotka/ruta40/blob/master/assets/images/error-contact-file.png)

Error found in Console after click the button "Submit" in the Contact Form:
![Bug4](https://github.com/cnavotka/ruta40/blob/master/assets/images/error-emailjs-user.png)
I fixed remeving this line from the script of the emailjs code in the header of the Contact HTML file:
![Bug5](https://github.com/cnavotka/ruta40/blob/master/assets/images/line-error-removed.png)

Error found in the Console after I added Sweetalert2 script. I fixed removing redundant script:
![Bug6](https://github.com/cnavotka/ruta40/blob/master/assets/images/error-sweetalert-script.png)

Error found using HTML Checker in the Contact file. I fixed adding the relevants div end tags:
![Bug7](https://github.com/cnavotka/ruta40/blob/master/assets/images/html-contact-error.png)


### Feedback
* As per feedback received in the Assesment (LO1 Design, develop and implement a dinamyc Front End web application using HTML, CSS and JavaScript 1.1) I fixed the highlighted link "HOME".

Screenshot with the error:

![Navbar](https://github.com/cnavotka/ruta40/blob/master/assets/images/navbarerror.png)
I removed the class "active" of the link Home in the navbar index.html file to fix issue.

Here you can see the the Home link isn't anymore hihlighted in the Contact page:
![Navbar1](https://github.com/cnavotka/ruta40/blob/master/assets/images/navfixed.png)

* As per feedback received in the Assesment (LO1 Design, develop and implement a dinamyc Front End web application using HTML, CSS and JavaScript 1.2), you can see in the test section that I added a modal when the contact form is submitted.

* As per feedback received in the Assesment (LO3 Test an interactive front end web application through the development, implementation and deployment stages 3.4), the Test section is significantly improved.

* As per feedback received in the Assesment (LO 5 5.1 Design (User Stories), Development (Commits), Testing and deployment documentation all present in ReadMe file, however details are sparse for the sections. As you can see the User stories is expanded, the Commits made since the 14/07/2021 are more detailed and the Test section was massively improved.



## Credits
* I used Google Marker Clustering Tutorial to organise the map in the JavaScript file.
* I used code from ![GitHub](https://github.com/FruitbatM/explore-national-parks-of-japan)) for code in JavaScript file and index.html file.
* CSS tricks for the hover effect in the Gallery
* Modal in the Contact Form from W3 Schools and Walkthrough Project form the Code Institute

### Content

### Media

All the pictures were taken by myself. All the text, also, was written by myself.

### Acknowledgements

To Gurjot Singh for his review on the project and constructive feedback.

#### Project created for the Code Institute Milestone 2
#### Created by Carlos Navotka
