import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import Post from "../screens/Post";
import ProfileScreen from "../screens/ProfileScreen";
import { Image, Platform, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { HomeTabIcon, ProfileTabIcon } from "./TabIcon";
import { Colors } from "../constants/Colors";
import { bottomBarStyles } from "../styles/NavigationBarStyles";

const Tab = createBottomTabNavigator();
const { Navigator, Screen } = Tab;

const BottomTab: React.FC = () => {
    return (
        <Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: Colors.theme,
            tabBarInactiveTintColor: '#447777',
            headerShadowVisible: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                paddingTop: Platform.OS === 'ios' ? RFValue(5) : 0,
                paddingBottom: Platform.OS === 'ios' ? 20 : 10,
                backgroundColor: 'transparent',
                height: Platform.OS === 'android' ? 70 : 80,
                borderTopWidth: 0,
                position: 'absolute',
                
            },
            tabBarIcon: ({ focused }) => {
                if (route.name == 'Home') {
                    return <HomeTabIcon focused={focused} />
                }
                if (route.name == 'Profile') {
                    return <ProfileTabIcon focused={focused} />
                }
            }
        })}>
            <Screen name="Home" component={HomeScreen} />
            <Screen name="Post" component={Post}
                options={{
                    tabBarIcon: () => {
                        return (
                            <TouchableOpacity
                                onPress={() =>{}}
                                activeOpacity={0.5}
                                style={bottomBarStyles.customMiddleButton}
                            >
                                <Image
                                    source={require('../assets/icons/add.png')}
                                    style={bottomBarStyles.tabIcon}
                                />

                            </TouchableOpacity>
                        )
                    },
                    headerShown:false
                }}
                listeners={{tabPress:(e)=>{e.preventDefault()}}}
            />
            <Screen name="Profile" component={ProfileScreen} />
        </Navigator>
    )
}

export default BottomTab;