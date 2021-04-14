import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import WhatsAppIcon from "../../assets/svg/whatsapp_icon.svg";

const MainScreen = () => {
  const [isBlue, setIsBlue] = React.useState(false);
  const [isRed, setIsRed] = React.useState(false);
  const [isViolet, setIsViolet] = React.useState(false);

  return (
    <View style={Styles.container}>
      <TouchableOpacity style={Styles.button}>
        <WhatsAppIcon
          style={[
            isBlue
              ? {
                  color: "#0000FF",
                }
              : { color: "#4FCE5D" },
          ]}
          height={50}
          width={50}
          onPress={() => {
            setIsBlue(!isBlue);
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={Styles.button}>
        <WhatsAppIcon
          style={[
            isRed
              ? {
                  color: "#FF0000",
                }
              : { color: "#4FCE5D" },
          ]}
          height={50}
          width={50}
          onPress={() => {
            setIsRed(!isRed);
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={Styles.button}>
        <WhatsAppIcon
          style={[
            isViolet
              ? {
                  color: "#DA70D6",
                }
              : { color: "#4FCE5D" },
          ]}
          height={50}
          width={50}
          onPress={() => {
            setIsViolet(!isViolet);
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
export default MainScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
