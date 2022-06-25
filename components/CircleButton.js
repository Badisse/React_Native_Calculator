import { Text, TouchableHighlight } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';

const CircleButton = ({ item }) => {
	return (
		<SafeAreaView>
			<TouchableHighlight
				style={tw`${item.bgColor} rounded-full ${item.width} h-20 mx-1 my-0`}
				onPress={() => alert(item.textColor)}
			>
				<Text
					style={tw`${item.textColor} m-auto`}
				>{item.sign}</Text>
			</TouchableHighlight>
		</SafeAreaView>
	)
};

export default CircleButton;