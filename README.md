# Jumga Project Report

### Team Abdulmateen & Samuel

You can view the live project here [View Deployed app](https://google.com/).

Technologies used:

- Django
- ReactJs
- Postgres
- Docker

The project folder directory is divided into

- client-app : contains the app for both sellers and dispatch riders.
- client-website : contains the website (landing pages for the platform) and the platform for buyers buy products posted by sellers.
- server : contains the api-backend service for the entire project

## Running this project

We used docker during development, so it should be pretty easy to run this project if you have docker installed on your local machine. If not, you would have to run each service independently.

Both processes involve cloning this repositry, so go ahead with that first.

### Running with docker

After cloning this repository,

navigate into the project directory and run the command below

First, you need to build the images

```bash
docker-compose build
```

```bash
docker-compose up
```

On your browser, open up

=> `http://localhost:3000` - To view the jumga website
=> `http://localhost:3001` - To view the jumga app


Easy yeah ?


### Running each service independently without Docker

Hmmmmm, this is how to run the app if you do not wish to run it using Docker....

- Running the client-app: Navigate into the client directory and run
  ```bash
  npm install && npm start
  ```
- Running the client-website : Navigate into the client directory and run

  ```bash
  npm install && npm start
  ```

- Running the server :
  ```bash
  python3 -m venv env # Create Virtual Environment
  source env/bin/activate # activate Virtual environment
  pip install -r requirements.txt # install all requirements
  python manage.py migrate # migrate all data in DB
  
  ```

The commands you ran should install the necessary dependencies and run each service.

On your browser, open up

=> `http://localhost:3000` - To view the jumga website
=> `http://localhost:3001` - To view the jumga app

## Problem Solving Approach

Taking a stern look into the problem statement provided by the flutterwave team,

## What we have been able to achieve.

In the space of three weeks, we have been able to build out the MVP required for
this challenge which includes the following:

- Sellers ...
<!-- What the mvp covers -->

## What we hope to achieve in the future.

Due to the fact that we had only about 3 weeks to run through this project, we were focused on shipping the MVP before implementing additional features. Unfortunately we ran out of time and we could not cover all we had in mind for this project. We had plans to add a few features to enhance the platform. Features including

-

## Team behind this project

The team that worked on this project consists of

- Tairu Abdulmateen - Backend Engineer.
- Samuel Olamide - Frontend engineer.
