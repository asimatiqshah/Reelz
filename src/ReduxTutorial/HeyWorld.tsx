import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { switchColor } from "./lightModeSlice";

const HeyWorld = ()=>{

    const theme = useSelector((state:RootState)=>state.theme.value);
    const dispatch = useDispatch();
    console.log(theme)
    return(

        <View style={{flex:1,backgroundColor:theme ? 'red' : 'blue'}}>
            <Text>HeyWorld</Text>
            <Button title="Switch color" onPress={()=>dispatch(switchColor(!theme))} />
        </View>
    )
}
export default HeyWorld;