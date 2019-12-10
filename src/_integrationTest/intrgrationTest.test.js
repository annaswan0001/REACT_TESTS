import moxios from "moxios";
import { testStore } from "../utils/utils";
import { fetchPosts } from "../actions/postsActions";

describe("Fetch Posts action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall;
  });

  test("Store is updated correctly", () => {
    const expectedState = [
      {
        title: "fdgdf",
        body: "dfsfd"
      },
      {
        title: "fdgdf",
        body: "dfsfd"
      },
      {
        title: "fdgdf",
        body: "dfsfd"
      }
    ];

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    });
  });
});
