const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let users = {};        
let inventory = {};   


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


const signUp = () => {
  rl.question('Enter a username: ', (username) => {
    rl.question('Enter a password: ', (password) => {
      if (users.username) {
        console.log('Username already exists. Try logging in.');
        mainMenu();
      } else {
        users.username = password;
        console.log('Sign up successful! Please log in.');
        login();
      }
    });
  });
};


const login = () => {
  rl.question('Enter your username: ', (username) => {
    rl.question('Enter your password: ', (password) => {
      if (users.username === password) {
        console.log('Login successful!');
        userMenu();
      } else {
        console.log('Invalid username or password. Try again.');
        mainMenu();
      }
    });
  });
};


const userMenu = () => {
  console.log('\n1. Add Item');
  console.log('2. Check Inventory');
  console.log('3. Logout');
  rl.question('Choose an option: ', (option) => {
    switch (option) {
      case '1':
        addItem();
        break;
      case '2':
        checkInventory();
        break;
      case '3':
        console.log('Logging out...');
        mainMenu();
        break;
      default:
        console.log('Invalid option. Try again.');
        userMenu();
    }
  });
};


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


const checkInventory = () => {
  console.log('Current Inventory:');
  for (const [item, quantity] of Object.entries(inventory)) {
    console.log(`${item}: ${quantity}`);
  }
  userMenu();
};


console.log('Welcome to the Inventory Management System');
mainMenu();
