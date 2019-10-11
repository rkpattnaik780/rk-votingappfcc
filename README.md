# Voix


Voix is a voting app where people can create an account to create polls and cast vote to existing polls. It is built up on MEAN stack .

# Installation

    # Clone the repo 
    git clone https://github.com/rkpattnaik780/rk-votingappfcc.git

    # Change into the local directory
    cd rk-votingappfcc

    # Install the dependencies
    npm install

# Local setup

1. In the file <b>index.js</b> , change the email ID and password for the node mailer .
2. In the file <b>routes/mongourl.js</b> , set the path to local port of mongoDB.
3. Create a database <b>votingapp</b> in mongo shell.


    # Run it locally
    npm start
4. Visit  http://localhost:3000 in your browser.

# Features

* A person can register by providing an available username and valid email ID.
* A user can login to his account using the username and password provided.
* Upon forgetting password , he can get it mailed to his registered email ID.
* A user can create his own poll and caste votes to existing.
* An unregistered user is allowed to see the [live polls](https://infinite-chamber-50445.herokuapp.com/htmlpages/polls.html) but not to vote.
* Supported in large screens and small screens alike.

# Technologies Used :
* HTML5
* CSS3
* Bootstrap3
* Ajax
* AngularJS
* NodeJS
* Express
* MongoDB

# Deploying tools used 

The app is live at : https://infinite-chamber-50445.herokuapp.com/

### Platform used 
[Heroku CLI](https://dashboard.heroku.com/)

### Storage used
[mLab](https://mlab.com/)

# Author :

[Ramakrishna Pattnaik](https://github.com/rkpattnaik780)

