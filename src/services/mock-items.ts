export let ITEMS = [
  {
    id: 1,
    name: "Grilled Chicken Salad",
    price: 100,
    category_id: 2,
    restaurant_id: 1,
    thumb: "assets/img/items/Grilled Chicken Salad.jpg",
    desc: "A salad served with chicken, vegetables and cheese which is simply nutritious",
    ingredients: [
      {
      id: 1,
      name: 'Grilled Chicken',
      quantity_g: '94'
      },
      {
      id: 2,
      name: 'Romain Lettuce',
      quantity_g: '120',
      },
      {
      id: 3,
      name: 'Cherry Tomatoes',
      quantity_g: '30'
      },
      {
      id: 4,
      name: 'cucumber',
      quantity_g: '40'
      },
      {
      id: 5,
      name: 'onion',
      quantity_g: '30'
      },
      {
      id: 6,
      name: 'low-fat Cheese',
      quantity_g: '28'
      },
      {
      id: 7,
      name: 'raspberry Vinaigrette',
      quantity_g: '25'
      }
    ],
    options: {
      required: [
        {
          id: 1,
          name: "Plain"
        },
        {
          id: 2,
          name: "Salt"
        }

      ],
      optional: [
        {
          id: 1,
          name: "Red Onion",
          price: 0
        },
        {
          id: 2,
          name: "Mozzarella",
          price: 2
        },
        {
          id: 3,
          name: "Ricotta",
          price: 2
        }

      ],
      }
  },
  {
    id: 2,
    name: "Grilled Fish with Chickpea Salad",
    price: 150,
    category_id: 2,
    restaurant_id: 1,
    thumb: "assets/img/items/grilled-fish-with-chickpea-salad-24996-1.jpg",
    desc: "A salad served with Fish and chickpeas, it is hard to believe that it is low-fat",
    ingredients: [
      {
      id: 5,
      name: 'Sweet Potato',
      quantity_g: '75'
      },
      {
      id: 6,
      name: 'Garlic',
      quantity_g: '3',
      },
      {
      id: 3,
      name: 'Cherry Tomatoes',
      quantity_g: '30'
      },
      {
      id: 7,
      name: 'Snapper Fish',
      quantity_g: '150'
      },
      {
      id: 6,
      name: 'Low-fat Cheese',
      quantity_g: '28'
      },
      {
      id: 8,
      name: 'Chickpeas',
      quantity_g: '30'
      },
      {
      id: 9,
      name: 'Baby Spinach',
      quantity_g: '25'
      },
      {
      id: 20,
      name: 'Apple Cider Vinegar',
      quantity_g: '20'
      }
    ],
    options: {
      required: [
        {
          id: 1,
          name: "Plain"
        },
        {
          id: 2,
          name: "Salt"
        }

      ],
      optional: [
        {
          id: 1,
          name: "Red Onion",
          price: 0
        },
        {
          id: 2,
          name: "Mozzarella",
          price: 2
        }
      ]
    }
  },
  {
    id: 3,
    name: "Grilled Shrimp Salad with Raspberry Vinaigrette",
    price: 150,
    category_id: 2,
    restaurant_id: 1,
    thumb: "assets/img/items/Grilled Shrimp Salad with Raspberry Vinaigrette.jpg",
    desc: "Tender grilled shrimp nestled on a bed of fresh greens, mushrooms and oranges, tossed with a fat-free raspberry vinaigrette",
    ingredients: [
      {
      id: 5,
      name: 'Snow Peas',
      quantity_g: '40'
      },
      {
      id: 6,
      name: 'Shrimps',
      quantity_g: '120',
      },
      {
      id: 3,
      name: 'Extra Virgin Olive Oil',
      quantity_g: '3.75'
      },
      {
      id: 7,
      name: 'Lemon Pepper Seasoning',
      quantity_g: '1'
      },
      {
      id: 8,
      name: 'Romain Lettuce',
      quantity_g: '120'
      },
      {
      id: 9,
      name: 'Mushrooms',
      quantity_g: '50'
      },
      {
      id: 10,
      name: 'Mandarin Oranges',
      quantity_g: '100'
      },
      {
      id: 11,
      name: 'Raspberry Vinaigrette',
      quantity_g: '25'
    }
  ],
  options: {
    required: [
      {
          id: 1,
          name: "Plain"
        },
        {
          id: 2,
          name: "Salt"
        }

      ],
      optional: [
        {
          id: 1,
          name: "Red Onion",
          price: 0
        },
        {
          id: 2,
          name: "Mozzarella",
          price: 2
        },
        {
          id: 3,
          name: "Ricotta",
          price: 2
        }
      ]
  }
},
  {
    id: 4,
    name: "Sweet Corn Soup",
    price: 60,
    category_id: 3,
    restaurant_id: 1,
    thumb: "assets/img/items/Sweet Corn Soup.jpg",
    desc: "An authentic Chinese soup, Sweet corn soup is not just limited to China but is loved by people all over the world.",
    ingredients: [
      {
      id: 5,
      name: 'Snow Peas',
      quantity_g: '40'
      },
      {
      id: 6,
      name: 'Shrimps',
      quantity_g: '120',
      },
      {
      id: 3,
      name: 'Extra Virgin Olive Oil',
      quantity_g: '3.75'
      },
      {
      id: 7,
      name: 'Lemon Pepper Seasoning',
      quantity_g: '1'
      },
      {
      id: 8,
      name: 'Romain Lettuce',
      quantity_g: '120'
      },
      {
      id: 9,
      name: 'Mushrooms',
      quantity_g: '50'
      },
      {
      id: 10,
      name: 'Mandarin Oranges',
      quantity_g: '100'
      },
      {
      id: 11,
      name: 'Raspberry Vinaigrette',
      quantity_g: '25'
      }
    ],
    options: {
      required: [
        {
          id: 1,
          name: "Plain"
        },
        {
          id: 2,
          name: "Salt"
        }
      ],
    }
},
  {
    id: 5,
    name: "Broccoli Soup",
    price: 60,
    category_id: 3,
    restaurant_id: 1,
    thumb: "assets/img/items/Broccoli Soup.jpg",
    desc: " Simple and Tasty Non-Dairy Broccoli Soup.",
    ingredients: [
      {
      id: 5,
      name: 'Onion',
      quantity_g: '30'
      },
      {
      id: 3,
      name: 'Extra Virgin Olive Oil',
      quantity_g: '3.75'
      },
      {
      id: 7,
      name: 'Garlic',
      quantity_g: '3'
      },
      {
      id: 8,
      name: 'Veg Stock',
      quantity_g: '240'
      },
      {
      id: 9,
      name: 'black pepper',
      quantity_g: '1'
      },
      {
      id: 10,
      name: 'potato',
      quantity_g: '75'
      },
      {
      id: 11,
      name: 'broccoli',
      quantity_g: '150'
      }
    ],
    options: {
      required: [
        {
          id: 1,
          name: "Plain"
        },
        {
          id: 2,
          name: "Salt"
        }
      ],

}
},
{
    id: 6,
    name: "Salmon Fried Rice",
    price: 150,
    category_id: 1,
    restaurant_id: 2,
    thumb: "assets/img/items/Salmon-Fried-Rice.jpg",
    desc: " A declicious fried rice for salmon lovers with mushroom.",
    ingredients: [
      {
      id: 5,
      name: 'Rice',
      quantity_g: '160'
      },
      {
      id: 3,
      name: 'Egg',
      quantity_g: '40'
      },
      {
      id: 7,
      name: 'Salmon Fillet',
      quantity_g: '80'
      },
      {
      id: 8,
      name: 'Mushroom',
      quantity_g: '50'
      },
      {
      id: 9,
      name: 'Green Peas',
      quantity_g: '35'
      },
      {
      id: 10,
      name: 'Soy Sauce',
      quantity_g: '8'
      },
      {
      id: 11,
      name: 'Sugar',
      quantity_g: '3.2'
      },
      {
      id: 11,
      name: 'Spring Onions',
      quantity_g: '10'
      }

    ],
    options: {
      required: [
        {
          id: 1,
          name: "Plain"
        },
        {
          id: 2,
          name: "Salt"
        }
      ],
}},

{
    id: 7,
    name: " Quinoa Fried Rice with Steamed Jumbo Seabass ",
    price: 235,
    category_id: 1,
    restaurant_id: 3,
    thumb: "assets/img/items/ Quinoa Fried Rice with Steamed Jumbo Seabass.jpg",
    desc: " Nourishing Quinoa Fried Rice. Serve with Steamed Giant Seabass and spicy seafood sauce.",
    ingredients: [
      {
      id: 5,
      name: 'Sea Bass',
      quantity_g: '115'
      },
      {
      id: 3,
      name: 'Quinoa Fried Rice',
      quantity_g: '160'
      },
      {
      id: 7,
      name: 'Fish Sauce',
      quantity_g: '10'
      },
      {
      id: 8,
      name: 'Lime Juice',
      quantity_g: '30'
      }
    ],
    options: {
      required: [
        {
          id: 1,
          name: "Plain"
        },
        {
          id: 2,
          name: "Salt"
        }
      ],
    }},
{
    id: 8,
    name: "Savoury Grilled Chicken Cranberry Quinoa Salad",
    price: 175,
    category_id: 2,
    restaurant_id: 3,
    thumb: "assets/img/items/ Savoury Grilled Chicken Cranberry Quinoa Salad.jpg",
    desc: " Cranberry Quinoa Salad with Ocha Grilled Chicken. Came with mixed vegetable, cranberry, carrot, corn, tomato. Dressing with creamy salad sauce.",
    ingredients: [
      {
      id: 5,
      name: 'Grilled Chicken',
      quantity_g: '94'
      },
      {
      id: 6,
      name: 'Cherry Tomatoes',
      quantity_g: '40',
      },
      {
      id: 3,
      name: 'Extra Virgin Olive Oil',
      quantity_g: '3.75'
      },
      {
      id: 7,
      name: 'Corn',
      quantity_g: '30'
      },
      {
      id: 8,
      name: 'Romain Lettuce',
      quantity_g: '75'
      },
      {
      id: 9,
      name: 'Carrot',
      quantity_g: '30'
      },
      {
      id: 10,
      name: 'Cranberry',
      quantity_g: '30'
      },
      {
      id: 11,
      name: 'low-fat Mayonaise',
      quantity_g: '30'
      }
    ],
    options: {
      required: [
{
          id: 1,
          name: "Plain"
        },
        {
          id: 2,
          name: "Salt"
        }

      ],
      optional: [
        {
          id: 1,
          name: "Red Onion",
          price: 0
        },
        {
          id: 2,
          name: "Mozzarella",
          price: 2
        },
        {
          id: 3,
          name: "Ricotta",
          price: 2
        }
      ]
}
  },
{
    id: 9,
    name: "Papaya Salad",
    price: 70,
    category_id: 2,
    restaurant_id: 4,
    thumb: "assets/img/items/som-tum-.jpg",
    desc: " Thai papaya salad also called 'som tum' or 'som tam' is a fun and spicy side dish. ",
    ingredients: [
      {
      id: 5,
      name: 'Green Papaya',
      quantity_g: '140'
      },
      {
      id: 3,
      name: 'Green Beans',
      quantity_g: '60'
      },
      {
      id: 7,
      name: 'Carrot',
      quantity_g: '50'
      },
      {
      id: 8,
      name: 'Soy Sauce',
      quantity_g: '10'
      },
      {
      id: 9,
      name: 'Cherry Tomatoes',
      quantity_g: '60'
      },
      {
      id: 10,
      name: 'Garlic',
      quantity_g: '5'
      },
      {
      id: 11,
      name: 'Sugar',
      quantity_g: '4'
      },
      {
      id: 11,
      name: 'Sea Salt',
      quantity_g: '4'
      },

      {
      id: 11,
      name: 'Peanuts',
      quantity_g: '10'
      }

    ],
    options: {
      required: [
        {
          id: 1,
          name: "Plain"
        },
        {
          id: 2,
          name: "Salt"
        }
      ],
}},{
    id: 10,
    name: "Chicken and Broccoli stir fry with Rice",
    price: 100,
    category_id: 1,
    restaurant_id: 4,
    thumb: "assets/img/items/Chicken-and-Broccoli-Stir-Fry-22.jpg",
    desc: " Ths healthy Chicken and Broccoli Stir Fry is an excellent go-to lunch or dinner option.",
    ingredients: [
      {
      id: 5,
      name: 'Extra Virgin Olive Oil',
      quantity_g: '5'
      },
      {
      id: 3,
      name: 'Onion',
      quantity_g: '30'
      },
      {
      id: 7,
      name: 'Garlic',
      quantity_g: '3'
    },]
  },
      {
      id: 8,
      name: 'Skinless chicken Thighs',
      quantity_g: '100'
      },
      {
      id: 9,
      name: 'Soy Sauce',
      quantity_g: '10'
      },
      {
      id: 11,
      name: 'Sugar',
      quantity_g: '3.2'
      },
      {
      id: 11,
      name: 'Broccoli',
      quantity_g: '90'
      },

      {
      id: 11,
      name: 'Rice',
      quantity_g: '150'
      }
]
