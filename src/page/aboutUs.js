import React from "react";
import { StyleSheet, Platform, View, Alert } from "react-native";
import * as Application from "expo-application";
import * as WebBrowser from "expo-web-browser";
import {
    Page,
    BackgroundContainer,
    ConstainerContent,
    BarHeader,
    TitleHeaderContent,
    TitleContent,
    TitleAppAbout,
    SubTitleAppAbout,
    ContainerAppAbout,
    ContentIconAppAbout,
    UserField,
    UserFieldHeader,
    UserInformation,
    UserName,
    UserUsername,
} from "../styles";
import { IconButton, List, Avatar } from "react-native-paper";
import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { AdMobSmartBannerPortrait } from "../components/AdMob";
import { ScrollView } from "react-native-gesture-handler";

const About = ({ navigation }) => {
    const OpenBrowserUrl = async (url) => {
        await WebBrowser.openBrowserAsync(url);
    };

    return (
        <Page behavior={Platform.Os == "ios" ? "padding" : "height"}>
            <ScrollView>
                <BackgroundContainer />
                <BarHeader>
                    <IconButton
                        icon="menu"
                        size={24}
                        color="#fff"
                        onPress={() => navigation.openDrawer()}
                    />
                </BarHeader>
                <TitleHeaderContent>Sobre</TitleHeaderContent>
                <ConstainerContent style={styles.constentShadow}>
                    <ContainerAppAbout>
                        <ContentIconAppAbout>
                            <MaterialIcon name="progress-download" size={64} />
                        </ContentIconAppAbout>
                        <View>
                            <TitleAppAbout>
                                {Application.applicationName}
                            </TitleAppAbout>
                            <SubTitleAppAbout>
                                Desenvolvido por WebColmeia
                            </SubTitleAppAbout>
                        </View>
                    </ContainerAppAbout>
                    <List.Section>
                        <List.Item
                            left={(props) => (
                                <List.Icon icon="information" {...props} />
                            )}
                            title={
                                "Versão: " +
                                Application.nativeApplicationVersion
                            }
                        />
                    </List.Section>
                </ConstainerContent>
                <ConstainerContent style={styles.constentShadow}>
                    <TitleContent>Autor</TitleContent>
                    <UserField>
                        <UserFieldHeader>
                            <Avatar.Image
                                source={{
                                    uri:
                                        "https://avatars1.githubusercontent.com/u/32553223?s=460&u=05a7c3f5626304aa22c520435be48a5327ef993e&v=4",
                                }}
                            />
                            <UserInformation>
                                <UserName>Lucas Tiago</UserName>
                                <UserUsername>@eulukasthyago</UserUsername>
                            </UserInformation>
                        </UserFieldHeader>
                        <List.Section>
                            <List.Accordion
                                left={(props) => (
                                    <List.Icon icon="contacts" {...props} />
                                )}
                                title="sobre o autor"
                            >
                                <List.Item
                                    left={(props) => (
                                        <List.Icon
                                            icon="github-circle"
                                            {...props}
                                        />
                                    )}
                                    title="Github"
                                    onPress={() =>
                                        OpenBrowserUrl(
                                            "https://github.com/eulukasthyago"
                                        )
                                    }
                                />
                                <List.Item
                                    left={(props) => (
                                        <List.Icon
                                            icon="linkedin-box"
                                            {...props}
                                        />
                                    )}
                                    title="LinkedIn"
                                    onPress={() =>
                                        OpenBrowserUrl(
                                            "https://www.linkedin.com/in/lucas-tiago-macedo-5bb147a6"
                                        )
                                    }
                                />
                            </List.Accordion>
                        </List.Section>
                    </UserField>
                </ConstainerContent>
            </ScrollView>
            <AdMobSmartBannerPortrait />
        </Page>
    );
};

export default About;

const styles = StyleSheet.create({
    constentShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
});
