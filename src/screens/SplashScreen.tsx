import { StyleSheet, View } from "react-native";
import { Colors } from "../constants/Colors";
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
import { useEffect } from "react";
import { screenWidth } from "../utils/Scaling";

const SplashScreen = ()=>{

    //1 continous change hona wala variable
    //2 scale up and scale down animation in useEffect
    //3 create animatedstyle
    //4 transform in AnimatedImage
    //5 withRepeat basic syntax  withRepeat(animation,infinite,reverse)
    //6 withTiming basic syntax withTiming(new value,{duration}) 

    const scale = useSharedValue<number>(1);

    useEffect(()=>{
        scale.value = withRepeat(
            withTiming(1.2,{duration:2000}),
            -1,
            true
        )
    },[]);
    //But with Reanimated’s withTiming, withRepeat, withSpring, etc. → ✅ no cleanup is required.

    const animatedStyle = useAnimatedStyle<{
        transform:{scale:number}[]
    }>(()=>{
        return{
            transform:[{scale:scale.value}]
        }
    });

    return(
         <View style={styles.container}>
            <Animated.Image
                source={require('../assets/images/logo_bg.png')}
                style={[{width:screenWidth * 0.4,height:screenWidth * 0.4},animatedStyle]}
            />
        </View>
    )
}
export default SplashScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.background,
        justifyContent:'center',
        alignItems:'center'
    }
})