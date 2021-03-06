import { streams } from "../apis";
import types from "./types";
import history from "../history";

const signIn = userId => {
  return {
    type: types.SIGN_IN,
    payload: userId
  };
};

const signOut = () => {
  return {
    type: types.SIGN_OUT
  };
};

const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post("/streams", { ...formValues, userId });

  dispatch({ type: types.CREATE_STREAM, payload: response.data });
  history.push("/");
};

const fetchStreams = () => async dispatch => {
  const response = await streams.get("/streams");

  dispatch({ type: types.FETCH_STREAMS, payload: response.data });
};

const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: types.FETCH_STREAM, payload: response.data });
};

const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);

  dispatch({ type: types.EDIT_STREAM, payload: response.data });
  history.push("/");
};

const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: types.DELETE_STREAM, payload: id });
  history.push("/");
};

export {
  signIn,
  signOut,
  types,
  createStream,
  fetchStreams,
  fetchStream,
  editStream,
  deleteStream
};
