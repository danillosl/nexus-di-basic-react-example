import youtube from "../apis/youtube";

export const fetchVideos = term => async (dispatch, getState) => {
  const response = await youtube.get("/search", {
    params: {
      q: term
    }
  });
  dispatch({ type: "FETCH_VIDEOS", payload: response.data.items });
  dispatch(selectVideo(response.data.items[0]));
};

export const selectVideo = video => {
  return { type: "SELECT_VIDEOS", payload: video };
};
