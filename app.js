/* As a frequent diner, you love trying out new restaurants and experimenting with different foods. However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat.

In this project, you’ll use JavaScript to randomly create a three-course meal based on what is available on a menu. We’ll keep running it until we’re satisfied with the generated meal! */

const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers() {
      return this._courses.appetizers;
    },
    get mains() {
      return this._courses.mains;
    },
    get desserts() {
      return this._courses.desserts;
    },
    set appetizers(app) {
      this._courses.appetizers = app;
    },
    set mains(main) {
      this._courses.mains = main;
    },
    set desserts(dessert) {
      this._courses.desserts = dessert;
    },
    get courses() {
      return {
        appetizer: this.appetizers,
        main: this.mains,
        dessert: this.desserts
      }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      };
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The total price for your meal is ${totalPrice} euros.`
//    // I had some trouble here logging the correct message to the console as I initially used ${appetizer} etc., without the property keys. Once I realized that mistake and fixed it, the program worked perfectly!
    }
  };
  
  menu.addDishToCourse('appetizers', 'insalata caprese', 8.50);
  menu.addDishToCourse('appetizers', 'carpaccio', 10.00);
  menu.addDishToCourse('appetizers', 'tomato soup', 6.50);
  menu.addDishToCourse('mains', 'entrecote', 19.50);
  menu.addDishToCourse('mains', 'trout', 16.00);
  menu.addDishToCourse('mains', 'risotto', 13.50);
  menu.addDishToCourse('desserts', 'tiramisu', 7.50);
  menu.addDishToCourse('desserts', 'chocolate mousse', 5.00);
  menu.addDishToCourse('desserts', 'cheese plank', 9.50);
  const meal = menu.generateRandomMeal();
  console.log(meal);
