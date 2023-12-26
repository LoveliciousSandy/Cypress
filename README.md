# Cypress
<pre> 
Environment Setup<br>
1. Download & install node js 
    node -v
2. Download & install VS code
3. Create a new folder and open it from VS code
4. execute below command in cmd. This will create package.json file
    npm -i init
5. To install Cypress 
    npm install cypress --save -dev
6. To start cypress
    npx cypress open 

How to run tests in Cypress<br>
To open cypress runner
    npx cypress open 
To run all the specs under the e2e folder
    npx cypress run
    npx cypress run --headed
To run single spec under e2e folder
    npx cypress run --spec cypress\e2e\test.cy.js 
To run by browser 
    npx cypress run --browser chrome
    npx cypress run --browser edge
Or 
    npx cypress run --browser chrome --headed
    
To install xpath plugin 
    npm install -D cypress-xpath
add entry in commands.js 
    /// <referance types="cypress-xpath" />
e2e.js
        require('cypress-xpath')


