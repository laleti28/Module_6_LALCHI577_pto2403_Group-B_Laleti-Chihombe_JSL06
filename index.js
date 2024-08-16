// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById("menu");

    // Loop through each category and its items in the menu object

    for (const category in menu) {
        if (menu.hasOwnProperty(category)) ;
      

        // Create an element to represent the category
        const categoryTitle = document.createElement("h3");
       
        // Set the text content of the category element to the category name
        categoryTitle.textContent = category;
       

        // Append the category element to the menu container
        menuContainer.appendChild(categoryTitle);

        // Create an element to represent a list of items
        const itemsList = document.createElement("ul");


        // Append a list of items element to the menu container
        menuContainer.appendChild(itemsList);

        // Loop through the items in the category and create list items
        menu[category].forEach((item) => {
            console.log(` - ${item}`);

            // Create a list item element
            const itemElement = document.createElement('li');

            // Set the text content of the list item element to the item name
            itemElement.textContent = item;

            // Attach a click event listener to the list item to add it to the order
            itemElement.addEventListener('click', () => {
            addToOrder(item);
            });

            // Append the list item to the list of items
            itemsList.appendChild(itemElement);
     });
        }
              }









    

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderItems = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');
    
    // Create a list item for the order
    

    // Set the text content of the list item to the item name
    const orderItem = document.createElement('li');
    orderItem.textContent = itemName;
   

    // Append the list item to the order items list
     orderItems.appendChild(orderItem);


    // Calculate and update the total price
    const price = 15; // You can replace this with actual price data
    const currentTotal = parseFloat(orderTotalElement.textContent);
    const newTotal = currentTotal + price;


    // Update the text content of the order total element with the new total
    orderTotalElement.textContent = newTotal.toFixed(2);
}


// Function to initialize the menu system
function initMenuSystem(menu) {

    // Call the function to display menu items
    displayMenuItems(menu); 
}


// Start the menu system by calling the init function
initMenuSystem(menu);


