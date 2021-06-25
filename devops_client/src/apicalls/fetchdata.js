import axios from "axios";

const fetchdata = async () => {
  try {
    let a = await axios.get("http://localhost:5000/api/person");
    return a.data;
  } catch (e) {
    return [];
  }
};

export default fetchdata;
