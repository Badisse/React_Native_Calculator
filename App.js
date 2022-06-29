import { FlatList, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Button from './components/Button';
import tw from 'twrnc';

const DATA = [
  {
    sign: 'C',
    width: 'w-20',
    bgColor: 'bg-gray-400',
    textColor: 'text-black'
  },
  {
    sign: '+/-',
    width: 'w-20',
    bgColor: 'bg-gray-400',
    textColor: 'text-black'
  },
  {
    sign: '%',
    width: 'w-20',
    bgColor: 'bg-gray-400',
    textColor: 'text-black'
  },
  {
    sign: '/',
    width: 'w-20',
    bgColor: 'bg-orange-400',
    textColor: 'text-white'
  },
  {
    sign: '7',
    width: 'w-20',
    bgColor: 'bg-gray-800',
    textColor: 'text-white'
  },
  {
    sign: '8',
    width: 'w-20',
    bgColor: 'bg-gray-800',
    textColor: 'text-white'
  },
  {
    sign: '9',
    width: 'w-20',
    bgColor: 'bg-gray-800',
    textColor: 'text-white'
  },
  {
    sign: 'X',
    width: 'w-20',
    bgColor: 'bg-orange-400',
    textColor: 'text-white'
  },
  {
    sign: '4',
    width: 'w-20',
    bgColor: 'bg-gray-800',
    textColor: 'text-white'
  },
  {
    sign: '5',
    width: 'w-20',
    bgColor: 'bg-gray-800',
    textColor: 'text-white'
  },
  {
    sign: '6',
    width: 'w-20',
    bgColor: 'bg-gray-800',
    textColor: 'text-white'
  },
  {
    sign: '-',
    width: 'w-20',
    bgColor: 'bg-orange-400',
    textColor: 'text-white'
  },
  {
    sign: '1',
    width: 'w-20',
    bgColor: 'bg-gray-800',
    textColor: 'text-white'
  },
  {
    sign: '2',
    width: 'w-20',
    bgColor: 'bg-gray-800',
    textColor: 'text-white'
  },
  {
    sign: '3',
    width: 'w-20',
    bgColor: 'bg-gray-800',
    textColor: 'text-white'
  },
  {
    sign: '+',
    width: 'w-20',
    bgColor: 'bg-orange-400',
    textColor: 'text-white'
  },
  {
    sign: '0',
    width: 'w-42',
    bgColor: 'bg-gray-800',
    textColor: 'text-white'
  },
  {
    sign: '.',
    width: 'w-20',
    bgColor: 'bg-gray-800',
    textColor: 'text-white'
  },
  {
    sign: '=',
    width: 'w-20',
    bgColor: 'bg-orange-400',
    textColor: 'text-white'
  },
]

export default function App() {
  return (
    <SafeAreaProvider style={tw`flex bg-neutral-900`}>
      <View
        style={tw`h-1/4`}
      >

      </View>
      <View
        style={tw`h-3/4`}
      >
        <FlatList
          data={DATA}
          renderItem={Button}
          keyExtractor={item => item.sign}
          numColumns={4}
          contentContainerStyle={tw`mx-auto my-auto`}
        />
      </View>


    </SafeAreaProvider>
  );
}

