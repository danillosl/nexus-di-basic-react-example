import React from "react";
import { Injectable } from "nexus-di";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

@Injectable({ inject: [SearchBar, VideoDetail, VideoList] })
class App extends React.Component {
  componentDidMount() {
    this.onTermSubmit("");
  }

  onTermSubmit = async term => {
    this.props.fetchVideos(term);
  };

  onVideoSelect = video => {
    this.props.selectVideo(video);
  };

  render() {
    return (
      <div className="ui container">
        <this.SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <this.VideoDetail video={this.props.selectedVideo} />
            </div>
            <div className="five wide column">
              <this.VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.props.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
