import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import WhatsAppIcon from "../../assets/svg/whatsapp_icon.svg";

const MainScreen = () => {
  const [isBlue, setIsBlue] = React.useState(false);
  const [isRed, setIsRed] = React.useState(false);
  const [isViolet, setIsViolet] = React.useState(false);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            setIsBlue(!isBlue);
          }}
        >
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
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            setIsRed(!isRed);
          }}
        >
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
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            setIsViolet(!isViolet);
          }}
        >
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
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default MainScreen;
