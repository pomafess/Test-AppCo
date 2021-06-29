import { createAction } from '@reduxjs/toolkit';


export const getRequest = createAction('table/getRequest');
export const getSuccess = createAction('table/getSuccess');
export const getError = createAction('table/getError');

export const getStatisticRequest = createAction('statistic/getRequest');
export const getStatisticSuccess = createAction('statistic/getSuccess');
export const getStatisticError = createAction('statistic/getError');

export const getUserInfo = createAction("user/getInfo");

const actions = {
    getRequest, getSuccess, getError, getStatisticRequest, getStatisticSuccess, getStatisticError,getUserInfo
};

export default actions;
