const expensesReducerDefaultState = [
  {
    id: "1",
    icon: "/images/services/46bd8ac9fd62bbc57199ea1f2c4a58aa97934ebc.png",
    title: "Accountancy",
    count: 68
  },
  {
    id: "2",
    icon: "/images/services/associations.png",
    title: "Associations",
    count: 15
  },
  {
    id: "3",
    icon: "/images/services/no-service-category-icon.png",
    title: "Buy sell dental practice",
    count: 4
  },
  {
    id: "36",
    icon: "/images/services/no-service-category-icon.png",
    title: "BUY/SELL Dental Practice",
    count: 6
  },
  {
    id: "37",
    icon: "/images/services/no-service-category-icon.png",
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
