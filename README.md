# Contacts-CRUD-api-NodeJS
CLONE
```
https://github.com/AMRESH-SHARMA/Vouch-assignment-NodeJS.git
```
RUN
```
npm i &&
npm run start

```

API
```

 POST http://localhost:8000/getjwt                   [INPUT: username]
 POST http://localhost:8000/contact                  [INPUT: username, unique number]
 POST http://localhost:8000/contact/bulk             [INPUT: JSON array contains username and number]  

 GET http://localhost:8000/contact                   
 PUT http://localhost:8000/contact/:id               [INPUT: username, unique number]  
 DELETE http://localhost:8000/contact/:id            

```
_________________
#Backend Packages
* dotenv
* express
* md5
* mongoose
___________

#Task: Address Book (Design APIs to maintain address book)
 
 Implement following endpoints
* Add a new contact.
* Add bulk contacts.
* Fetch details of single contact.
* Fetch phase matching results.
* Fetch the list of contacts with pagination.
* Update the given contact.
* Delete the given contact.
* Add JWT authentication to secure API.
* Implement an endpoint to get the JWT token.
Do’s
* Exception handling and Error API response.
* Add validation wherever required.
*Use dependency injection.
*Add proper comments.
*Add README file for documentation and execution detail.
*Use of TypeScript - optional (Add benefit)
*Write the test cases - optional (Add benefit)

