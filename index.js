const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://127.0.0.1:27017/recipe-app';

//Method 1 : Using Async Await

const manageRecipes = async () => {
  try {
    // Connection to the database "recipe-app"
    const dbConnection = await mongoose.connect(MONGODB_URI);
    console.log(`Connected to the database: "${dbConnection.connection.name}"`);

    // Before adding any recipes to the database, let's remove all existing ones
    await Recipe.deleteMany();


    // Run your code here, after you have insured that the connection was made
  
    let newRecipe = {
      title: "fruit salad",
      level: "Easy Peasy",
      ingredients: ['apple', 'papaya', 'banana'],
      cuisine: "brazilian",
      dishType: "snack",
      image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Four-Fruit-Compote_exps1005_BB2406671D07_20_6bC_RMS-9.jpg?fit=700,1024',
      duration: 10,
      creator: "Mike"
    }
    //Interation 2
    const recipes = await Recipe.create(newRecipe);
    console.log(recipes)

    //Interation 3
    let allRecipes = await Recipe.insertMany(data);
    console.log(allRecipes);

    //Interation 4
    let updatedRecipe = await Recipe.findOneAndUpdate({title: 'Rigatoni alla Genovese'}, {duration: 100});
    console.log(updatedRecipe);

    //Interation 5
    let deletedRecipe = await Recipe.deleteOne({title: 'Carrot Cake'});
    console.log(deletedRecipe);

    //Interation 6
    mongoose.disconnect();



  } catch (error) {
    console.log(error);
  }
};

manageRecipes();

