import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const Screen3 = ({ navigation }) => {
  const [count, setCount] = useState(15000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1000);
    }, 100);

    if (count >= 40000) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [count]);

  const handlePress = () => {
    navigation.navigate("Screen1");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/award_bg.png")}
        style={{ width: "100%", height: "80%" }}
        resizeMode="stretch"
      />
      <View style={styles.innerContainer}>
        <View>
          <Text style={{ fontSize: 35, color: "yellow", textAlign: "center" }}>
            4 Friends Gave U Some Love
          </Text>
        </View>

        <View>
          <Image
            source={require("../assets/main-heart.png")}
            style={{ width: 180, height: 150 }}
          />
          <Text
            style={{
              position: "absolute",
              fontSize: 35,
              color: "white",
              left: 40,
              top: 40,
            }}
          >
            {count}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../assets/girlClap.png")}
            style={{ width: 250, height: 400 }}
          />
          <View
            style={{
              position: "absolute",
              right: 0,
              backgroundColor: "white",
              padding: 15,
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 20, color: "pink" }}>Congrats!</Text>
          </View>
          <View style={styles.triangleContainer} />
          <TouchableOpacity
            onPress={handlePress}
            style={{ position: "absolute", right: 0, bottom: 200 }}
          >
            <Image
              source={require("../assets/arrow.png")}
              style={{
                width: 50,
                height: 50,
              }}
            />
          </TouchableOpacity>
        </View>
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
    alignItems: "center",
    justifyContent: "flex-start",
  },
  innerContainer: {
    position: "absolute",
    width: "80%",
    height: "75%",
    marginTop: 95,
    justifyContent: "space-between",
    alignItems: "center",
  },
  triangleContainer: {
    width: 0,
    height: 0,
    borderRightWidth: 30,
    borderTopWidth: 30,
    borderRightColor: "transparent",
    borderTopColor: "white",
    position: "absolute",
    right: 70,
    top: 55,
  },
});

export default Screen3;
