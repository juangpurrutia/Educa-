import { DrawerContentScrollView } from "@react-navigation/drawer";
import TabCampaign from "./tab.campaign.routes";
import TabCentral from "./tab.central.routes";
import { Flex, Image } from "native-base";

export default function DrawerRoutes() {

    return (
        <DrawerContentScrollView>
            <Flex backgroundColor="yellow.400" alignItems="center">
                <Image source={require("../../assets/Logo-cinza-sem-funco.png")} alt="LogoLamp" resizeMode="contain" width={200} height={60} />
            </Flex>
            <TabCampaign />
            <TabCentral />
        </DrawerContentScrollView>
    );
}