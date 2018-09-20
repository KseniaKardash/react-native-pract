import "react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { deletePostAction } from "../src/actions/postsActions";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {};
const store = mockStore(initialState);

beforeEach(() => {
  store.clearActions();
});

afterEach(() => {
  expect(store.getActions()).toMatchSnapshot();
});

test("Dispatch action", () => {
  const id = 56;
  store.dispatch(deletePostAction(id));
});
