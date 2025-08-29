import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { mergedStacks } from "./ScreenCollections";

const Stack = createNativeStackNavigator();
const {Navigator,Screen} = Stack;
const MainNavigator:React.FC=()=>{
    return(
       <Navigator initialRouteName="SplashScreen" screenOptions={{headerShown:false}}>
        {
            mergedStacks.map((item,index)=>(
                <Screen
                    key={index}
                    name={item.name}
                    component={item.component}
                />
            ))
        }
       </Navigator>
    )
}
export default MainNavigator;