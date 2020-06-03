import React from "react";
import {
    StyleSheet,
    Platform,
    ScrollView,
    Image,
    TouchableOpacity,
} from "react-native";
import {
    Page,
    BackgroundContainer,
    BarHeader,
    TitleHeaderContent,
    ConstainerContent,
    TitleContent,
    SubTitleContent,
    Paragraph,
} from "../styles";
import { AdMobBanner } from "../components/AdMob";
import { IconButton } from "react-native-paper";
import * as WebBrowser from "expo-web-browser";
const Donate = ({ navigation }) => {
    const openLinks = async (url) => {
        await WebBrowser.openBrowserAsync(url);
    };

    const linkdoacao = {
        linkImage:
            "https://stc.pagseguro.uol.com.br/public/img/botoes/doacoes/209x48-doar-assina.gif",
        d5: "https://pag.ae/7UGUWbNMa",
        d10: "https://pag.ae/7UGUWyncR",
        d15: "https://pag.ae/7UGVk-Mjv",
        any_amount: "https://pag.ae/7VYq-CJ69",
        signature: {
            linkImage:
                "https://stc.pagseguro.uol.com.br/public/img/botoes/assinaturas/209x48-assinar-assina.gif",
            d5: "http://pag.ae/7VZkKrzb9",
            d10: "http://pag.ae/7VZkLkshR",
            d15: "http://pag.ae/7VZkLMmm6",
        },
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
                <TitleHeaderContent>Doação</TitleHeaderContent>
                <ConstainerContent style={styles.constentShadow}>
                    <TitleContent>Projeto Inspicdown</TitleContent>
                    <Paragraph>
                        Olá, por favor, contribua para que o projeto cresça.
                    </Paragraph>
                    <Paragraph>
                        Nosso objetivo é construir uma ferramenta para ajudar
                        com Instagram, trazendo diversas funcionalidades.
                    </Paragraph>
                    <Paragraph>
                        De momento temos apenas uma função, que é baixar imagens
                        do Instagram através do link da publicação. Já está
                        sendo desenvolvido novas funções para o aplicativo e em
                        futuras atualizações serão implementadas, puco a pouco.
                    </Paragraph>
                    <Paragraph>
                        Desde já, estamos agradecidos por utilizar nosso
                        aplicativo.
                    </Paragraph>
                    <SubTitleContent>
                        Onde são feita as doações?
                    </SubTitleContent>
                    <Paragraph>
                        As doações serão feita atraves da plataforma PagSeguro.
                    </Paragraph>
                    <SubTitleContent>Tipos de doações</SubTitleContent>
                    <Paragraph>Doação de qualquer de valor</Paragraph>
                    <TouchableOpacity
                        style={styles.donateSize}
                        onPress={() => openLinks(linkdoacao.any_amount)}
                    >
                        <Image
                            style={styles.donateSize}
                            source={{ uri: linkdoacao.linkImage }}
                        />
                    </TouchableOpacity>
                    <Paragraph>Doação de R$ 5,00</Paragraph>
                    <TouchableOpacity
                        style={styles.donateSize}
                        onPress={() => openLinks(linkdoacao.d5)}
                    >
                        <Image
                            style={styles.donateSize}
                            source={{ uri: linkdoacao.linkImage }}
                        />
                    </TouchableOpacity>
                    <Paragraph>Doação de R$ 10,00</Paragraph>
                    <TouchableOpacity
                        style={styles.donateSize}
                        onPress={() => openLinks(linkdoacao.d10)}
                    >
                        <Image
                            style={styles.donateSize}
                            source={{ uri: linkdoacao.linkImage }}
                        />
                    </TouchableOpacity>
                    <Paragraph>Doação de R$ 15,00</Paragraph>
                    <TouchableOpacity
                        style={styles.donateSize}
                        onPress={() => openLinks(linkdoacao.d15)}
                    >
                        <Image
                            style={styles.donateSize}
                            source={{ uri: linkdoacao.linkImage }}
                        />
                    </TouchableOpacity>
                    <Paragraph>Doação recorrente de R$ 5,00</Paragraph>
                    <TouchableOpacity
                        style={styles.donateSize}
                        onPress={() => openLinks(linkdoacao.signature.d5)}
                    >
                        <Image
                            style={styles.donateSize}
                            source={{ uri: linkdoacao.signature.linkImage }}
                        />
                    </TouchableOpacity>
                    <Paragraph>Doação recorrente de R$ 10,00</Paragraph>
                    <TouchableOpacity
                        style={styles.donateSize}
                        onPress={() => openLinks(linkdoacao.signature.d10)}
                    >
                        <Image
                            style={styles.donateSize}
                            source={{ uri: linkdoacao.signature.linkImage }}
                        />
                    </TouchableOpacity>
                    <Paragraph>Doação recorrente de R$ 15,00</Paragraph>
                    <TouchableOpacity
                        style={styles.donateSize}
                        onPress={() => openLinks(linkdoacao.signature.d15)}
                    >
                        <Image
                            style={styles.donateSize}
                            source={{ uri: linkdoacao.signature.linkImage }}
                        />
                    </TouchableOpacity>
                </ConstainerContent>
            </ScrollView>
            <AdMobBanner />
        </Page>
    );
};

export default Donate;

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
    donateSize: {
        width: 209,
        height: 48,
    },
});
