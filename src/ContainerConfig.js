import { container } from "nexus-di";
import { connect } from "react-redux";
import { fetchVideos, selectVideo } from "./actions";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import App from "./components/App";

container
  .setProvider(App, (proxy, container) => {
    return connect(
      state => {
        return {
          selectedVideo: state.selectedVideo,
          videos: state.videos
        };
      },
      { fetchVideos, selectVideo }
    )(proxy);
  })
  .register(VideoDetail, (clazz, container) => {
    return clazz;
  })
  .register(VideoList, (clazz, container) => {
    return clazz;
  });

export default container;
