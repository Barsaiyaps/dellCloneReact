# Dell Clone – MERN Stack 

A full-stack Dell clone built with the **MERN Stack** (MongoDB, Express, React, Node.js). This app allows users to view Dell products and provides functionality to add new users to the backend database.

---

##  Live Demo

- **Frontend (Vercel)**: [Dell Clone Frontend](https://dell-clone-react-9n5c.vercel.app/product)
- **Backend (Render)**:
  - **Add Product**: `https://dellcloncebackend-1.onrender.com/dell/add-product`
  - **Get Products**: `https://dellcloncebackend-1.onrender.com/dell/get-product`

---

## Tech Stack

- **Frontend**: React.js, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Hosting**:
  - Frontend on [Vercel](https://vercel.com)
  - Backend on [Render](https://render.com)

---

##  Features

- View all Dell products from the backend.
- Add new Dell products via API.
- Fully deployed frontend and backend.
- RESTful API integration.
- Clean and modular code structure.

---

## API Endpoints

## Add Product

- **Endpoint**: `POST /dell/add-product`
- **URL**: `https://dellcloncebackend-1.onrender.com/dell/add-product`
- **Body Example** (JSON):
```json
{
  "title": "Dell XPS 15",
  "price": 1499,
  "desciption":"Powerfull computer"
  "image": "https://example.com/xps15.jpg",
  "description": "High-performance laptop for professionals."
}
