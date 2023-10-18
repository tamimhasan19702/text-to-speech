/** @format */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100%",
    backgroundColor: "#5256ad",
  },
  wrapper: {
    width: 370,
    padding: 25,
    borderRadius: 7,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 7,
      height: 7,
    },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 5,
  },
  header: {
    fontSize: 28,
    fontWeight: "500",
    textAlign: "center",
  },
  form: {
    margin: 35,
  },
  row: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  textarea: {
    height: 110,
    fontSize: 15,
    padding: 8,
    borderWidth: 1,
    borderColor: "#999",
  },
  outer: {
    height: 47,
    display: "flex",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#999",
  },
  select: {
    fontSize: 14,
    backgroundColor: "transparent",
  },
  button: {
    height: 52,
    color: "#fff",
    fontSize: 17,
    marginTop: 10,
    backgroundColor: "#675afe",
    transitionDuration: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  "@media (max-width: 400px)": {
    wrapper: {
      maxWidth: 345,
      width: "100%",
    },
  },
});

export default styles;
