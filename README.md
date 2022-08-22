# Angular My Store

This is an Angular 13 application for project: `My Store` in the `FullStack JavaScript Developer Nanodegree` by [Udacity](udacity.com).

---

This a simple e-commerce app that shows a shopping list and a cart. Add items to your cart by selected the amount in the dropdown and pressing the `+` button.

The item card will show you the amount in the card but the dropdown will always add the selected number, meaning that the amount selected in the dropdown is not a reflection of the amount of the item in the cart.

Once in the cart, you will have the option to remove items from you cart. Same as in the shopping list, you will see the amount in the cart and the dropdown will allow you to add or remove items as you want. See that if you have for example, 5 items and in the dropdown select 2 and press the `-` button you will now have only 3 of the item in the cart, same for adding, if you press the `+` button you would have 7 items in the cart.

Once you want to checkout, just add your information and press the `Submit` button.

---

## Scripts
First run `npm i` to install all necessary `node_modules`.

### Run local development server
* `npm run start`: This will start a local server, navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Run Unit Tests
* `npm run test`: This will execute the unit tests via [Karma](https://karma-runner.github.io).

### Run Linter
* `npm run lint`: This will run the linter to check the code.

### Build app
* `npm run build`: Run this command to build the project. The build artifacts will be stored in the `dist/` directory.
