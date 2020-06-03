import React from "react";
import {
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";
import { TopDrawer, TitleDrawer, SubTitleDrawer } from "../styles";

const CustomDrawer = ({ ...props }) => (
    <DrawerContentScrollView>
        <TopDrawer elevation={10}>
            <TitleDrawer>Inspicdown</TitleDrawer>
            <SubTitleDrawer>Baixe imagens do instagram</SubTitleDrawer>
        </TopDrawer>
        <DrawerItemList {...props} />
    </DrawerContentScrollView>
);

export default CustomDrawer;
