import React, { useState, useEffect } from "react";
import { Platform, FlatList, Dimensions, Alert } from "react-native";
import { Page } from "../styles";
import { Card, Avatar, Text, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import * as Permissions from "expo-permissions";
import { AdMobBanner } from "../components/AdMob";

const Download = ({ route }) => {
    const { imageConfig } = route.params;
    const [allImages, setAllImages] = useState([]);
    const [countImage, setCountImage] = useState("");
    const screenWidth = Dimensions.get("window").width;
    const screenHeighr = Dimensions.get("window").height;

    useEffect(() => {
        if (
            imageConfig.entry_data.PostPage[0].graphql.shortcode_media
                .edge_sidecar_to_children
        ) {
            setAllImages(
                imageConfig.entry_data.PostPage[0].graphql.shortcode_media
                    .edge_sidecar_to_children.edges
            );
            setCountImage("plus");
        } else {
            setAllImages(imageConfig.entry_data.PostPage);
            setCountImage("one");
        }
    }, []);

    const LoadPosts = ({ item }) => {
        let imageURL = null;
        let imageWidth = null;
        let imageHeight = null;
        if (countImage === "plus") {
            imageURL = item.node.display_url;
            if (item.node.dimensions.width > item.node.dimensions.height) {
                imageWidth = screenWidth - 40;
                imageHeight = screenHeighr / 3;
            } else if (
                item.node.dimensions.height > item.node.dimensions.width
            ) {
                imageWidth = screenWidth - 40;
                imageHeight = screenWidth + 50;
            } else {
                imageWidth = screenWidth - 40;
                imageHeight = screenWidth - 40;
            }
        } else {
            imageURL = item.graphql.shortcode_media.display_url;
            if (
                item.graphql.shortcode_media.dimensions.width >
                item.graphql.shortcode_media.dimensions.height
            ) {
                imageWidth = screenWidth - 40;
                imageHeight = screenHeighr / 3;
            } else if (
                item.graphql.shortcode_media.dimensions.height >
                item.graphql.shortcode_media.dimensions.width
            ) {
                imageWidth = screenWidth - 40;
                imageHeight = screenWidth + 50;
            } else {
                imageWidth = screenWidth - 40;
                imageHeight = screenWidth - 40;
            }
        }

        const downloadImage = (url, filename) => {
            let formt = "";
            const newUrl = url.split(/https(.*)\?/gim)[1];
            if (newUrl.substr(-4, 1) === ".") {
                formt = newUrl.substr(-4);
            } else {
                formt = newUrl.substr(-5);
            }
            const dateForName = {
                day: new Date().getDate(),
                mon: new Date().getMonth() + 1,
                yea: new Date().getFullYear(),
                hou: new Date().getHours(),
                min: new Date().getMinutes(),
                seg: new Date().getSeconds(),
            };
            if (dateForName.day < 10) {
                dateForName.day = "0" + dateForName.day;
            }
            if (dateForName.mon < 10) {
                dateForName.mon = "0" + dateForName.mon;
            }
            const fileName =
                FileSystem.documentDirectory +
                filename +
                `_${dateForName.day}_${dateForName.mon}_${dateForName.yea}_${dateForName.hou}_${dateForName.min}_${dateForName.seg}` +
                formt;
            FileSystem.downloadAsync(url, fileName)
                .then(({ uri }) => {
                    saveFile(uri);
                })
                .catch((error) => {
                    Alert.alert("Download", "Erro ao salvar imagem");
                });
        };

        const saveFile = async (fileUri) => {
            const { status } = await Permissions.askAsync(
                Permissions.CAMERA_ROLL
            );
            if (status === "granted") {
                const asset = await MediaLibrary.createAssetAsync(fileUri);
                await MediaLibrary.createAlbumAsync("Inspicdown", asset, false);
                Alert.alert("Download", "Imagem salva com sucesso");
            } else {
                Alert.alert(
                    "Erro",
                    "Por favor, conseda permição para salvar a imagem"
                );
            }
        };

        return (
            <Card
                style={{
                    marginLeft: 20,
                    marginRight: 20,
                    marginTop: 10,
                    marginBottom: 10,
                }}
            >
                <Card.Cover
                    source={{
                        uri: imageURL,
                    }}
                    style={{
                        width: imageWidth,
                        height: imageHeight,
                    }}
                />
                <Card.Content>
                    <Card.Title
                        title={
                            imageConfig.entry_data.PostPage[0].graphql
                                .shortcode_media.owner.full_name
                        }
                        subtitle={
                            "@" +
                            imageConfig.entry_data.PostPage[0].graphql
                                .shortcode_media.owner.username
                        }
                        left={(props) => (
                            <Avatar.Image
                                size={48}
                                source={{
                                    uri:
                                        imageConfig.entry_data.PostPage[0]
                                            .graphql.shortcode_media.owner
                                            .profile_pic_url,
                                }}
                                style={{
                                    alignSelf: "flex-start",
                                }}
                            />
                        )}
                    />
                    <Text
                        style={{
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingTop: 10,
                            paddingBottom: 10,
                        }}
                    >
                        {
                            imageConfig.entry_data.PostPage[0].graphql
                                .shortcode_media.edge_media_to_caption.edges[0]
                                .node.text
                        }
                    </Text>
                </Card.Content>
                <Card.Actions style={{ justifyContent: "flex-end" }}>
                    <Button
                        onPress={() =>
                            downloadImage(
                                imageURL,
                                imageConfig.entry_data.PostPage[0].graphql
                                    .shortcode_media.owner.username
                            )
                        }
                    >
                        <Icon name="download" size={12} /> Download
                    </Button>
                    {/* <Button
                        onPress={() =>
                            Alert.alert(
                                "Onde abrir?",
                                "Escolhe onde deseja abrir, instagram ou imagem no navegador?"
                            )
                        }
                    >
                        <Icon name="open-in-new" size={12} /> Abrir
                    </Button> */}
                </Card.Actions>
            </Card>
        );
    };

    return (
        <Page behavior={Platform.Os == "ios" ? "padding" : "height"}>
            <FlatList
                data={allImages}
                keyExtractor={(item) => {
                    if (countImage === "plus") {
                        return item.node.id;
                    } else {
                        return item.graphql.shortcode_media.id;
                    }
                }}
                renderItem={LoadPosts}
            />
            <AdMobBanner />
        </Page>
    );
};

export default Download;
