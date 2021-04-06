import React from "react";
import SearchBar from "./SearchBar";
import VideoCard from "./VideoCard";
import { getVideos } from "../API";
import VideoDetail from "./VideoDetail";

export default class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  fetchVideos = async (query) => {
    try {
      const data = await getVideos(query);
      this.setState({ videos: data.items, selectedVideo: data.items[0] });
    } catch (error) {
      console.log(error);
    }
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
    console.log(this.state.selectedVideo, "hello");
  };

  render() {
    return (
      <div>
        <div className="ui container">
          <SearchBar onSubmit={this.fetchVideos} />
        </div>
        <div className="ui grid" style={{ padding: "20px 30px" }}>
          <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoCard
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
          </div>
        </div>
      </div>
    );
  }
}
