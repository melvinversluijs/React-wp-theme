import axios from "axios";

// Set baseUrl for axios.
const setBaseUrl = () => {
  // Check if the base url is present.
  const baseApiUrl = WP_React.hasOwnProperty("api_url")
    ? WP_React.api_url
    : false;

  if (baseApiUrl) {
    // If so, set it.
    axios.defaults.baseURL = baseApiUrl;
  }
};

// Export function.
export default setBaseUrl;
