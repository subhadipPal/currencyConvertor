# Basic Functionality

We are building basic Rest API to get shop and area information to simulate part of structure in Engel & Völkers.
Based on the input provided the api should respond back with JSON formatted output.

## Integration

The responses to the queries should be as follows:

* we want to respond with all the areas when below request is sent.
 
__Request:__

```
/areas
```

__Response containing records:__

```json
{
  "results": [
    {
      "areaId": "ca027d7e-dc2a-4923-b1df-fcaf23c3f8f7",
      "areaName": "Hamburg"
    },
    {
      "areaId": "e7c64011-4b8a-45bd-8f46-f53dd6f5b102",
      "areaName": "Munich"
    }
   ]
}
```

 * we want to respond with the area and its associated shops when below request is sent.
 
__Request:__

```
/areas/{area-id}?embed=shops
```

__Response containing records:__

```json
{
  "areaId": "ca027d7e-dc2a-4923-b1df-fcaf23c3f8f7",
  "areaName": "Hamburg",
  "_embedded": {
    "shops": [
      {
        "shopId": "eea3a7aa-f366-48a6-8c2c-0901a13a3ae5",
        "shopName": "vancouverstrasse 2a",
        "websiteUrl": "twoa.vancouver@engelvoelkers.com",
        "status": "OPENED"
      },
      {
        "shopId": "65aa61f7-8c76-4f57-8414-e827b47d1eca",
        "shopName": "barcelona 125",
        "websiteUrl": "barcelona@engelvoelkers.com",
        "status": "CLOSED"
      }
    ]
  }
}
```

 * we want to respond with all the shops when below request is sent.
 
 __Request:__
 
 ```
 /shops
 ```
 
 __Response containing records:__
 
 ```json
 {
   "result": [
     {
       "shopId": "65aa61f7-8c76-4f57-8414-e827b47d1eca",
       "shopName": "barcelona 125",
       "websiteUrl": "barcelona@engelvoelkers.com",
       "status": "CLOSED",
       "areaId": "ca027d7e-dc2a-4923-b1df-fcaf23c3f8f7",
       "openDate": "17-Mar-1999"
     },
     {
       "shopId": "eea3a7aa-f366-48a6-8c2c-0901a13a3ae5",
       "shopName": "vancouverstrasse 2a",
       "websiteUrl": "twoa.vancouver@engelvoelkers.com",
       "status": "OPENED",
       "areaId": "ca027d7e-dc2a-4923-b1df-fcaf23c3f8f7",
       "openDate": "21-Feb-1999"
     },
     {
       "shopId": "e9212fa2-a2bf-47f0-ab0d-d030b64c3275",
       "shopName": "Singapore 65",
       "websiteUrl": "Singapore@engelvoelkers.com",
       "status": "OPENED",
       "areaId": "e7c64011-4b8a-45bd-8f46-f53dd6f5b102",
       "openDate": "07-Mar-1985"
     },
     {
       "shopId": "12304afa-011c-4bf4-a6ce-4466a9c33c6c",
       "shopName": "Mumbai 897",
       "status": "OPENED",
       "areaId": "e7c64011-4b8a-45bd-8f46-f53dd6f5b102"
     },
     {
       "shopId": "f8ff2198-af76-4d22-818e-4788bb4669e7",
       "shopName": "mariastrasse 25",
       "websiteUrl": "mariastrasse@engelvoelkers.com",
       "status": "OPENED",
       "areaId": "e7c64011-4b8a-45bd-8f46-f53dd6f5b102"
     }
   ]
 }
 ```
 
 * we want to respond with the shop when below request is sent.
  
 __Request:__
 
 ```
 /shops/{shop-id}
 ```
 
 __Response containing records:__
 
 ```json
 {
   "areaId": "ca027d7e-dc2a-4923-b1df-fcaf23c3f8f7",
   "shopId": "eea3a7aa-f366-48a6-8c2c-0901a13a3ae5",
   "shopName": "vancouverstrasse 2a",
   "websiteUrl": "twoa.vancouver@engelvoelkers.com",
   "status": "OPENED"
 }
 ```
 
 Note: All the sub-path should be valid reference to the resources.
 All below request are valid request : 
 
 __Request:__
 
 ```
 /areas
 /areas/{area-id}
 /areas/{area-id}?embed=shops
 
 /shops
 /shops/{shop-id}
 ```
 
  

## Data

We have two tables in our database, one stores all the area information and one stores all the shops associated with those areas.
Both these tables are connected with `areaId` key.

__areas:__
```json
 {
  "areas": [
    {
      "areaId": "ca027d7e-dc2a-4923-b1df-fcaf23c3f8f7",
      "areaName": "Hamburg"
    },
    {
      "areaId": "e7c64011-4b8a-45bd-8f46-f53dd6f5b102",
      "areaName": "Munich"
    }
  ]
}
```

__shops:__
```json
 {
  "shops": [
    {
      "shopId": "65aa61f7-8c76-4f57-8414-e827b47d1eca",
      "shopName": "barcelona 125",
      "websiteUrl": "barcelona@engelvoelkers.com",
      "status": "CLOSED",
      "areaId": "ca027d7e-dc2a-4923-b1df-fcaf23c3f8f7",
      "openDate": "17-Mar-1999"
    },
    {
      "shopId": "eea3a7aa-f366-48a6-8c2c-0901a13a3ae5",
      "shopName": "vancouverstrasse 2a",
      "websiteUrl": "twoa.vancouver@engelvoelkers.com",
      "status": "OPENED",
      "areaId": "ca027d7e-dc2a-4923-b1df-fcaf23c3f8f7",
      "openDate": "21-Feb-1999"
    },
    {
      "shopId": "e9212fa2-a2bf-47f0-ab0d-d030b64c3275",
      "shopName": "Singapore 65",
      "websiteUrl": "Singapore@engelvoelkers.com",
      "status": "OPENED",
      "areaId": "e7c64011-4b8a-45bd-8f46-f53dd6f5b102",
      "openDate": "07-Mar-1985"
    },
    {
      "shopId": "12304afa-011c-4bf4-a6ce-4466a9c33c6c",
      "shopName": "Mumbai 897",
      "status": "OPENED",
      "areaId": "e7c64011-4b8a-45bd-8f46-f53dd6f5b102"
    },
    {
      "shopId": "f8ff2198-af76-4d22-818e-4788bb4669e7",
      "shopName": "mariastrasse 25",
      "websiteUrl": "mariastrasse@engelvoelkers.com",
      "status": "OPENED",
      "areaId": "e7c64011-4b8a-45bd-8f46-f53dd6f5b102"
    }
  ]
}
```

