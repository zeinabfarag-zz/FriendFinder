# FriendFinder

## Overview

Friend Finder application is meant to simulate a simple dating app. The application is implemented using a Node.js and Express server on the back end and the Bootstrap CSS framework on the front end.

## Description

Friend Finder implements friend matching based on the user's responses to a ten question survey. The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). When the survey is submitted, an existing user record closest to the current user's responses is found and returned. The closest set of user responses is defined as the set with the lowest absolute difference for all ten questions combined.

## Installation

To run the application locally, first clone the repository:

	git clone https://github.com/zeinabfarag/FriendFinder.git
	cd FriendFinder
Then, install the depencies and run the server:
```
npm install
node server
```
Now, open the local application on port 3000 at the URL: `http://localhost:3000/`.

## Technologies used

* Node.js
* Express.js
* jQuery
* Bootstrap

## Website

https://friendnodefinder.herokuapp.com/
