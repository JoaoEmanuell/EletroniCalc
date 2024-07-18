import { View, Pressable, Text, GestureResponderEvent } from "react-native"

interface ButtonSuccessProps {
    text: string,
    onPress?: () => void
}

export function ButtonSuccess(props: ButtonSuccessProps){
    return (
        <View className='mt-5 px-12 mb-5'>
            <Pressable className="bg-green-600 hover:bg-green-800 py-3 border border-green-800 rounded" onPress={props.onPress}>
                <Text className="text-white font-bold text-center">{props.text}</Text>
            </Pressable>
        </View>
    )
}