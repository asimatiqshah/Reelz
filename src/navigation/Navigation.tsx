import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./MainNavigator";

import React from "react";
import { navigationRef } from "./NavigationUtil";
//syntax
//const Navigation: React.FC<NavigationProps> = ({ /* destructure props */ }) => { ... };
const Navigation:React.FC = ()=>{
    return(
        <NavigationContainer ref={navigationRef}>
            <MainNavigator />
        </NavigationContainer>
    )
}
export default Navigation;