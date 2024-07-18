import { View } from 'react-native'
import { NumberInputFormControl } from './NumberInputFormControl'
import { LabelFormControl } from './LabelFormControl'

interface FormControlProps {
    labelText: string
    textInputPlaceholder: string
    textInputPlaceholderColor?: string
    inputValue?: string
    onChangeText?: (value: string) => void
    onChange?: () => void
}

export function FormControl(props: FormControlProps) {
    return (
        <View className="mt-5 w-full max-w-lg">
            <LabelFormControl text={props.labelText}></LabelFormControl>
            <NumberInputFormControl
                placeholder={props.textInputPlaceholder}
                placeholderColor={props.textInputPlaceholderColor}
                inputValue={props.inputValue}
                onChangeText={props.onChangeText}
                onChange={props.onChange}
            ></NumberInputFormControl>
        </View>
    )
}
