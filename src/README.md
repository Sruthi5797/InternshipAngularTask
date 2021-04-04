# Angular Internship Task



## How it is developed ?

This task is to create a single page application using Angular2
 - Load the provided data.json file
 - Use a route /list-sorted-by-name from the given 
 - Contains two components 
      * Parent component
      * Child component 
 - List is
      * Sorted alphabetically by name, with their preferred language and price
      * Blue fonts represent men and Red fonts represent Woman
      * Items in the list should be selectable
 - Child to Parent communication
      * The currently chosen user from the list in child is displayed as **Currently selected user is:** in the Parent component
 - Parent to Child communication
      * A button onClick in Parent component unselects the user in child component


## Dirs
 * src/app
    * Components
        * view-list component - Child Component
        * select-value component - Parent component

## Child to Parent communication
  - Using EventEmitter and @Output 
## Parent to child communication
  - Using @ViewChild

## Usage
* Build project
    * _npm run build_
* To install package
    * _npm install < package-name >_
* start application
    * _npm start_

## Sample Screenshot
![SampleImage](/sample_image.PNG width="50" height="50")

