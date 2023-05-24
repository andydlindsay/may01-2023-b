console.log('inside client.js');

$('h2'); // selector
$('<h2>'); // <h2></h2>

// const $h2 = $('<h2>'); // <h2></h2>
// $h2.text('Welcome!'); // <h2>Welcome!</h2>
// $h2.addClass('heading'); // <h2 class="heading">Welcome!</h2>

// $(`<h2 class="heading">${message}</h2>`);

$(document).ready(() => {
  // grab the food-item container
  const $foodItemSection = $('#food-item-container');

  // grab the form
  const $form = $('#new-food-item');

  // attach a function to run on submit
  $form.on('submit', (event) => {
    // prevent the browser's default behaviour
    event.preventDefault();

    // turn the form's content into a urlencoded string
    const urlencodedString = $form.serialize();

    // make a POST request to the server with the form's data
    $.ajax({
      url: 'http://localhost:8000/food-items',
      method: 'POST',
      data: urlencodedString
    }).then(() => {
      console.log('food item created successfully!');

      // make a follow-up GET request to retrieve the newly created foodItem
      fetchFoodItems();
    });
  });

  // function to create an individual food-item article based off a foodItem object
  const createFoodItemElement = (foodItem) => {
    const $foodItem = $(`
      <article class="food-item">
        <div class="food-item-header">
          <h2>${foodItem.name} (${foodItem.id})</h2>
          <h3>Price: $${foodItem.price}</h3>
        </div>
        <hr/>
        <div class="food-item-footer">
          <h3>${foodItem.tagline}</h3>
          <h3>Calories: ${foodItem.calories}</h3>
        </div>
      </article>
    `);

    return $foodItem;
  };

  // function to render an array of food-item objects (turn them into DOM elements)
  const renderFoodItems = (arrOfFoodItems) => {
    $foodItemSection.empty();

    for (const foodItem of arrOfFoodItems) {
      const $foodItem = createFoodItemElement(foodItem);
      $foodItemSection.prepend($foodItem);
    }
  };

  // function for making GET requests to /food-items
  const fetchFoodItems = () => {
    $.ajax({
      url: 'http://localhost:8000/food-items',
      method: 'GET',
      success: (foodItems) => {
        console.log(foodItems);
        renderFoodItems(foodItems);
      }
    });
  };

  // make the inital GET request when the page loads
  fetchFoodItems();
});
