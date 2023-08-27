# Node-logistics Backend

# BaseURL - [https://backend-ritik2727.vercel.app/](https://backend-ritik2727.vercel.app/)



# Items route - /api/item

- 1]GET Method - [https://backend-ritik2727.vercel.app/](https://backend-ritik2727.vercel.app/)/api/item
  response - {data : []}
- 2]POST Method - [https://backend-ritik2727.vercel.app/](https://backend-ritik2727.vercel.app/)/api/item
  Request Payload

      ```jsx
      {
         "name" : "Ritik jain",
         "price" : 1000000
      }
      ```

      Response

      ```jsx

      {
        "name": "Ritik jain",
        "price": 7000000,
        "_id": "64eb3cb8ee10ff45a5333f00",
        "__v": 0
      }

      ```

- PUT Method -to Update price of Item
  [https://backend-ritik2727.vercel.app/](https://backend-ritik2727.vercel.app/)/api/item/:id
  Request Payload
  ```jsx
  {
    "price" : 400
  }
  ```
  Response
  ```jsx
  
  {
    "_id": "64eb3cb8ee10ff45a5333f00",
    "name": "Ritik jain",
    "price": 400,
    "__v": 0
    }

  ```

## customer routes - /customers

1 ] **POST method - for registering new user**

**[https://backend-ritik2727.vercel.app](https://backend-ritik2727.vercel.app/)/api/customers**
request payload

```jsx
 {
       "name" : "Ritik jain",
       "city" : "indore"
    }
```

Responses

```jsx
//If email is already present
{
    "name": "Ritik jain",
    "city": "indore",
    "_id": "64eb3defee10ff45a5333f08",
    "__v": 0
}
```

2 ] **GET method - get all customers list**

**[https://backend-ritik2727.vercel.app](https://backend-ritik2727.vercel.app/)/api/customers**



Responses

```jsx
//User email not found
[{}]
```

### 3] PUT route - update customer - [https://backend-ritik2727.vercel.app/api/customers/:id](https://backend-ritik2727.vercel.app/api/customers/:id)

### 4] DELETE route - DELETE customer - [https://backend-ritik2727.vercel.app/api/customers/:id](https://backend-ritik2727.vercel.app/api/customers/:id)

## Order Route api/order

- 1] GET Route - / - To get data of orders
  [https://backend-ritik2727.vercel.app](https://backend-ritik2727.vercel.app/)/api/order/
  Response - {data : “”}
- 2]POST Route - /add - To add new orders
  [https://backend-ritik2727.vercel.app](https://backend-ritik2727.vercel.app/)/api/order
  Request Payload

  ```jsx
  {
   itemID : "", //Unique objectId of item in format of string
   customerID : "" //Unique objectId of customer in format of string
  }
  ```



## Delivery Vehicles Route - /api/delivery-vehicles

- 1]POST Method  - adds new vehicle
  [https://backend-ritik2727.vercel.app](https://backend-ritik2727.vercel.app/)/api/delivery-vehicles
  Request Payload
  ```jsx
  {
    "city" : "Indore,
    "vehicleType" : enum("bike" | "truck")
  }
  ```

- 2]GET Method - / - Reads vehicle data
  [https://backend-ritik2727.vercel.app](https://backend-ritik2727.vercel.app/)/api/delivery-vehicles
  Response - { “data” : []}
- 3]PATCH Method - /update - Updates activeOrdersCount
  [https://backend-ritik2727.vercel.app](https://backend-ritik2727.vercel.app/)/api/delivery-vehicles/update
  Request Payload

  ```jsx
  {
    "id" : "", // Id is unique objectId assigned to vehicle in string format
    "activeOrdersCount" : 0 | 1 | 2
  }
  ```


