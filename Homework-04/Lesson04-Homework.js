const fs = require('fs-extra')

fs.mkdirpSync("First_directory");

fs.createFileSync("First_directory/FirstFile.txt");

fs.mkdirpSync("Second_directory");

fs.moveSync("First_directory/FirstFile.txt", "Second_directory/FirstFile.txt");

fs.mkdirpSync("Third_directory");

fs.copySync("Second_directory/FirstFile.txt", "Third_directory/FirstFile.txt");

fs.removeSync("Second_directory/FirstFile.txt");

fs.removeSync("Third_directory/FirstFile.txt");

fs.removeSync("First_directory");

fs.removeSync("Second_directory");

fs.removeSync("Third_directory");

