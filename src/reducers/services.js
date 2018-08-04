const expensesReducerDefaultState = [
  {
    id: "1",
    icon:
      "//504080.com/uploads/service_categories/46bd8ac9fd62bbc57199ea1f2c4a58aa97934ebc.png",
    title: "Accountancy",
    count: 68
  },
  {
    id: "2",
    icon: "//504080.com/development/service-directories/associations.png",
    title: "Associations",
    count: 15
  },
  {
    id: "3",
    icon: "//504080.com/img/no-service-category-icon.png",
    title: "Buy sell dental practice",
    count: 4
  },
  {
    id: "36",
    icon: "//504080.com/img/no-service-category-icon.png",
    title: "BUY/SELL Dental Practice",
    count: 6
  },
  {
    id: "37",
    icon: "//504080.com/img/no-service-category-icon.png",
    title: "BUY/SELL Dental Practice",
    count: 6
  }
];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_SERVICES":
      return action.services;
    default:
      return state;
  }
};
