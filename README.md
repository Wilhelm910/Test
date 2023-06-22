## Task: Simple User Management

Implement a simple list view which shows information about all available users. 

The user data can be fetched via the "list" function of user-api.service (src/app/backend).
The service acts as backend service and mocks http requests that would normally go to the server. 

Create a new component that renders the data provided by the user-api service. 
Since most http requests are not instantaneous the api service will delay each request by two seconds before
sending a response. Add a loading indicator to the view while the service is loading.

### Bonus

The user-api service also provides a function which allows deleting a user by their id.
Extend the components written in the first task to allow deleting the users and update the view on success.

