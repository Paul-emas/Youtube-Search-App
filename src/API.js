import axios from "axios";
const baseUrl = "https://www.googleapis.com/youtube/v3/search";
const key = "AIzaSyCfyQpJU97RYmmy-1ZSyQ9u7oXDxjV_TKE";

export const getVideos = async (query) => {
  const options = {
    url: `${baseUrl}?q=${query}`,
    methods: "GET",
    params: {
      query,
      maxLength: 5,
      part: "snippet",
      key,
    },
  };

  const { data } = await axios(options);
  return data;
};
