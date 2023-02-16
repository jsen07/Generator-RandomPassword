# Generator-RandomPassword

In this project we were given the task to implement an application that is used to generate a random password for the user based on a number of criteria presented to the user which the user can choose to include in their password (e.g include lowercase, uppercase, numbers, special characters). The random password generator application is created using HTML, CSS and Javascript. Javascript is an integral part of the application in order to generate strong passwords to be used in the web and is the main component in creating the generated password, Javascript is also used to gather data to be used to generate the password through the use of different prompts that allow user input and confirmation whether a user would like to include a certain password criteria.

A struggle I have faced when writing Javascript for this application is ensuring that at least one character from a given password criteria is included in the final password. A solution to this problem that I have found is to use the additional assignment (+=) operator that allowed me to append a character to the final password variable as soon as a prompt is confirmed.

In the future I would like to implement a functionality that allows the user to input a word that they would like to include in their password, and the random password generator will produce a password that incorporates the users desired word along with added characters to meet the users selected password criteria.

To run the Random Generator Application this link can be used to direct you to the application (https://jsen07.github.io/Generator-RandomPassword/). By clicking on the generate password button, a series of prompts that specify different password criteria will be displayed to the user which the user must complete. For certain prompts if the user gives an invalid input the prompt will cancel and alert the user conditions that must be met in order to pass the prompt. After all prompts have been passed a password will be generated based on the accepted prompts the user has chosen. 


![image](https://user-images.githubusercontent.com/56829664/219488852-7f97ad52-2357-4dfd-b174-19d37203a64a.png)
