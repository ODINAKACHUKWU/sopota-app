# Sopota

[![License Badge](https://img.shields.io/badge/license-ISC-9cf.svg)](https://opensource.org/licenses/MIT)
[![License Badge](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Code Quality](https://img.shields.io/badge/Protected_by-Hound-a873d1.svg)](https://houndci.com)

This application is a customer support system that allows customers to create support requests that are assigned to available support agents for resolution. The product is built with Ruby on Rails and ReactJs.
<br />
<br />

<img width="1440" alt="Sopota Homepage" src="./client/src/assets/images/home.png">

# Table of Contents

- [Getting Started](#Getting-Started "Goto Getting-Started")
- [Tasks yet to be completed](#Tasks-yet-to-be-completed "Tasks-yet-to-be-completed")
- [Questions](#Questions "Goto Questions")

## Background

Sopota automatically assigns available support agents to requests when they are created. The application would allow:

#### A Customer:

1. On the web portal, to create an account as well as sign in to the application.

2. To create a support request based on the available options on the dashboard. Options based on personal assumptions are: `I have an issue`, `I need a guide`, and `I need a product`.

3. To comment on the requests (only after an agent has commented on the request first).

4. To view a list of all requests created.

5. To view the details and status of a request.

6. To close a request when satisfied with the resolution by the agent.

#### An Agent:

1. On the web portal, to view all the requests assigned to him/her.

2. To view a list of all requests assigned to him/her.

3. To view the details and status of a request.

4. To comment on a requests before the customer can continue a follow up conversation.

5. To close a request after a customer is satisfied with the requests resolution (based on feedback).

6. To export a report of all closed requests in the last one month (in CSV format).

## Getting Started

First of all, you need to clone this repository on your local machine.

```sh
git clone git@github.com:ODINAKACHUKWU/sopota-app.git
```

#### Prerequisites

Then you will need to install a few packages before getting started with development on the application. Ensure these packages are installed on your machine.

- Ruby **2.5.1**
- Rails **5.2.4**
- MySQL server
- [NodeJS and NPM](https://nodejs.org/en/)
- [Foreman](https://github.com/ddollar/foreman)

#### Database setup

1. Switch into the newly-cloned directory `cd sopota-app`

2. Create a `.env` file in the root directory.

3. Provide your MySQL database credentials in the `.env` file for the following keys in the `.env.sample` file.

4. Run the command: `bundle install` to install all the necessary gems for the backend.

5. Run the command: `rails db:create` to create the database.

6. Run the command: `rails db:migrate` to create all migrations.

7. Run the command: `rake db:seed` to load all default users into the database.

#### NOTE:

There are 12 default users in the database. The first two users can be used to test customer features. While the rest users (3 -12) can be used to test agent features. See the `./db/seeds.rb` file for all user credentials to log in. You can as well create your own account to use for testing the customer features. And then, after creating a ticket and an agent is assigned to the ticket, sign in with the agents credentials for further testing the agent - customer interactions.

#### How to test on development

1. Switch into the client directory `cd client`

2. Run `npm install` to install all the necessary pacakges for the frontend.

3. Switch into the root directory, sopota-app: `cd ..`

4. Start the servers for both frontend and backend using the command `foreman start -p 3000`

5. Visit the site on your browser which is automatically opened on `localhost:3000`.

#### Testing with Rspec

run the command `bundle exec rspec`

#### Testing the backkend with Postman

### APIs currently available

1. POST /v1/sessions (Create a user session)
2. POST /v1/users (Creates a user)
3. GET /v1/users/:id (Fetches a user)
4. POST /v1/tickets (Creates a request)
5. GET /v1/tickets/:id (Fetches a request)
6. PATCH /v1/tickets/:id (Updates the status of an opened request to closed)
7. PUT /v1/tickets/:id (Updates the status of an opened request to closed)
8. POST /v1/tickets/:ticket_id/comments (Create a comment on a request)
9. GET /v1/tickets/:ticket_id/comments (Fetches all comments belonging to a request)
10. GET /v1/agent/tickets (Fetches all tickets assigned to an agent)
11. GET /v1/tickets/report (Fetches all tickets assigned to an agent that have been closed in the last one month)
12. GET /v1/agent/:id (Fetches an agent)

## Tasks yet to be completed

1. Admin features: creating of agents and managing of all users and their requests.

2. More testing for business logic.

## Questions

For more details contact `solomonzbk@gmail.com`
