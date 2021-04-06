const VideoItem = ({ item, onVideoSelect }) => {
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => onVideoSelect(item)}
      className="item"
    >
      <div className="image">
        <img
          src={item.snippet.thumbnails.default.url}
          alt={item.snippet.title}
        />
      </div>
      <div className="content">
        <p href="akjakjakjakj" className="header">
          {item.snippet.title}
        </p>
        <div className="meta">
          <span>{item.snippet.channelTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
