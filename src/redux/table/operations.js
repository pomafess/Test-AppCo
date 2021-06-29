import axios from "axios";
import actions from './actions';



axios.defaults.baseURL = "https://lit-fjord-57578.herokuapp.com";

export const getBlocks = (page, size) => async (dispatch) => {
  dispatch(actions.getRequest());
  try {
    const {data} = await axios.get(
      `/users?page=${page}&size=${size}`
    )
    dispatch(actions.getSuccess(data))
  }
  catch (error) {
    dispatch(actions.getError(error))
  }
}

export const getStatistics = (id, from, to) => async dispatch => {
  dispatch(actions.getStatisticRequest());
  try {
    const data = await axios.get(`/stats?${id}&from=${from}&from=${to}`)
    dispatch(actions.getStatisticSuccess(data))
  }
  catch (error) {
    dispatch(actions.getStatisticError(error))
  }
}


