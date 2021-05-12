# NodeJS-Express API for CRUD Database Operations

## CRUD: Create-Read-Update-Delete

It is a simple express application that:
1. Connects to a database
2. Creates the given payload in the request
3. Gets the data created
4. Updates the data created
5. Deletes the data created

<b>The request data should contain name, email and country</b>

## Hosted Link
[https://nodejs-express-db-crud.herokuapp.com/api/v1](https://nodejs-express-db-crud.herokuapp.com/api/v1)

## Documentation
Project has been hosted on [heroku](https://nodejs-express-db-crud.herokuapp.com/api/v1), you can also refer to the [Documentation here](https://documenter.getpostman.com/view/8570881/TzRUASZT) for further reference and examples

# CRUP App with Database
<b>Description: </b>This API performs CRUD database operations. <br />
<b>BASE_URL: `https://nodejs-express-db-crud.herokuapp.com/api/v1`</b>

### Response
- Each request returns an object containing a message that tells the client if the request is successful or not, and data object containing the result.
#### Success Payload:
``` raw(json)
{
    message: String,
    data: Object
}
```
<br />
- If there's an error in processing the request, the response will return the error message instead.
#### Error Payload:
``` raw(json)
{
    message: String,
}
```
### Creator
- [MasterCraft](https://github.com/IAmMasterCraft)

### Create User Request
`<b>Endpoint:</b> https://nodejs-express-db-crud.herokuapp.com/api/v1/create-user`
This endpoint accepts a `POST` Request and creates user data
- User data must be a `JSON Object` sent with request body
- Return `HTTP STATUS CODE 201` if user creation was successful
- Return `HTTP STATUS CODE 500` if user creation was <b>NOT</b> successful with the message on what went wrong

#### Body raw(json)
``` raw(json)
{
  "name": "MasterCraft",
  "email": "mastercraft@mail.com",
  "country": "Nigeria"
}
```

### Read All User Data Request
`<b>Endpoint:</b> https://nodejs-express-db-crud.herokuapp.com/api/v1/get-user`
This endpoint accepts a `GET` Request and returns all user data
- Return `HTTP STATUS CODE 200` if data fetch was successful
- Return `HTTP STATUS CODE 404` if data was not found
- Return `HTTP STATUS CODE 500` if something went wrong with fetching data

### Read One User Data Request
`<b>Endpoint:</b> https://nodejs-express-db-crud.herokuapp.com/api/v1/get-user`
This endpoint accepts a `GET` Request and returns all user data
- Return `HTTP STATUS CODE 200` if data fetch was successful
- Return `HTTP STATUS CODE 404` if data was not found
- Return `HTTP STATUS CODE 500` if something went wrong with fetching data

### Update User Request
`<b>Endpoint:</b> https://nodejs-express-db-crud.herokuapp.com/api/v1/update-user/email@mail.com`
This endpoint accepts a `PUT` Request with `email` of the user as url parameter and updates the user data
- User data to be updated must be a JSON Object sent with request body
- Return `HTTP STATUS CODE 201` if data update was successful
- Return `HTTP STATUS CODE 404` if user whose data is to be updated was not found
- Return `HTTP STATUS CODE 500` if something went wrong with updating user data

#### Body raw(json)
``` raw(json)
{
  "email": "another_user@mail.com"
}
```

### Delete User Request
`<b>Endpoint:</b> https://nodejs-express-db-crud.herokuapp.com/api/v1/delete-user`
This endpoint accepts a `DELETE` Request and deletes user data
- User data to be deleted must be a JSON Object of the email of the user, to be sent with request body
- Return `HTTP STATUS CODE 200` if data was successfully truncated
- Return `HTTP STATUS CODE 400` if email of user to be deleted is not in body of the request
- Return `HTTP STATUS CODE 500` if something went wrong with deleting user data


#### Body raw(json)
``` raw(json)
{
  "email": "another_user@mail.com"
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](./LICENSE)