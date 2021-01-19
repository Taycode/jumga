# Jumga Project Report

### Team Abdulmateen & Samuel

You can view the live project here [View Deployed app](https://jumga-web.netlify.app/).

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
  python manage.py runserver 8000 # runs the server
  ```

The commands you ran should install the necessary dependencies and run each service.

On your browser, open up

- `http://localhost:3000` - To view the jumga website
- `http://localhost:3001` - To view the jumga app

## Problem Solving Approach

Taking a stern look into the problem statement provided by the flutterwave team,

We were told to build an application where a seller can create stores, and each stores are assigned a rider.

Sellers can also create products for each stores.

The sellers should also be able to receive payment from UK, Kenya, Ghana and Nigeria.

## What we have been able to achieve.

In the space of three weeks, we have been able to build out the MVP required for
this challenge which includes the following:

- Sellers App

We have a section for sellers where they can create stores, create products, check orders that have been made and see how much they have made

- Rider App

We have a section for Riders too where they register on the platform, see the list of deliveries they have been assigned.

One special feature on this rider app is the ability to update the delivery status of a delivery [in shop, enroute destination, delivered]

They can also check how much they have made so far on their dashboard.

- Website

This is the part that shows the list of the products on the app, we return products based on a users location (we used IP address to determine the location of a user)

A user in Nigeria can only view and purchase products in Nigeria, same as Ghana and other countries.

## How the application works

First, we need Riders on the app so we can automatically assign riders to a store when a store is created.

`http://localhost:3000/rider` || `https://jumga-web.netlify.app/rider` is the url to get started on the rider app, you register as a rider here and login.

After we have a rider on the app, we can now register sellers on the app

`http://localhost:3000/seller` || `https://jumga-web.netlify.app/seller` is the url to get started as a seller, when a seller is registered, he can create a store, add products to a store and manage products he adds to each store.

A store is automatically assigned a rider (as long as a rider from the seller's country exists on the app).

The Identity of the rider is not known to the seller on the app, we decide to hold full responsibility over the riders actions

After a store has been created, a seller can now add products to those stores, the section for creating products
collects the name of the product, price, description and images. A product cant be added to the application without adding the minimum of 2 images

Now we have products on the app, buyers can now visit the website (products page) to buy products

on the products app, you can only view products that exist in your country which we identified using an IP finder.

you can add products to cart and checkout, you would need to fill in details needed to collect payment for your order (we are using flutterwave V3 sandbox so you need to use test cards... These test cards have been pre-filled in the payments section for easy testing.)

when payment is complete, the app transfers the allocated commissions to the riders and sellers accounts in which they filled immediately after registering on the app

## how the payment is allocated

Delivery Fee is 7.5 percent of Product cost

that means if a product is 1000 dollars, the delivery fee is 75 dollars
so he is gonna pay the total of 1075 dollars

Seller commission on sale is 97.5 percent of the product cost

## What we hope to achieve in the future.

Due to the fact that we had only about 3 weeks to run through this project, we were focused on shipping the MVP before implementing additional features. Unfortunately we ran out of time and we could not cover all we had in mind for this project. We had plans to add a few features to enhance the platform. Features including

- Product tracking by buyers on the platform
- Products/ store ratings to help other buyers
- Search and filter features for easily navigating through numerous products
-

## Team behind this project

The team that worked on this project consists of

- Tairu Abdulmateen - Backend Engineer.
- Samuel Olamide - Frontend engineer.
