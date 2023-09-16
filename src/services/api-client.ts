import axios from "axios";

export default axios.create({
  baseURL: "https://api.edamam.com/api/recipes",
  params: {
    type: "public",
    q: "salad",
    app_id: "ceedd357",
    app_key: "da9ab23e5c43c8c9d5c0f4b70b1d755c",
  },
});
