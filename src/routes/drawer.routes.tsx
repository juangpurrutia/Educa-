import { DrawerContentScrollView } from "@react-navigation/drawer";
import TabCampaign from "./tab.campaign.routes";
import TabCentral from "./tab.central.routes";
import { Flex, Image, Text } from "native-base";
import { useState } from "react";

export default function DrawerRoutes() {
    const [currentRoute, setCurrentRoute] = useState<string>("Dashboard");

    return (
        <DrawerContentScrollView >
            <Flex backgroundColor="yellow.400" align="center">
                <Image source={require("../../assets/Logo-cinza-sem-funco.png")} alt="LogoLamp" resizeMode="contain" width={200} height={60} />
            </Flex>
            <TabCampaign setCurrentRoute={setCurrentRoute} currentRoute={currentRoute} />
            <TabCentral setCurrentRoute={setCurrentRoute} currentRoute={currentRoute} />
        </DrawerContentScrollView>
    );
}