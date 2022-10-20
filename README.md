<img width="577" alt="ayrbnb_v7" src="https://user-images.githubusercontent.com/99856702/196315104-4da1b6d6-81f2-4a37-90e2-87a8819245d2.png">


# About
Ayrbnb is a fullstack application 'clone' inspired by the [Airbnb](http://www.airbnb.com) website. Ayrbnb is a platform where users go to host their homes or find vacation rentals.

# Live site
[**www.airbnb-james-lee.herokuapp.com**](http://www.airbnb-james-lee.herokuapp.com)

<!-- 🔗  -->
# Wiki Links
* [API Documentation](https://github.com/jameswonlee/airbnb-clone/blob/main/backend/README-API-Docs.md#airbnb-clone)
* [Database Schema](https://github.com/jameswonlee/airbnb-clone/wiki/Database-Schema)
* [Features List](https://github.com/jameswonlee/airbnb-clone/wiki/Features-List)
* [Redux State Shape](https://github.com/jameswonlee/airbnb-clone/wiki/Redux-Store-Shape)

<!-- 🖥️  -->
# Built With
### Frameworks, Platforms, Libraries:
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

### Database:
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

### Hosting:
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

### Asset Design:
![Adobe Photoshop](https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white)

==================================================================================

## Roadmap of Features:
- [x] Spots
    - [x] Load all spots
    - [x] Load details of single spot
    - [x] Create a spot
    - [x] List current user's spots
    - [x] Update current user's spot
    - [x] Delete current user's spot
- [ ] Reviews
    - [x] Load all reviews for a spot
    - [x] Create a review
    - [ ] Update a review
    - [x] Delete a review
    - [ ] List all reviews of current user
- [ ] Bookings
    - [ ] Create a booking for a spot
    - [ ] List current user's bookings
    - [ ] List all bookings for a spot
    - [ ] Update current user's booking
    - [ ] Delete current user's booking
- [ ] Images
    - [x] Add an image to a spot
    - [ ] Add an image to a review
    - [ ] Delete a spot image
    - [ ] Delete a review image
- [ ] Search

==================================================================================


### Getting Started
1. Clone repository.
```
https://github.com/jameswonlee/airbnb-clone.git
```
2. cd into the backend folder and npm install dependencies.
```sh
npm install
```
3. Create a .env file at the root of the backend folder and copy the contents from the .env.example file.
```sh
cp .env.example .env
```
4. Migrate files and seed the data.
 ```sh
npx dotenv sequelize db:migrate
 ```
```sh
npx dotenv sequelize db:seed:all
```

5. Start the backend server.
```
npm start
```
6. cd into frontend folder and npm install dependencies.
 ```sh
npm install
```
7. npm start to be redirected to http://localhost:3000/
 ```sh
npm start
 ```
<!-- 📱  -->
## Contact
<img src=https://i.imgur.com/w9xwrCT.png width=20>[GitHub](https://github.com/jameswonlee)
<img src=https://i.imgur.com/2ffGJqj.png width=20> [LinkedIn](https://www.linkedin.com/in/jameswonlee/)







