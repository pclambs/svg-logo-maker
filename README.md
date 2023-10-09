# SVG-Logo-Maker
Week-10 Challenge

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

 * [Description](#description)

 * [Live-Screen-Recording-of-Application-Functionality](#live-screen-recording-of-application-functionality)

 * [Screenshots](#screenshots)

 * [Technologies-Used](#technologies-used)

 * [Installation](#installation)

 * [Features](#features)

 * [Usage-Information](#usage-information)

 * [Test-Instructions](#test-instructions)

 * [License](#license)

## Description

This application allows users to create a basic logo. It utilizes inquirer to prompt the user within the command line for how they would like their logo to look (ie. what text they would like their logo to display (up to 3 characters in length), the color of that text, the shape of their logo (triangle, square, or circle) and the color of that shape.) Once the user answers all prompts, then an SVG file is written using their selections to generate a logo. 

## Live Screen Recording of Application Functionality

https://drive.google.com/file/d/1zGkWKaYFSb7QxObHgejWKxvxvaZrZAdF/view?usp=drive_link

## Screenshots

Logo Generation

![Screenshot1](./screenshots/Screenshot%202023-10-09%20145047.png)

![Screenshot2](./screenshots/Screenshot%202023-10-09%20151339.png)

Examples of Generated Logos

<img alt="Screenshot3" src="./screenshots/Screenshot 2023-10-09 172616.png">

<img alt="Screenshot4" src="./screenshots/Screenshot 2023-10-09 172723.png">

<img alt="Screenshot5" src="./screenshots/Screenshot 2023-10-09 172812.png">

## Technologies Used

This project is powered by Node.js, Inquirer, and file system module. It also uses Jest for the unit testing conducted in this application. 

## Installation

1. Clone the repo:
   git clone https://github.com/pclambs/svg-logo-maker.git

2. Open in VS Code. If you do not have VS code you must install it.

3. Using the terminal, install node.js.

4. Once node.js is installed, in the terminal, input the command "npm init -y" to initialize and create a package.json where project files will be stored.

5. Next, use the terminal to run the command "npm i" to install the dependencies associated with this application.

6. To run the application, within the terminal, type the command "node index".

## Features

Features of this application include the users ability to generate logos quickly and easily through the use of SVG files, entirely from the command line.

## Usage Information

To run this application, use the command line to navigate to the directory of the application, install all dependencies (npm i), then type the command node index.js. You will then be taken through a series of questions. Once all questions have been answered properly, a message will display to the command line telling you your logo has been generated. Find your new logo in the newly generated SVG file that will be located in the in /examples folder.

For unit testing instructions, navigate to the Test Instructions section.

## Test Instructions

To run unit testing, open the terminal, and use the command npm run test.

As of now there is 1 test suite for each shape with a total of 2 tests for each suite. The test suite is checking for a render() method to return a rendered SVG with the given shape color.

![Screenshot6](./screenshots/Screenshot%202023-10-09%20150043.png)

## License

NOTICE: This application is covered under the MIT License

