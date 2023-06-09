const menu = [
  {
    id: 1,
    title: 'Sampler Platter',
    category: 'entreé',
    price: 23,
    img:
      'assets/LogoFork-03.png',
    desc: `Quesa taco or bbq slider, Nachos, Green Goddess Sauté and Smack-N-Mac!`,
    avail: false, 
  },
  {
    id: 2,
    title: 'BBQ Soul Plate',
    category: 'entreé',
    price: 18,
    avail: true, 
    img:
      'assets/menu-items/soulPlate.jpeg',
    desc: `Embark on a flavorful journey with our BBQ Soul Plate, featuring our signature vegan pulled barbecue paired with creamy, spicy Smack-N Mac-N-Cheese. Served with a soft Paratha flatbread and our tender, sautéed Green Goddess greens. It's a symphony of soulful flavors all on one plate!`,
  },
  {
    id: 3,
    title: 'Soul Nachos',
    category: 'entreé',
    price: 16,
    avail: true, 
    img: 'assets/menu-items/soulNachos.jpeg',
    desc: `Dive into our corn chips generously smothered in tangy BBQ sauce and topped with Santa Fe jackfruit and sautéed green goddess. Garnished with fresh pico de gallo, a drizzle of crema, and a sprinkle of feta cheese for a harmonious blend of flavors and textures. Jumbo for $20.`,
    dietary: [],
  },{
    id: 5,
    title: 'BBQ Nachos',
    category: 'entreé',
    price: 16,
    avail: true, 
    img:
      'assets/menu-items/bbqNachos.jpeg',
    desc: `Dig into our corn chips lavishly smothered in a homemade vegan cheese sauce, spiced with red and green chilis. Topped with BBQ jackfruit meat, pico de gallo, a drizzle of BBQ sauce, crumbled feta, and fiery jalapeños for a jumbo-sized explosion of flavors! Jumbo for $20`,
  },
  {
    id: 4,
    title: 'Nachos Supreme',
    category: 'entreé',
    price: 16,
    avail: false, 
    img:
      'assets/menu-items/nachos_1.jpeg',
    desc: `Corn chips smothered in our homemade vegan cheese sauce, made with dairy-free cheese, green and red chilis, and topped with Walnut meat, pico de gallo, crema, and jalapeños. Jumbo for $20 `,
  },
  {
    id: 6,
    title: 'Soul Plate Wrap',
    category: 'entreé',
    price: 13,
    avail: true, 
    img:
      'assets/menu-items/soulWrap.jpeg',
    desc: `Embark on a flavor journey with our Soul Plate Wrap. It's our signature vegan pulled BBQ, creamy Cajun mac and cheese, and tender sautéed greens, all bundled up in a soft Paratha flatbread. A harmonious blend of our best, in one handy, delicious package!`,
  },
  {
    id: 7,
    title: 'Santa Fé Quesa Tacos',
    category: 'entreé',
    price: 15,
    avail: false, 
    img:
      'assets/menu-items/quesa_tacos.png',
    desc: `3 tortilla filled with vegan cheese, Santa Fé Chikun Mix (jackfruit & banana blossom), and toasted to perfection. Served with avocado crema & pico d gallo. \nComes in flour or corn tortillas upon request.`,
  },
  {
    id: 8,
    title: 'Beeph Quesa Tacos',
    category: 'entreé',
    price: 15,
    avail: false, 
    img:
      'assets/menu-items/quesa_tacos.png',
    desc: `3 tortilla filled with vegan cheese, yummy walnut taco meat, and toasted to perfection. Served with avocado crema & pico d gallo. \nComes in flour or corn tortillas upon request.`,
  },
  {
    id: 10,
    title: 'Pulled BBQ Sandwich',
    category: 'entreé',
    price: 9,
    avail: true, 
    img:
      'assets/menu-items/bbqSandwich.jpeg',
    desc: `Savor our unique blend of jackfruit and banana blossom, pulled and generously smothered in our tangy BBQ sauce. Served on a toasted bun with a side of spicy Cajun coleslaw for a flavorful, texture-rich feast!`,
  },
  {
    id: 9,
    title: 'Phish Sandwich',
    category: 'entreé',
    price: 9,
    avail: true, 
    img:
      'assets/menu-items/phish_sandwich.PNG',
    desc: `Savor our vegan sensation, a crispy banana blossom 'fish' with tangy Cajun coleslaw on a toasted bun. Finished with a rich tartar sauce for a crunchy, creamy, and spicy delight!`,
  },
  {
    id: 11,
    title: 'Phish Tacos',
    category: 'entreé',
    price: 15,
    avail: true, 
    img:
      'assets/LogoFork-03.png',
    desc: `Savor our trio of warm tortillas each filled with a golden, crispy banana blossom 'fish'. Topped off with a tangy Cajun slaw for a flavorful crunch. An enticing twist on a classic that's sure to delight!`,
  },
  {
    id: 20,
    title: 'Smack-N Mac-N-Cheese',
    category: 'sides',
    price: 9,
    avail: true, 
    img:
      'assets/menu-items/mac.jpeg',
    desc: `Delve into our creamy, cheesy, vegan mac & cheese, infused with bold Cajun flavors. A familiar comfort dish, reinvented with a kick, that's truly unforgettable!`,
  },
  {
    id: 21,
    title: 'Green Goddess Sauté',
    category: 'sides',
    price: 5,
    avail: true, 
    img:
      'https://www.eatwell101.com/wp-content/uploads/2023/01/Braised-Collard-Greens-and-Cabbage-recipe.jpg',
    desc: `Indulge in our expertly sautéed, seasoned collard greens and cabbage, tender and bursting with flavor. A nourishing celebration of greens.`,
  },
  {
    id: 23,
    title: 'Seasoned Waffle Fries',
    category: 'sides',
    price: 4,
    avail: true, 
    img:
      'https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/wlczfrmv/51617d17-61b2-4383-acc9-6e57a957854d.jpg',
    desc: `Indulge in our crispy, golden waffle fries, perfectly seasoned to enhance their natural potato flavor. The ideal balance of crunchy exterior and fluffy interior makes for an irresistible side or snack.`,
  },
  {
    id: 25,
    title: 'Sweet Potato Pound Cake',
    category: 'dessert',
    price: 5,
    avail: true, 
    img:
      'assets/menu-items/cake.jpeg',
    desc: `Enjoy our moist, rich sweet potato pound cake, topped with a zesty citrus glaze and crunchy pecans. A delightful balance of sweet and tangy that's simply irresistible!`,
  },
  {
    id: 26,
    title: 'Lemon Pound Cake',
    category: 'dessert',
    price: 5,
    avail: true, 
    img:
      'https://www.seasonsandsuppers.ca/wp-content/uploads/2021/07/lemon-loaf-1200.jpg',
    desc: `Delight in our Vegan Lemon Pound Cake, a moist, citrusy treat bursting with the tangy freshness of lemon. Finished with a sweet, zesty lemon glaze, it's a slice of sunshine in every bite!`,
  },
  {
    id: 31,
    title: 'Activated Charcoal Lemonade',
    category: 'drink',
    price: 6,
    avail: false, 
    img:
      'assets/menu-items/blackLemonade.jpeg',
    desc: `Elderberry | Lemon Juice | Agave | Spring Water | Activated Charcoal`,
  },
  {
    id: 32,
    title: 'Elderberry Lemonade',
    category: 'drink',
    price: 6,
    avail: false, 
    img:
      'assets/menu-items/purpleLemonade.jpeg',
    desc: `Elderberry | Lemon Juice | Agave | Spring Water`,
  },
  {
    id: 24,
    title: 'Caribbean Beeph Patty',
    category: 'sides',
    price: 5,
    avail: false, 
    img:
      'assets/LogoFork-03.png',
    desc: `Elderberry | Lemon Juice | Agave | Spring Water`,
  },

  {
    id: 30,
    title: 'Water',
    category: 'drink',
    price: 1.5,
    avail: false, 
    img:
      'assets/LogoFork-03.png',
    desc: `Cold Spring Water`,
  },
]
export default menu
