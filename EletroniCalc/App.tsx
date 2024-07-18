import { ScrollView, Text } from 'react-native'
import React from 'react'

import { readDataJson } from './source/readDataJson'
import { orderDevices } from './source/orderDevices'
import { getEnergyConsumption } from './source/getEnergyConsumption'

import { FormControl } from './components/form/FormControl'
import { DropdownMenuList } from './components/form/DropdownMenuList'
import { ButtonSuccess } from './components/ButtonSuccess'

const dataJson = readDataJson()
const kwHour = dataJson.kw_hour.toString()
const devicesData = orderDevices(dataJson.devices)

export default function App() {
    let [kwHourInputValue, setTextKwHourInput] = React.useState('')
    let [dropdownMenuListValue, setDropdownMenuListValue] = React.useState('')
    let [powerInputValue, setTextPowerInput] = React.useState('')
    let [hoursInputValue, setTextHoursInput] = React.useState('')
    let [responseTextValue, setResponseText] = React.useState('')
    const nameForAnyDevice = 'Dispositivo Qualquer'

    const calcButtonPress = () => {
        setResponseText(
            getEnergyConsumption(
                String(kwHour),
                String(kwHourInputValue),
                String(dropdownMenuListValue),
                String(powerInputValue),
                String(hoursInputValue)
            )
        )
    }

    const selectItem = () => {
        // Select item
        if (
            dropdownMenuListValue === '0' ||
            dropdownMenuListValue === 'Dispositivo Qualquer'
        ) {
            // If item not set
            dropdownMenuListValue = 'Dispositivo Qualquer'
            setTextPowerInput('0')
        } else {
            // If not have a valid value
            if (dropdownMenuListValue == undefined) {
                dropdownMenuListValue = 'Dispositivo Qualquer'
                setDropdownMenuListValue('Dispositivo Qualquer')
            }
            const deviceNameKey = dropdownMenuListValue.replaceAll(' ', '_')
            setTextPowerInput(dataJson.devices[deviceNameKey])
            calcButtonPress()
        }
    }

    const onChangeInputEditing = () => {
        calcButtonPress()
    }

    return (
        <ScrollView className="p-5 w-full max-w-lg bg-white">
            <Text className="font-title text-2xl font-bold mb-2 text-center text-black">
                Cálculo de energia elétrica
            </Text>

            <FormControl
                labelText="Kw/hour:"
                textInputPlaceholder="Valor do kilowatt hora"
                inputValue={kwHour}
                onChangeText={setTextKwHourInput}
                onChange={onChangeInputEditing}
                textInputPlaceholderColor="#9ca3af"
            />

            <DropdownMenuList
                labelText="Aparelho eletrônico:"
                data={devicesData}
                searchPlaceholder="Selecione o dispositivo"
                setSelected={setDropdownMenuListValue}
                onSelect={selectItem}
                notFoundText={nameForAnyDevice}
            />

            <FormControl
                labelText="Potência:"
                textInputPlaceholder="Potência em watts do dispositivo"
                onChangeText={setTextPowerInput}
                inputValue={powerInputValue}
                onChange={onChangeInputEditing}
                textInputPlaceholderColor="#9ca3af"
            />

            <FormControl
                labelText="Horas:"
                textInputPlaceholder="Total de horas utilizadas por mês"
                onChangeText={setTextHoursInput}
                onChange={onChangeInputEditing}
                textInputPlaceholderColor="#9ca3af"
            />

            <ButtonSuccess text="Calcular Gastos" onPress={calcButtonPress} />

            <Text className="mt-2 text-center text-black">
                {responseTextValue}
            </Text>
        </ScrollView>
    )
}
