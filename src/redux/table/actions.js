import { createAction } from '@reduxjs/toolkit';


export const getRequest = createAction('table/getRequest');
export const getSuccess = createAction('table/getSuccess');
export const getError = createAction('table/getError');


const actions = {
    getRequest, getSuccess, getError
};

export default actions;
