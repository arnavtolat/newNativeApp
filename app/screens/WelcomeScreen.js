import React from 'react';
import { View } from 'react-native';
import { ImageBackground, StyleSheet, Text, Image, Button } from 'react-native-web';

const image = { uri: "https://reactjs.org/logo-og.png" };

function WelcomeScreen(props) {
    return (
        <ImageBackground
            resizeMode="cover" 
            source={require("../assets/nike.png")}
            style={styles.background}
            blurRadius={6}
        >
            <Text
                style={styles.titleText}
            >
                React Athlete Homepage
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
                <Text>Kawhi Leonard</Text>
                <Button title="Details" onPress={() => alert('NBA Champion SF')} />

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

                <Image
                    source={{
                        height: 300,
                        width: 300,
                        uri: "https://cdn.vox-cdn.com/thumbor/-fKNrc6L91zy05wfq7kXg5KVdCU=/0x761:3648x3992/1200x800/filters:focal(1387x1752:1969x2334)/cdn.vox-cdn.com/uploads/chorus_image/image/58694633/918116466.jpg.0.jpg"
                    }}
                    style={{margin:10}}
                />
                <Text>Shaun White</Text>
                <Button title="Details" onPress={() => alert('Olympic Gold Medalist Snowboarder')} />

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 100,
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundSize: 'cover'
    },
    titleText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#7966b2",
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