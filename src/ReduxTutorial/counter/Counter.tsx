
import { Button, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { increment,decrement } from "./counterSlice";
import { setName } from "../persist/nameSlice";

const Counter = ()=>{

    // 1.SHOW COUNTER CURRENT VALUE FROM REDUX
    // state.counter.counter = state-> name in store in reducer object -> initialState Name
    const count = useSelector((state:RootState)=>state.counter.value);
    const name = useSelector((state: RootState) => state.name.value);
    
    // 2.SEND UPDATE TO REDUCER SO IT WILL UPDATE OUR STORE
    const dispatch = useDispatch();


    return(
        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
            <Text style={{color:'red'}}>{name ?? 'anyName'}</Text>
            <Text style={{fontSize:24}}>Counter : {count}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',padding:10,width:'100%'}}>
                <Button title="INCREMENT +1" onPress={()=>dispatch(increment())} />
                <Button title="DECREMENT -1" onPress={()=>dispatch(decrement())} />
                    <Button title="Save My Name" onPress={() => dispatch(setName("Sarah"))} />
            </View>
        </View>
    )
}

export default Counter;