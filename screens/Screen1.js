import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useIsFocused } from "@react-navigation/native";

const Screen1 = ({ navigation }) => {
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      const timeout = setTimeout(() => {
        navigation.navigate("Screen2");
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [isFocused, navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/award_bg.png")}
        style={{ width: "100%", height: "80%" }}
        resizeMode="stretch"
      />
      <View style={styles.innerContainer}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={require("../assets/castingLogo.png")}
            style={{ width: 100, height: 100 }}
          />
          <Text
            style={{
              fontSize: 25,
              color: "pink",
              fontFamily: "monospace",
              transform: [{ rotate: "-10deg" }],
              paddingBottom: 50,
            }}
          >
            Casting Call
          </Text>
        </View>
        <Text style={{ fontSize: 25, color: "yellow" }}>The Results R In!</Text>
        <Image
          source={require("../assets/girlClap.png")}
          style={{ width: 250, height: 400 }}
        />
      </View>
      <Image
        source={require("../assets/awardPlatform.png")}
        style={{ width: "100%", height: "20%", zIndex: -1 }}
        resizeMode="stretch"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-start",
  },
  innerContainer: {
    position: "absolute",
    width: "100%",
    height: "70%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 140,
  },
});

export default Screen1;
