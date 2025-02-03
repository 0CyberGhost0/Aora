import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants';


const SearchInput = ({ title, value,placeholder, handleChangeText, otherStyles, keyboardType ,...props}) => {
    const [showPassword,setShowPassword]=useState(false);
    const [isFocused,setIsFocused]=useState(false);
    return (

            <View className={`w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 items-center flex-row space-x-4 ${isFocused ? 'border-secondary' : 'border-black-200'}`}>
                <TextInput
                    className="text-base mt-0.5 text-white flex-1"
                    value={value}
                    placeholder="Search for a video topic" 
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    onFocus={()=> setIsFocused(true)}
                    onBlur={()=>setIsFocused(false)}
                    secureTextEntry={title==='Password' && showPassword}
                />
                <TouchableOpacity>
                    <Image
                        source={icons.search}
                        className="w-5 h-5"
                        resizeMode='contain'

                    />
                </TouchableOpacity>
            </View>
            
    )
}

export default SearchInput