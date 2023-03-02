import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    alignItems: "center",
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    backgroundColor: "#EEEEEE",
    borderColor: "#E35622",
    borderWidth: 0.18,
  },
  border: {
    width: "85%",
    margin: 10,
    borderRadius: 5,
    padding: 15,
    fontSize: 16,
    borderColor: "#E35622",
    borderWidth: 0.18,
    textAlign: "center",
    backgroundColor: "#EEEEEE",
  },
  postPhoto: {
    height: 300,
    width: width,
  },
});
