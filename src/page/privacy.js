import React from "react";
import { StyleSheet, Platform, ScrollView } from "react-native";
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
import { IconButton } from "react-native-paper";
import { AdMobBanner } from "../components/AdMob";
const Privacy = ({ navigation }) => {
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
                <TitleHeaderContent>Política de Privacidade</TitleHeaderContent>
                <ConstainerContent style={styles.constentShadow}>
                    <TitleContent>Introdução</TitleContent>
                    <Paragraph>
                        A privacidade dos usuários do nosso aplicativo é muito
                        importante para nós, e estamos comprometidos em
                        protegê-los. Esta política explica sobre o uso de
                        informações.
                    </Paragraph>
                    <Paragraph>
                        O nosso aplicativo, serve apenas como uma ferramenta
                        para instagramers, oferecendo facilidades e agilidades
                        para os usuários.
                    </Paragraph>
                    <Paragraph>
                        Ao usar o aplicativo, afirma estar de acordo com a
                        política de privacidade.
                    </Paragraph>
                    <TitleContent>Conteudo publico</TitleContent>
                    <Paragraph>
                        Este aplicativo não utiliza nenhum dado particular dos
                        usuários, são exibidos apenas conteúdo público fornecido
                        pelo Instagram, afins de exibição de imagem publicada,
                        nome, username, foto de perfil, descrição da publicação.
                        Com isto, possibilitamos que o usuário possa salvar a
                        imagem adquirida através de uma URL da publicação.
                    </Paragraph>
                    <Paragraph>
                        Para poder acessar as imagens da publicação, o perfil
                        dos usuários precisam ser público, se foi utilizada URL
                        de publicação de usuários com perfil privado, não
                        poderemos acessar o conteúdo da publicação.
                    </Paragraph>
                    <TitleContent>
                        Uso de ferramentas do dispositivo
                    </TitleContent>
                    <SubTitleContent>
                        Armazenamento do dispositivo
                    </SubTitleContent>
                    <Paragraph>
                        Pedimos autorização para uso de armazenamento apenas
                        para salvar as imagens em seu dispositivo, não usamos
                        para nada além disto.
                    </Paragraph>
                    <Paragraph>
                        Com o pedido de permissão, o usuário poderá escolher se
                        irá autorizar ou não, porém, caso não seja autorizado, o
                        aplicativo não conseguiria salvar as imagens em seu
                        dispositivo, pois, por conta da política de privacidade
                        da Google, só pode se usada informação com o
                        consentimento e autorização dos usuários.
                    </Paragraph>
                    <SubTitleContent>Uso do Clipboard</SubTitleContent>
                    <Paragraph>
                        O clipboard é usado apenas para colar a url copiar no
                        Instagram, esse dado não fazemos nenhum armazenamento,
                        esta ferramenta é fornecida pelo sistema operacional do
                        dispositivo.
                    </Paragraph>
                    <TitleContent>Uso de anuncios</TitleContent>
                    <Paragraph>
                        Fazemos o use de anúncios no aplicativo para gerar
                        renda, pois somos sem fins lucrativos.
                    </Paragraph>
                    <TitleContent>Doações</TitleContent>
                    <Paragraph>
                        Para doações, utilizamos a plataforma PagSeguro,
                        oferecemos 2 forma de doação, que seria, fazer unica ou
                        recorrente. Nelas terá 3 opções de valor para escolher,
                        são a de R$5,00, R$10,00 ou de R$15,00. Na doação única,
                        a opção para doar qualquer valor.
                    </Paragraph>
                </ConstainerContent>
            </ScrollView>
            <AdMobBanner />
        </Page>
    );
};

export default Privacy;

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
