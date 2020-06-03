import React, { useState, useRef } from "react";
import {
    StyleSheet,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    View,
    Alert,
    Clipboard,
    Image,
} from "react-native";
import { Page } from "../styles";
import {
    Text,
    TextInput,
    Button,
    IconButton,
    Colors,
} from "react-native-paper";

import { AdMobInterstitial } from "expo-ads-admob";

import axios from "axios";
import { adUnitID, AdMobSmartBannerPortrait } from "../components/AdMob";

const Home = ({ route, navigation }) => {
    const imageLogo = require("../../assets/logo.png");

    navigation.setOptions({
        headerLeft: () => (
            <IconButton
                icon="menu"
                size={24}
                style={{ marginLeft: 10 }}
                color={Colors.white}
                onPress={() => navigation.openDrawer()}
            />
        ),
    });

    const urlImageText = useRef(null);
    const [urlImage, setUrlImage] = useState(null);
    const [btnLoad, setBtnLoad] = useState(false);

    const startdAd = async (urlToDownload) => {
        AdMobInterstitial.setAdUnitID(adUnitID.rewarded);
        await AdMobInterstitial.requestAdAsync({
            servePersonalizedAds: true,
        });
        await AdMobInterstitial.showAdAsync();
    };

    const bannerError = (e) => {
        console.log(e);
    };

    const loadImagePage = async (url) => {
        startdAd();
        setBtnLoad(true);
        const response = await axios.get(url).catch((error) => {
            Alert.alert("Erro", "Houve um erro ao tentar carregar a imagem");
            setBtnLoad(false);
        });
        const jsonData = JSON.parse(
            response.data.split(
                /window\._sharedData = (.*)\;\<\/script\>/gim
            )[1]
        );
        navigation.navigate("downloadScreen", {
            imageConfig: jsonData,
        });
        setBtnLoad(false);
    };

    const pasteLink = async () => {
        const textClipboard = await Clipboard.getString();
        setUrlImage(textClipboard);
    };

    return (
        <Page behavior={Platform.Os == "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View
                    style={{
                        flex: 1,
                        padding: 20,
                    }}
                >
                    <Image
                        source={imageLogo}
                        style={{ width: "100%", height: 100 }}
                        resizeMode="contain"
                    />
                    <TextInput
                        style={{ marginTop: 20 }}
                        label="Seu link aqui"
                        mode="outlined"
                        value={urlImage}
                        onChangeText={(text) => setUrlImage(text)}
                        clearButtonMode="always"
                        ref={urlImageText}
                    />
                    <View
                        style={{
                            marginTop: 20,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                        }}
                    >
                        <Button
                            style={{ marginRight: 10 }}
                            mode="contained"
                            onPress={() => {
                                loadImagePage(urlImage);
                            }}
                            loading={btnLoad}
                        >
                            Carregar
                        </Button>
                        <Button
                            style={{ marginRight: 10 }}
                            mode="contained"
                            onPress={() => pasteLink()}
                        >
                            Colar Link
                        </Button>
                        <Button
                            mode="contained"
                            onPress={() => {
                                urlImageText.current.focus();
                                setUrlImage(null);
                            }}
                        >
                            Limpar
                        </Button>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <AdMobSmartBannerPortrait />
        </Page>
    );
};

export default Home;

const styles = StyleSheet.create({
    textCenter: {
        textAlign: "center",
    },
});
