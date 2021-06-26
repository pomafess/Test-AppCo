import actions from './actions';
import TableService from "./service";

const tableService = new TableService()

export const getBlocks = () => async dispatch => {
  dispatch(actions.getRequest());
  try {
    const data = await tableService.fetchUsers()
    dispatch(actions.getSuccess(data))
  }
  catch (error) {
    dispatch(actions.getError(error))
  }
}


