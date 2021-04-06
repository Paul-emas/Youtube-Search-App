import React from "react";
import VideoItem from "./VideoItem";

const VideoCard = ({ videos, onVideoSelect }) => {
  console.log(videos);
  const videolist = videos.map((item) => {
    return (
      <VideoItem
        key={item.id.videoId}
        item={item}
        onVideoSelect={onVideoSelect}
      />
    );
  });
  return <div className="ui unstackable items">{videolist}</div>;
};

export default VideoCard;
