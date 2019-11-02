import axios from "axios";

const getTwoMoreQs = (product_id, page = 1, count = 2) => {
  return dispatch => {
    return (
      axios
        .get(
          `http://18.223.1.30/qa/${product_id}/?&page=${page}&count=${count}`
        )
        // .get(`http://18.223.1.30/qa/8/?&page=3&count=2`)
        .then(({ data }) => {
          dispatch({ type: "GET_TWO_MORE_QS", questions: data.results });
        })
        .catch(err => {
          console.log("Err in getTwoMoreQs", err);
        })
    );
  };
};

export default getTwoMoreQs;
