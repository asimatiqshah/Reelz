import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./MainNavigator";
import React from "react";
//syntax
//const Navigation: React.FC<NavigationProps> = ({ /* destructure props */ }) => { ... };
const Navigation:React.FC = ()=>{
    return(
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    )
}
export default Navigation;