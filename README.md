# About The Weather
[Unit 6, Server-Side APIs Assignment]

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ---
  ## Description

 This is a weather dashboard that retrieves weather data for cities, with current weather condition and five-day forecast using OpenWeather API. It uses `localStorage` to store any persistent data. It runs in a browser and features dynamically updated HTML and CSS.

  ### Interface
 This application has the following interface:
 [Image](Image)

 ### GitHub links: 

 The deployed version can be viewed here:  https://jbtiglao.github.io/about-the-weather/.

 While the repository can be accessed here: https://github.com/jbtiglao/about-the-weather. 

  ---
  ## Table of Contents
  1. [Title](#title)
  2. [Description](#description)
  3. [Installation](#installation)
  4. [Usage](#usage)
  5. [License](#license)
  6. [Contributing](#contributing)
  7. [Tests](#tests)
  8. [Credits](#credits)
  9. [Author](#author)
  10. [Questions](#questions)
  
  ---
  ## Installation
  Clone this project's repository on my GitHub account.

  To open the application, on Visual Studio Code:
  * Click File, select Open Folder from the drop-down list, and navigate to the cloned repository. Click on Open.
  * On the upper left-hand side, click on the Explorer icon, then the repository's index.html file.  Click on the HTML document and choose Open in Default Browser (or the browser of your choice) to run the application.

  Data from OpenWeather's Current Weather and One Call services are accessed through the creation of an API Key and free subscription to the said services on [OpenWeather](https://openweathermap.org/).

  ---
  ## Usage
  For instructions on how to use the application, please refer to the [deployed site](https://jbtiglao.github.io/about-the-weather/), as well as the following features and functionalities.

   ### Features and Functionalities

   The application has the following features and functionalities:

   1. A search field and search button. 
   - To look for a city's weather condition, enter the city name in the search field and click on the Search button.
   - The current weather condition for the city will appear on the currrent weather column.
   - The city's weather condition for the next five days are indicated below in five separate columns. 

   2. The column containing the city's current weather displays the following information: 
   - the current city; 
   - date;
   - weather icon that represents the current weather condition;
   - current temperature;
   - current humidity; 
   - current wind speed; and 
   - current UV index.

   3. The UV index's color shows whether the condition is favorable or low (green), moderate (yellow), or severe (orange, yellow, or violet). 
   - A UV index of `2 or less` means the condition is *favorable or low* and will display a **green** color.
   - A UV index of `3 to 5` means the condition is *moderate* and will display a **yellow** color;
   - A UV index of `6 to 7` means the condition is *severe (high)* and will display an **orange** color.
   - A UV Index of `8 to 10` is *severe (very high)* and will display a **red** color.
   - A UV index of `11+` is *severe (extreme)* and will display a **violet** color.
   
  4. When the user views the future weather condition for the cuurent city, the city's weather forecast for the next five days are displayed in five separate columns below the current weather condition. Each of the columns contains the following information:
- date;
- weather icon;
- temperature;
- humidity; and
- wind speed.

5. When the user enters the name of a city and clicks on the search bar, the city name is saved in a column below the search bar. 

6. Clicking on a city name in the search history list will show the city's current weather condition and five-day forecast.

7. The application uses the OpenWeather API to retrieve weather data. It also uses `localStorage` to store persistent data.

8. When the application is opened or the page is refreshed, the last searched city as well as its current weather and five-day forecast will appear.

  ---
  ## License
  License used for this project - MIT
  
  For more information on the above license, please see the following website:  
  - [Open Source Initiative](https://opensource.org/licenses)

  ---
  ## Contributing
  To contribute to this application: 
  Please email the author for guidelines.

  ---
  ## Tests
  The OpenWeather APIs, as well as the application's features and functionalities are tested using Chrome Dev Tools and running the application in a browser.

  ---
  ## Credits
  The following people/resources were consulted and/or utilized in the development of this application:
  
  * UCI Boot Camp study materials, videos, and internet resources
  * Jeff Howell for the Homework Walk Through videos (They are a big help. Thank you!)
  * [OpenWeather](https://openweathermap.org/)
  * [Postman API Platform](https://www.postman.com/)
  * [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
  * [jQuery](https://jquery.com/)
  * [Moment.js](https://momentjs.com/)
  * [Fontawesome](https://fontawesome.com/icons)
  * [cdnjs](https://cdnjs.com/)
  * [stackoverflow](https://stackoverflow.com/questions/10104634/how-to-convert-00b0-degree-sign-unicode-character)
  * [How to Understand the UV Index](https://www.verywellhealth.com/know-your-uv-index-1069524)
  * [ColorHexa](https://www.colorhexa.com/)
  * The amazing Natalie Merchant and 10,000 Maniacs' whose song Like The Weather inspired the application's title and kept me company while developing this app.

  ---
  ## Author
  Jane Tiglao

  ---
  ## Questions
  For questions or issues, please contact: 
  - Jane Tiglao 
  - Email: janeytiglao@gmail.com
  - GitHub Username: jbtiglao
  - GitHub Profile: https://github.com/jbtiglao

