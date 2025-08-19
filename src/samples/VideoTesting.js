import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Video from "react-native-video";
import convertToCache, { convertAsync } from "react-native-video-cache";

export default function App() {
  const url =
    "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4";
  const [asyncVersion, setAsyncVersion] = useState();
  useEffect(() => {
    convertAsync(url).then(setAsyncVersion)
  }, [])
  return (
    <Video
      source={{ uri: asyncVersion }}
      style={{ width: '100%', aspectRatio: 16 / 9 }}
      controls
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});