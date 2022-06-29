import { FlatList, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Button from './components/Button';
import tw from 'twrnc';
import { useState } from 'react';
import Display from './components/Display';
import { store } from './store';
import { Provider } from 'react-redux';

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
    sign: '*',
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
  const [input, setInput] = useState('');

  return (
    <Provider store={store}>
      <SafeAreaProvider style={tw`flex bg-neutral-900`}>
        <View
          style={tw`h-1/4`}
        >
          <Display></Display>
        </View>
        <View
          style={tw`h-3/4 flex flex-row flex-wrap justify-around mx-auto my-auto`}
        >
            {DATA.map(item =>
              <Button item={item} key={item.sign} />
            )}

        </View>


      </SafeAreaProvider>
    </Provider>

  );
}

