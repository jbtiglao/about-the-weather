# About The Weather
[Unit 6, Server-Side APIs Assignment]

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ---
  ## Description

 This is a weather dashboard that retrieves weather data for cities. It shows the searched city's current weather condition and five-day forecast using OpenWeather API. It uses `localStorage` to store any persistent data. It runs in a browser and features dynamically updated HTML and CSS.

  ### Interface
 This application has the following interface:
 
 <img width="1426" alt="image1_interface" src="https://user-images.githubusercontent.com/94569484/166133288-381e4ad9-7cd3-4277-938f-89bbb9d100fa.png">

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
  Clone my GitHub repository.

  To open the application, on Visual Studio Code:
  * Click File, select Open Folder from the drop-down list, and navigate to the cloned repository. Click on Open.
  * On the upper left-hand side, click on the Explorer icon, then the repository's index.html file.  Click on the HTML document and choose Open in Default Browser (or the browser of your choice) to run the application.

  Data from OpenWeather's Current Weather and One Call services are accessed through the creation of an API Key and free subscription to the said services on [openweathermap.org](https://openweathermap.org/).

  ---
  ## Usage
  For instructions on how to use the application, please refer to the [deployed site](https://jbtiglao.github.io/about-the-weather/), as well as the following features and functionalities.

   ### Features and Functionalities

   The application has the following features and functionalities:

   1. A search field and search button. 
   
<img width="348" alt="image2_searchfield-and-searchbutton" src="https://user-images.githubusercontent.com/94569484/166133365-8db13ee4-705c-49cd-a027-6cb65427d6f9.png">

   - To look for a city's weather condition, enter the city name in the search field and click on the Search button.
  
  <img width="347" alt="image3_search-for-city" src="https://user-images.githubusercontent.com/94569484/166133368-b73d80d8-b871-4ef2-a836-7c2a3253b36d.png">

   - The city's current weather condition is displayed on the column containing the search result (current weather column).
  
  <img width="1060" alt="image4_current-city" src="https://user-images.githubusercontent.com/94569484/166133374-c5f6e3f8-192b-4db5-9de1-9c9ffef59f4d.png">

   - The city's weather condition for the next five days are displayed below the current weather column.


<img width="1046" alt="image5_5-day-forecast" src="https://user-images.githubusercontent.com/94569484/166133929-f9d1fd2f-7778-427a-a2b7-7ca375ca3682.png">


   2. The column containing the city's current weather displays the following information: 
   - the current city; 
   - date;
   - weather icon that represents the current weather condition;
   - current temperature;
   - current humidity; 
   - current wind speed; and 
   - current UV index.

<img width="434" alt="image6_current-weather-info" src="https://user-images.githubusercontent.com/94569484/166133382-4c07dceb-69a3-4ec1-a985-81329f4a24bd.png">


   3. The UV index's color shows whether the condition is favorable or low (green), moderate (yellow), or severe (orange, yellow, or violet). 
   - A UV index of `2 or less` means the condition is *favorable or low* and will display a **green** color.
   - A UV index of `3 to 5` means the condition is *moderate* and will display a **yellow** color;
   - A UV index of `6 to 7` means the condition is *severe (high)* and will display an **orange** color.
   - A UV Index of `8 to 10` is *severe (very high)* and will display a **red** color.
   - A UV index of `11+` is *severe (extreme)* and will display a **violet** color.

<img width="283" alt="image7_uv-index-chart" src="https://user-images.githubusercontent.com/94569484/166133387-8174525c-fce3-4aca-9cd0-eb888d10c592.png">

   <img width="434" alt="image8_uv-index-red" src="https://user-images.githubusercontent.com/94569484/166133393-cb429df5-b1c3-41bd-954b-d014b97fb8b4.png">
   
   <img width="397" alt="image9_uv-index-yellow" src="https://user-images.githubusercontent.com/94569484/166133395-c9b30021-7581-4b04-8277-70d2c1e0a965.png">
   
   <img width="452" alt="image10_uv-index-violet" src="https://user-images.githubusercontent.com/94569484/166133398-b36d77cd-7c96-40c3-bda9-56a3037f14cf.png">


  4. When the user views the future weather condition for the current city, the city's weather forecast for the next five days are displayed in five separate columns below the current weather condition. Each of the columns contains the following information:
- date;
- weather icon;
- temperature;
- humidity; and
- wind speed.

<img width="1061" alt="image16_forecast" src="https://user-images.githubusercontent.com/94569484/166133937-b34f8927-b17c-4950-875d-f5f198958d44.png">

5. When the user enters the name of a city and clicks on the search bar, the city name is saved below the search bar. 

<img width="338" alt="image11_search-history" src="https://user-images.githubusercontent.com/94569484/166133412-487616cb-9162-40dd-932f-901d61c0e6d1.png">


6. Clicking on a city name in the search history will show the city's current weather condition and five-day forecast.

<img width="1429" alt="image12_click-on-city" src="https://user-images.githubusercontent.com/94569484/166133416-77bf7ceb-9fff-41df-9f22-e32ea6bdebd2.png">


7. When the application is opened or the page is refreshed, the last searched city as well as its current weather and five-day forecast will appear.

<img width="1422" alt="image13_last-searched-city" src="https://user-images.githubusercontent.com/94569484/166133429-129ba65e-5950-4fc7-8a61-594073554aca.png">

<img width="1428" alt="image14_open-app" src="https://user-images.githubusercontent.com/94569484/166133434-8086c498-ecc9-4dc0-b456-b931c43c27d0.png">


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
  * The amazing Natalie Merchant and the 10,000 Maniacs whose song Like The Weather inspired the application's title and kept me company while developing this app.

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

