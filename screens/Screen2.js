import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Image,
} from "react-native";

const Screen2 = ({ navigation }) => {
  const profileAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const slideIn = Animated.timing(profileAnimation, {
      toValue: 110,
      duration: 200,
      useNativeDriver: true,
    });

    const shakeIn = Animated.timing(profileAnimation, {
      toValue: 100,
      duration: 50,
      useNativeDriver: true,
    });

    const slideOut = Animated.timing(profileAnimation, {
      toValue: 300,
      duration: 200,
      useNativeDriver: true,
    });

    const delay = Animated.delay(2000);

    const animation = Animated.sequence([slideIn, shakeIn, delay, slideOut]);
    const loopAnimation = Animated.loop(animation);
    loopAnimation.start();

    return () => {
      loopAnimation.stop();
    };
  }, [profileAnimation]);

  const handlePress = () => {
    navigation.navigate("Screen3");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate("Screen3");
    }, 20000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/award_bg.png")}
        style={{ width: "100%", height: "80%" }}
        resizeMode="stretch"
      />
      <View style={styles.innerContainer}>
        <Animated.View
          style={{
            transform: [
              {
                translateX: profileAnimation.interpolate({
                  inputRange: [0, 100],
                  outputRange: [200, 0],
                }),
              },
            ],
          }}
        >
          <View style={styles.profileContainer}>
            <Image
              source={require("../assets/avtar2.png")}
              style={{
                width: 100,
                height: 100,
                borderRadius: 100,
                borderColor: "yellow",
                borderWidth: 3,
              }}
            />
            <View>
              <Text style={{ fontSize: 30, color: "yellow" }}>D-Lister</Text>
              <Text style={{ fontSize: 15, color: "yellow" }}>Sally</Text>
            </View>
          </View>
        </Animated.View>

        <View>
          <Text style={{ fontSize: 30, color: "yellow", textAlign: "center" }}>
            Gave U Some Love
          </Text>
        </View>

        <View>
          <Image
            source={require("../assets/main-heart.png")}
            style={{ width: 175, height: 140 }}
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
            15000
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
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});

export default Screen2;
