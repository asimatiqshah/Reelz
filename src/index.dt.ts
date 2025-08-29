

// DIRECT METHOD 

// declare module '*.png';
// declare module '*.jpg';
// declare module '*.jpeg';
// declare module '*.svg';
// declare module '*.mp4';
// declare module '*.gif';


// FULL TYPE SAFE METHOD

declare module '*.png' {
    const value: import('react-native').ImageSourcePropType;
    export default value;
}

declare module '*.jpg' {
    const value : import('react-native').ImageSourcePropType;
    export default value;
}

declare module '*.jpeg' {
    const value : import('react-native').ImageSourcePropType;
    export default value;
}

// declare module '*.gif' {
//     const value : import('react-native').ImageSourcePropType;
//     export default value;
// }

declare module '*.mp4' {
    const src : string;
    export default src;
}
