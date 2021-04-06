const videoDetail = ({ video }) => {
  console.log(video);
  if (!video) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <div className="ui embed">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div style={{ width: "100%" }} className="ui card">
        <div className="content">
          <div className="header">{video.snippet.title}</div>
          <div className="meta">{video.snippet.channelTitle}</div>
          <div className="description">
            <p>{video.snippet.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default videoDetail;
