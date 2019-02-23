import axios from "axios";

const KEY = "AIzaSyBoVb5UiJEpm-O1u7Lqotn-L--nKrQf6Gw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});
