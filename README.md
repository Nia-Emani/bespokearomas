## Overview

_**Bespoke Aromas** is an app that allows users to rate their favorite luxury fragrances._

<br>

## MVP

_The **Bespoke Aromas** MVP will include the following elements:_

- _Ruby on Rails server (Back End) with a restful JSON API_
- _Database with 3 tables, with one association between them_
- _Full CRUD between non-User tables_
- _React app (Front End) with 8 rendered components and Full CRUD actions_
- _CSS styling with Flexbox and 2 media queries on 3 screen sizes_

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Build user interface_ |
|   React Router   | _Create components to navigate through the site_ |
|  Ruby on Rails   | _Back End server_ |
|     Express      | _Process handle requests_ |
|  Express Router  | _Class that helps create router handlers_ |

<br>

### Client (Front End)

#### Wireframes


![Bespoke Aromas - 1 Home](https://user-images.githubusercontent.com/83891591/135919644-ccf072e4-dbb8-4f9e-b659-5032e9b7fe1f.png)

![Bespoke Aromas - 2 Register](https://user-images.githubusercontent.com/83891591/135919949-2a3a356e-a628-4b52-ae69-dc2e2271eede.png)

![Bespoke Aromas - 3 Login](https://user-images.githubusercontent.com/83891591/135920123-41be15b9-7747-4cda-8e4f-1270c8f617ba.png)

![Bespoke Aromas - 4 Ratings](https://user-images.githubusercontent.com/83891591/135920235-c0469d73-b0e4-4f79-9b4e-7de90bd54a2b.png)

![Bespoke Aromas - 5 RatingCreate](https://user-images.githubusercontent.com/83891591/135920266-547dda4f-9313-41ea-85a5-f805b589abbe.png)

![Bespoke Aromas - 6 RatingEdit](https://user-images.githubusercontent.com/83891591/135920288-104a6104-32e4-4a01-a103-df8f1ff561e6.png)



#### Component Tree

![Bespoke Aromas - Component Tree drawio](https://user-images.githubusercontent.com/83891591/135920704-bfd3aaa7-6d31-4fbe-8f99-427075800065.png)

#### Component Architecture

```structure

src
|__ containers/
      |__ MainContainer.jsx
|__ components/      
      |__ Layout.jsx
      |__ Nav.jsx
      |__ Footer.jsx
|__ screens/
      |__ Fragrances.jsx
      |__ RatingCreate.jsx
      |__ RatingEdit.jsx
      |__ Ratings.jsx
      |__ Register.jsx
      |__ Login.jsx
      |__ Footer
|__ services/
      |__ auth.js
      |__ config.js
      |__ fragrances.js
      |__ ratings.js
|__ App.js

```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Back End     |    H     |     8 hrs      |     0 hrs     |    0 hrs    |
| Create database and tables |    H     |     6 hrs      |     0 hrs     |     TBD     |
| Setup React components    |    H     |     6 hrs      |     0 hrs     |    0 hrs    |
| Create CRUD Actions |    H     |     8 hrs      |     0 hrs     |     TBD     |
| Adding screen content    |    H     |     6 hrs      |     0 hrs     |    0 hrs    |
| CSS |    L     |     12 hrs      |     0 hrs     |     TBD     |
| Debugging    |    H     |     10 hrs      |     0 hrs     |    0 hrs    |
| TOTAL               |          |     56 hrs      |     3 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

![Bespoke Aromas - EDR drawio](https://user-images.githubusercontent.com/83891591/135920772-f2b075fe-7ac5-49bc-8371-2d3cd96a1b72.png)

---

## Post-MVP

- Allow users to upload fragrances that are not already on the app
- Allow users to comment on fragrances with a review
---

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
