## Overview

_**Bespoke Aromas** is an app that allows users to rate their favorite luxury fragrances._

<br>

## MVP

_The **Bespoke Aromas** MVP will include the following elements:_

<br>

### Goals

- _Ruby n Rails server (Back End) with a restful JSON API_
- _Database with 3 tables, with one association between them_
- _Full CRUD between non-User tables_
- _React app (Front End) with 8 rendered components and Full CRUD actions_
- _CSS styling with Flexbox and 2 media queries on 3 screen sizes_

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
|  Ruby on Rails   | _Back End server_ |
|     Express      | _Lorem ipsum dolor sit amet, consectetur._ |
|  Express Router  | _Lorem ipsum dolor sit amet, consectetur._ |

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

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

![Bespoke Aromas - EDR drawio](https://user-images.githubusercontent.com/83891591/135920772-f2b075fe-7ac5-49bc-8371-2d3cd96a1b72.png)

---

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

---

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
