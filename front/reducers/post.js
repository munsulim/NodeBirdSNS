export const initialState = {
  mainPosts: [
    {
      User: {
        id: 1,
        nickName: "보르바"
      },
      content: "첫번째 게시글",
      img: "https://newsimg.sedaily.com/2017/09/15/1OL1CMWR9X_1.jpg"
    }
  ],
  imagePaths: []
};

const ADD_POST = "ADD_POST";
const ADD_DUMMY = "ADD-DUMMY";

export const addPost = {
  type: ADD_POST
};

export const addDummy = {
  type: ADD_DUMMY,
  data: {
    content: "Hello",
    UserId: 1,
    User: {
      nickname: "보르바"
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state
      };
    }
    case ADD_DUMMY: {
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts]
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default reducer;
