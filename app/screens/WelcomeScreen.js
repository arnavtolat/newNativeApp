import React from 'react';
import { View } from 'react-native';
import { ImageBackground, StyleSheet, Text, Image, Button } from 'react-native-web';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            blurRadius={6}
            source={require("../assets/nike.png")}
        >
            <Text
                style={styles.titleText}
            >
                Learning React With Sports
            </Text>
            <View style={styles.activityContainer}>
                <Image
                    source={{
                        height: 400,
                        width: 300,
                        uri: "https://upload.wikimedia.org/wikipedia/commons/e/e6/1_kawhi_leonard_2019_%28cropped%29.jpg"
                    }}
                    style={{margin:10}}
                />
                <Text>Ski</Text>
                <Button title="Details" onPress={() => alert('Kawhi Leonard')} />

                <Image
                    source={{
                        height: 300,
                        width: 300,
                        uri: "https://static.www.nfl.com/image/private/t_headshot_desktop/league/fhvbn2cstui3nchv8vil"
                    }}
                    style={{margin:10}}
                />
                <Text>Joe Burrow</Text>
                <Button title="Details" onPress={() => alert('AFC Champion QB')} />

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
        width: "100%",
        height: "100%"
    },
    titleText: {
        fontSize: 27,
        fontWeight: "bold",
        color: "#2c4547",
        position: "absolute",
        top: 35,
    },
    activityContainer: {
        position: "absolute",
        alignItems: "center",
        top: 85,
    }
})

export default WelcomeScreen;