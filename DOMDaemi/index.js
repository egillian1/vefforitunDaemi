/* Create a self-firing function that is activated when the JavaScript
 * code is loaded. This prevents the global scope of the site from
 * being cluttered with variables that are not needed and prevents
 * other global functions/variables from being overridden.
 */
(function() {
  console.log("Javascript loaded");

  // Find the following elements in the DOM tree and make them accessible to
  // JavaScript as variables
  var addItemButton = document.getElementById("addItem");
  var deleteAllButton = document.getElementById("deleteAll");
  var textField = document.getElementById("thingToDo");
  var itemList = document.getElementById("items");
  var wrapper = document.getElementById("wrapper");

  addItemButton.addEventListener("click", appendItemToList);
  deleteAllButton.addEventListener("click", deleteAllItems);

  console.log("Retrieving previous session entries");
  // JSON is a format for storing data. When receiving JSON data, the first
  // thing to do is to parse the data, i.e. convert it from JSON format
  // back into usable JavaScript code. Here we are getting JSON data from
  // localStorage under the name "entries" and making it available to
  // our script. Check the function saveItemsToStorage() to see the opposite.
  var storedEntries = JSON.parse(window.localStorage.getItem("entries"));

  // Check if any previous entries are present and add them to current list
  if(storedEntries){
    for (var i = 0; i < storedEntries.length; i++) {
      console.log("Previous entry added");
      appendItemToList(storedEntries[i].text);
    }
  }



  function appendItemToList(externalEntry){
    console.log("Appending item to list");
    var text = textField.value;

    // Check if toDoItem to be added is from the text field on the page or
    // from another source (localStorage in this case)
    if(typeof externalEntry === 'string'){
      text = externalEntry;
    }

    // Create elements needed to add an item to the to-do list
    var toDoContainer = document.createElement("div");
    var toDoContent = document.createElement("p");
    var deleteButton = document.createElement("button");

    deleteButton.addEventListener("click", deleteItem);

    // Add classes dynamically to the delete button and container
    // for each to do item
    deleteButton.className += "deleteItem";
    toDoContainer.className += "toDoItem";

    toDoContent.textContent = text;
    deleteButton.textContent = "Delete Item";

    // Add button and content to container. Note: So far, this element is
    // not visible because it is not part of the DOM (i.e. the page)
    toDoContainer.appendChild(toDoContent);
    toDoContainer.appendChild(deleteButton);

    // Add the container (and its content) to the itemList. Once this is
    // complete, the content is visible since it is now part of the
    // document (and its DOM tree)
    itemList.appendChild(toDoContainer);

    // Add to-do container and its items to local storage
    localStorage.setItem('itemList', itemList);

    // Once element has been added, update the localStorage so it contains the
    // same list as the page
    saveItemsToStorage();
  }



  function deleteItem(){
    console.log("Deleting item");
    // "this" is the Delete Item button in this case ("this" refers to the
    // item that called the function). We don't just want to delete the button,
    // we want to delete the container and everything in it. So, we take the
    // parent element of the button (the container) and remove that item
    // from the item list in stead. Now the entire list item and its
    // content is deleted.
    var itemToDelete = this.parentNode;
    itemList.removeChild(itemToDelete);

    // Once element has been removed, update the localStorage so it contains the
    // same list as the page
    saveItemsToStorage();
  }



  function deleteAllItems() {
    console.log("Removing all items");

    // Note: When using getElementsByClassName(), the function does not
    // return a single DOM element. It returns an array containing
    // all the elements of a specific class.
    var itemsToDelete = document.getElementsByClassName("toDoItem");

    // The array is "live" meaning that when we remove an element from the
    // array, the deleted element is popped from the array itself. Using a for
    // loop would be difficult here. It is better to use a while loop and pop
    // the first element until there are no further elements to be removed.
    while(itemsToDelete[0]) {
      itemsToDelete[0].parentNode.removeChild(itemsToDelete[0]);
    }

    // Once elements have been removed, update the localStorage so it contains the
    // same list as the page
    saveItemsToStorage();
  }



  function saveItemsToStorage() {
    var objectArray = [];
    var items = document.querySelectorAll('.toDoItem');

    // Take all toDoItem elements, extract the text within, create an object
    // for each text and add the object to the array
    for (var i = 0; i < items.length; i++) {
      var currentParagraph = items[i].querySelector("p");
      var paragraphText = currentParagraph.innerText;
      var tmpObject = {text: paragraphText};
      objectArray.push(tmpObject);
    }

    // Here we are taking data (our array of objects) and "encoding" them into
    // JSON format to be stored in localStorage.
    var stringified = JSON.stringify(objectArray);

    // Once the encoding is complete, we store the variable under "entries". It
    // is now available in the global scope of the document and the JSON data
    // can now be accessed using localStorage.entries 
    localStorage.setItem("entries", stringified);
  }

})();
