import { Text, TouchableHighlight } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import { updateInput, updateResult, clearInput } from '../slices/calculatorSlice';
import { useDispatch } from 'react-redux';

const Button = ({ item }) => {
	const dispatch = useDispatch();

	return (
		<SafeAreaView>
			<TouchableHighlight
				style={tw`${item.bgColor} rounded-full ${item.width} h-20 mx-1`}
				onPress={() => {
					if (item.sign == '=') dispatch(updateResult());
					else if (item.sign == 'C') dispatch(clearInput());
					else dispatch(updateInput(item.sign));
				}}
			>
				<Text
					style={tw`${item.textColor} m-auto`}
				>{item.sign}</Text>
			</TouchableHighlight>
		</SafeAreaView>
	)
};

export default Button;