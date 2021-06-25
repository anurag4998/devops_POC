import axios from "axios";

const deleteData = async (data) => {
  delete data.tableData;
  try {
    await axios.delete(
      "http://localhost:5000/api/person",
      {
        data: data,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return true;
  } catch (e) {
    return false;
  }
};

export default deleteData;
