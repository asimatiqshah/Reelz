import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import SplashScreen from "../screens/SplashScreen";
import BottomTab from "./BottomTab";

export const authStack = [
    {
        name:'LoginScreen',
        component:LoginScreen
    },
    {
        name:'RegisterScreen',
        component:RegisterScreen
    },
    {
        name:'SplashScreen',
        component:SplashScreen
    }
];

export const dashboardStack = [
    {
        name:'BottomTab',
        component:BottomTab
    },
    {
        name:'PickReelScreen',
        component:BottomTab
    }
];

export const mergedStacks = [...dashboardStack,...authStack];