const readline = require('readline');

// Create an interface to read from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// In-memory storage for users and inventory

let users = {};        // { username: password }
let inventory = {};   // { itemName: quantity }

// Main menu function
const mainMenu = () => {
  console.log('\n1. Sign Up');
  console.log('2. Login');
  console.log('3. Exit');
  rl.question('Choose an option: ', (option) => {
    switch (option) {
      case '1':
        signUp();
        break;
      case '2':
        login();
        break;
      case '3':
        console.log('Goodbye!');
        rl.close();
        break;
      default:
        console.log('Invalid option. Try again.');
        mainMenu();
    }
  });
};

// Sign Up function
const signUp = () => {
  rl.question('Enter a username: ', (username) => {
    rl.question('Enter a password: ', (password) => {
      if (users[username]) {
        console.log('Username already exists. Try logging in.');
        mainMenu();
      } else {
        users[username] = password;
        console.log('Sign up successful! Please log in.');
        login();
      }
    });
  });
};

// Login function
const login = () => {
  rl.question('Enter your username: ', (username) => {
    rl.question('Enter your password: ', (password) => {
      if (users[username] === password) {
        console.log('Login successful!');
        userMenu();
      } else {
        console.log('Invalid username or password. Try again.');
        mainMenu();
      }
    });
  });
};

// User Menu function
const userMenu = () => {
  console.log('\n1. Check Item');
  console.log('2. Add Item');
  console.log('3. Delete Item');
  console.log('4. Update Item');
  console.log('5. Logout');
  rl.question('Choose an option: ', (option) => {
    switch (option) {
      case '1':
        checkItem();
        break;
      case '2':
        addItem();
        break;
      case '3':
        deleteItem();
        break;
      case '4':
        updateItem();
        break;
      case '5':
        console.log('Logging out...');
        mainMenu();
        break;
      default:
        console.log('Invalid option. Try again.');
        userMenu();
    }
  });
};

// Check Item function
const checkItem = () => {
  rl.question('Enter item name to check: ', (itemName) => {
    if (inventory[itemName] !== undefined) {
      console.log(`${itemName}: ${inventory[itemName]}`);
    } else {
      console.log(`Item ${itemName} does not exist.`);
    }
    userMenu();
  });
};

// Add Item function
const addItem = () => {
  rl.question('Enter item name: ', (itemName) => {
    rl.question('Enter item quantity: ', (quantity) => {
      quantity = parseInt(quantity, 10);
      if (!itemName || isNaN(quantity) || quantity <= 0) {
        console.log('Invalid item name or quantity. Try again.');
        addItem();
        return;
      }
      if (!inventory[itemName]) {
        inventory[itemName] = 0;
      }
      inventory[itemName] += quantity;
      console.log(`Added ${quantity} of ${itemName}.`);
      userMenu();
    });
  });
};

// Delete Item function
const deleteItem = () => {
  rl.question('Enter item name to delete: ', (itemName) => {
    if (inventory[itemName] !== undefined) {
      delete inventory[itemName];
      console.log(`Deleted item ${itemName}.`);
    } else {
      console.log(`Item ${itemName} does not exist.`);
    }
    userMenu();
  });
};

// Update Item function
const updateItem = () => {
  rl.question('Enter item name to update: ', (itemName) => {
    if (inventory[itemName] !== undefined) {
      rl.question('Enter new quantity: ', (newQuantity) => {
        newQuantity = parseInt(newQuantity, 10);
        if (isNaN(newQuantity) || newQuantity < 0) {
          console.log('Invalid quantity. Try again.');
          updateItem();
          return;
        }
        inventory[itemName] = newQuantity;
        console.log(`Updated ${itemName} to quantity ${newQuantity}.`);
        userMenu();
      });
    } else {
      console.log(`Item ${itemName} does not exist.`);
      userMenu();
    }
  });
};

// Start the application
console.log('Welcome to the Inventory Management System');
mainMenu();
