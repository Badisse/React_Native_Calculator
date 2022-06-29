import { Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

const Display = () => {
    // @ts-ignore
    const input = useSelector((state) => state.calculator.input);
    // @ts-ignore
    const result = useSelector((state) => state.calculator.result);
    // @ts-ignore
    const displayResult = useSelector((state) => state.calculator.displayResult);
    // @ts-ignore
    const fourLastResults = useSelector((state) => state.calculator.fourLastResults);

    return (
        <SafeAreaView style={tw`flex flex-col`}>
            {(fourLastResults.slice(0, 3)).map((result, index) =>
                <Text
                    style={tw`text-white text-2xl text-right`}
                    key={index}
                >{result ? result : ''}</Text>
            )}
            <Text
                style={tw`text-white text-6xl text-right mt-2`}
            >{displayResult ? result : input}</Text>
        </SafeAreaView>
    )
};

export default Display;