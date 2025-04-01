# Inventory-Management-Job

This project is an inventory management system built with React and Redux. It allows you to create and manage data for jobsites and store their information for further use.

## Main functionalities
- Add a new jobsite: Users can add a new jobsite by filling out a form in the modal window. The form allows input for jobsite details such as the name, status, and category. Once the form is submitted, the new jobsite is added to the list and displayed in the table.
- Display a list of jobs with relevant information.
  
- **Status Management**: Users can change the status of each jobsite (e.g., "On Hold", "Completed", "On Road") directly from the table. When a jobsite's status is updated, the change is reflected in the **Header**, which displays statistics on the current statuses of all jobs. This provides a quick overview of the jobsite statuses, such as how many are "On Hold", "Completed", or "On Road".
- **Inventory Interface**: After clicking on a jobsite name in the table, the application displays a new page dedicated to the inventory, showing details such as the jobsite's name and category.
- **Category-based Table View**: When clicking on a category, a table is displayed showing data specific to that category. This allows users to view detailed information for each category associated with the jobsite.
- **Edit Table Data**: By clicking on any field within the displayed table, a modal opens, enabling users to modify the table's data. These changes can then be saved back to the table, updating the data accordingly.


## Technologies used
- React
- Redux
- JavaScript
- HTML & CSS
- Bootstrap

## Installation instructions
To clone and test the project on your machine:

1.Clone the repo
git clone https://github.com/sidorela93/Inventory-Management-Job.git

2.Install dependencies:
npm install

3.Start the project:   
npm start

Jobsites
This project is an inventory management system built with React and Redux. It allows you to create and manage data for jobsites and store their information by displaying it in a table.
Each jobsite has a status and the total status of the jobsite in the table is displayed in the header of the interface.
![image](https://github.com/user-attachments/assets/98ee084a-edc8-4d09-b3a9-a6a7ba064d21)

 
Create button
To implement the functionality where the Create button opens a modal and uses the data entered in the modal to create a Jobsite, we can follow these steps:
Creating the Modal component: The Modal will appear when the Create button is pressed and will have the form to enter the data.
State to hold the form data: We use React state to store the data that the user enters in the modal.
Redux for data management: Once the form in the modal is filled out, the data can be saved in Redux and added to the list of Jobsites.
 ![image](https://github.com/user-attachments/assets/61ce7332-5965-4d04-9643-b6b1d84e18c6)

 ![image](https://github.com/user-attachments/assets/bc95f38e-85aa-49c6-ae82-8341e3f68403)

 ![image](https://github.com/user-attachments/assets/98e6c13c-b221-4c5f-b768-66ce35141633)
 



 
Search a Jobsite
This functionality allows users to search for jobsites in the table using a search input. This is a simple way to filter jobsites and find those that contain a specific keyword.
Functionality Description:
Search Input: The user can enter a keyword in the search box.
Real-time Filtering: When the user types a word, the application filters the table of jobsites and shows only those that contain the search term.
Using React State
How it works:
When the user enters a full word or part of it (e.g., part of a Jobsite address), the table is updated and only shows Jobsites that contain the search term.
This can help in browsing and finding jobsites faster and more efficiently.
![image](https://github.com/user-attachments/assets/46db5b61-ea01-480d-b6a7-a6e98c6059fd)



 

Jobsite Inventory Page
This functionality allows the user to view detailed information for each Jobsite and, accordingly, display information for the categories associated with it.

Functionality Description:
Click on Jobsite Name: When the user clicks on the Jobsite name in the table, a new page opens that displays information related to that Jobsite.
Jobsite Details: This new page displays the details of the respective Jobsite, such as name and category.
Click on Category: The user can click on the category name, and this will display a new table with the specific data of that category, enabling a detailed view of the information.
How it works:
Navigate to Inventory Page: When the user clicks on the Jobsite name in the table, it is automatically navigated to the corresponding Inventory page.
Category Data: After clicking on the category, a new table appears with the specific data of that category.
![image](https://github.com/user-attachments/assets/38e2346d-30a5-4296-ac86-67eaaaf78aa7)
![image](https://github.com/user-attachments/assets/8bd5f6c4-0c4e-4f5d-8f90-a5eb30c9ebad)



 


 

Search button
The Search button enables searching and filtering of category data in the table that appears when the user clicks on a specific category. This functionality allows the user to find data belonging to the respective category more quickly and accurately.

 

![image](https://github.com/user-attachments/assets/81e0698f-10d9-4145-9282-6bb3c8bad388)




 Inventory modal functionality in the data table.
When the user clicks on a field in the displayed table, a modal opens that allows changing the data in that row. After editing the data in the modal, the user can save the changes and they will be updated in the application table.

![image](https://github.com/user-attachments/assets/bc98f9fb-a3a7-4f3d-90d8-45a0533a3e02)


Functionality Description:

Field Click: When the user clicks on a specific field in the table (for example, a field containing the name of a Jobsite), a modal opens containing a form for changing the data.
Edit Modal: The modal contains input fields where the user can change the relevant data such as name, category, etc.
Save Changes: After the user has made the desired changes in the modal, they can click a Save button, and the changes will be saved and updated in the Jobsite table.
![image](https://github.com/user-attachments/assets/d6c20800-dac9-4780-bc24-17459f63fbe5)
![image](https://github.com/user-attachments/assets/679ac319-927c-42fd-9b98-9824c6b66a49)




 




 
