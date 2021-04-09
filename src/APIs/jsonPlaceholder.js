import axios from "axios";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  // "https://gist.githubusercontent.com/zverok/11182856/raw/f305ca9dc19c76673a71de9a288142176d579a4f/zagreb-geo.json",
});
