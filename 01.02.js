// var vs let vs const

//Let and var can be reassigned when run
//let name; 'Amelia'
//name = 'Amelia'
//console.log(name);

//Const Cannot be reassigned or will not change
//const number = 15
//console.log(number)

//let x = 10;

// Git
// Version control system designed to keep chronological timeline of all of your code changes.
// To traverse file system in terminal:
// cd name_of_folder > moves you down
// cd .. > moves you up
// ls > lists items inside existing folder
// pwd > specifies directory path you're currently in

// To initiate a git repository
// git init
// Staging files for a commit
// git status
// git add <file_name> <-- file name that I would want to add OR git add . 
// to add all of the files inside of the folder that you are in and stage them for commit
// git reset will revert back

// To commit your changes, run the following command:
// git commit -m "Your commit message here"

// To view the commit:
// git log
// Shows us commit hash, branch name, commit message, and other metadata

// Go to GitHub.com and create the repository
// Name or repository, make sure to leave it public and keep all other options deselected
// Click create repository
// Copy the HTTPS url provided (one that ends with .git)
// Go back to VScode
// Link you repository with remote repository by typing:
// git remote add origin <paste the link>
// To push to remote repository
// git push origin master