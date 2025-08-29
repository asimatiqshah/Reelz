import { MMKV } from "react-native-mmkv";
import {Storage} from 'redux-persist'

export const storage = new MMKV();


export const token_storage = new MMKV({
    id:'user_storage',
    encryptionKey:'YOUR_RSA_KEY'
});


export const reduxStorage:Storage = {
    setItem:(key,value)=>{
        storage.set(key,value);
        return Promise.resolve(true);
    },
    getItem:(key)=>{
        const value = storage.getString(key)
        return Promise.resolve(value);
    },

    removeItem:(key)=>{
        storage.delete(key);
        return Promise.resolve()
    }

}

export default reduxStorage;

