const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const users = new Map(); // Map to store user data

// Function to handle user signup
const signup = () => {
    rl.question('Enter username: ', (username) => {
        if (users.has(username)) {
            console.log('Username already exists. Try logging in.');
            mainMenu();
        } else {
            rl.question('Enter password: ', (password) => {
                users.set(username, password);
                console.log('Signup successful!');
                mainMenu();
            });
        }
    });
};

// Function to handle user login
const login = () => {
    rl.question('Enter username: ', (username) => {
        if (!users.has(username)) {
            console.log('Username not found. Try signing up.');
            mainMenu();
        } else {
            rl.question('Enter password: ', (password) => {
                if (users.get(username) === password) {
                    console.log('Login successful!');
                } else {
                    console.log('Incorrect password. Try again.');
                }
                mainMenu();
            });
        }
    });
};

// Main menu function
const mainMenu = () => {
    console.log('\n1. Signup');
    console.log('2. Login');
    console.log('3. Exit');
    rl.question('Choose an option: ', (option) => {
        switch(option) {
            case '1':
                signup();
                break;
            case '2':
                login();
                break;
            case '3':
                rl.close();
                break;
            default:
                console.log('Invalid option. Please try again.');
                mainMenu();
        }
    });
};

// Start the program
mainMenu();
