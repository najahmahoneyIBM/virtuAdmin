import {
  EMPLOYEES_CREATE_FAIL,
  EMPLOYEES_CREATE_REQUEST,
  EMPLOYEES_CREATE_SUCCESS,
  EMPLOYEES_DELETE_FAIL,
  EMPLOYEES_DELETE_REQUEST,
  EMPLOYEES_DELETE_SUCCESS,
  EMPLOYEES_LIST_FAIL,
  EMPLOYEES_LIST_REQUEST,
  EMPLOYEES_LIST_SUCCESS,
  EMPLOYEES_UPDATE_FAIL,
  EMPLOYEES_UPDATE_REQUEST,
  EMPLOYEES_UPDATE_SUCCESS,
} from "../constants/employeeConstants";
import axios from "axios";

export const listEmployees = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: EMPLOYEES_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/employees`, config);

    dispatch({
      type: EMPLOYEES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: EMPLOYEES_LIST_FAIL,
      payload: message,
    });
  }
};

export const createEmployeeAction = (email, name, address, role, employmentStatus, employeeID) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: EMPLOYEES_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `/api/employees/create`,
      { email, name, address, role, employmentStatus, employeeID },
      config
    );

    dispatch({
      type: EMPLOYEES_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: EMPLOYEES_CREATE_FAIL,
      payload: message,
    });
  }
};

export const deleteEmployeeAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: EMPLOYEES_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/employees/${id}`, config);

    dispatch({
      type: EMPLOYEES_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: EMPLOYEES_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateEmployeeAction = (id, email, name, address, role, employmentStatus, employeeID) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: EMPLOYEES_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/employees/${id}`,
      { email, name, address, role, employmentStatus, employeeID },
      config
    );

    dispatch({
      type: EMPLOYEES_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: EMPLOYEES_UPDATE_FAIL,
      payload: message,
    });
  }
};
