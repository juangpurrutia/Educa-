import { Flex, useColorMode, IFlexProps } from "native-base";
import { theme } from "../../style/theme";

interface BodyProps extends IFlexProps { }

const BodyColorMode: React.FC<BodyProps> = ({ children }) => {
    const { colorMode } = useColorMode();
    return (
        <Flex
            bg={colorMode === "light" ? theme.colors.light.body : theme.colors.dark.body}
            width="100%"
            height="100%"
        >
            {children}
        </Flex>
    );
};

export default BodyColorMode;