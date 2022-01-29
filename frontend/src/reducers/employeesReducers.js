import {
  EMPLOYEES_UPDATE_REQUEST,
  EMPLOYEES_UPDATE_SUCCESS,
  EMPLOYEES_UPDATE_FAIL,
  EMPLOYEES_CREATE_FAIL,
  EMPLOYEES_CREATE_REQUEST,
  EMPLOYEES_CREATE_SUCCESS,
  EMPLOYEES_DELETE_FAIL,
  EMPLOYEES_DELETE_REQUEST,
  EMPLOYEES_DELETE_SUCCESS,
  EMPLOYEES_LIST_FAIL,
  EMPLOYEES_LIST_REQUEST,
  EMPLOYEES_LIST_SUCCESS,
} from "../constants/employeeConstants";

export const employeeListReducer = (state = { employees: [] }, action) => {
  switch (action.type) {
    case EMPLOYEES_LIST_REQUEST:
      return { loading: true };
    case EMPLOYEES_LIST_SUCCESS:
      return { loading: false, employees: action.payload };
    case EMPLOYEES_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const employeeCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEES_CREATE_REQUEST:
      return { loading: true };
    case EMPLOYEES_CREATE_SUCCESS:
      return { loading: false, success: true };
    case EMPLOYEES_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const employeeDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEES_DELETE_REQUEST:
      return { loading: true };
    case EMPLOYEES_DELETE_SUCCESS:
      return { loading: false, success: true };
    case EMPLOYEES_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const employeeUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEES_UPDATE_REQUEST:
      return { loading: true };
    case EMPLOYEES_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case EMPLOYEES_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
