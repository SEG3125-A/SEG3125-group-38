// "global" variables for selected preferences
var dietaryRestrictionSelection = "";
var productPreferenceSelection = "";

// all dietary restrictions and product preferences
const dietaryRestrictions = ["Vegetarian", "Gluten-Free", "None"];
const groceryProductPreferences = ["Organic", "Non-Organic"];

// randomly selected organic and non-organic products
const productList = {
  "Beef": {
    restrictions: ["Gluten-Free"],
    isOrganic: false,
  },
  "Eggs": {
    restrictions: ["Vegetarian", "Gluten-Free"],
    isOrganic: false,
  },
  "Milk": {
    restrictions: ["Vegetarian", "Gluten-Free"],
    isOrganic: false,
  },
  "Carrots": {
    restrictions: ["Vegetarian", "Gluten-Free"],
    isOrganic: true,
  },
  "Broccoli": {
    restrictions: ["Vegetarian", "Gluten-Free"],
    isOrganic: true,
  },
  "Pasta": {
    restrictions: ["Vegetarian"],
    isOrganic: false,
  },
  "Rice": {
    restrictions: ["Vegetarian", "Gluten-Free"],
    isOrganic: false,
  },
  "Fish": {
    restrictions: ["Gluten-Free"],
    isOrganic: true,
  },
  "Oats": {
    restrictions: ["Vegetarian"],
    isOrganic: true,
  },
  "Yogurt": {
    restrictions: ["Vegetarian", "Gluten-Free"],
    isOrganic: false,
  }
};

// get the targeted products based off dietary restrictions
const getTargetedProducts = (dietaryRest, productPref) => {
  var res = [];
  var isOrganic = productPref === "Organic";
  var noRestriction = dietaryRest === "" || dietaryRest === "None";

  for (var product of Object.keys(productList)) {
    if ((productList[product].restrictions.includes(dietaryRest) || noRestriction) 
        && (isOrganic === productList[product].isOrganic || productPref === "")) {
      res.push(product)
    }
  }

  return res;
};

// update the displayed products
const updateTargetedProducts = () => {
  var products = getTargetedProducts(
    dietaryRestrictionSelection, 
    productPreferenceSelection
  );

  const field = document.getElementById("productList");
  field.innerHTML = '';

  for (var product of products) {
    field.appendChild(createProductNode(product));
  }
