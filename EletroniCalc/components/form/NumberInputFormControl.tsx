import { TextInput } from 'react-native'

import React from 'react'

interface NumberInputFormControlProps {
    placeholder?: string
    placeholderColor?: string
    inputValue?: string
    onChangeText?: (value: string) => void
    onChange?: () => void
}

export function NumberInputFormControl(props: NumberInputFormControlProps) {
    const onChangeText = (value: string) => {
        if (props.onChangeText) {
            props.onChangeText(value)
        }
    }

    return (
        <TextInput
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderColor}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            keyboardType="numeric"
            onChangeText={(text) => onChangeText(text)}
            onChange={props.onChange}
        >
            {props.inputValue}
        </TextInput>
    )
}
