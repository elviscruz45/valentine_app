import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerPost: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    alignItems: "center",
    justifyContent: "space-between",
    margin: 0,
  },
  row: {
    flexDirection: "row",
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    alignItems: "center",
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
  },
  facebookButton: {
    backgroundColor: "#3b5998",
    marginTop: 20,
    paddingVertical: 10,
    alignItems: "center",
    borderColor: "#3b5998",
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
  },
  border: {
    width: "85%",
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: "#d3d3d3",
    borderBottomWidth: 1,
    textAlign: "center",
  },
  postPhoto: {
    height: 250,
    width: width,
    marginTop: 0,
  },

  cameraButton: {
    borderRadius: 50,
    alignSelf: "flex-end",
    marginLeft: 80,
  },
  roundImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 5,
  },
  roundImageUpload: {
    width: 40,
    height: 40,
    borderRadius: 20,
    textAlign: "center",
  },
  roundImageUpload: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 5,
    alignItems: "center",
  },
  buttonSmall: {
    margin: 10,
    marginBottom: 0,
    padding: 5,
    alignItems: "center",
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderRadius: 5,
    width: 125,
  },
});
