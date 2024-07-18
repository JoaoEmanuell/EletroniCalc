import { calcEnergyConsumption } from "./calcEnergyConsumption"

export function getEnergyConsumption(kwHour: string, kwHourInputValue: string, dropdownMenuListValue: string, powerInputValue: string, hoursInputValue: string) {
    const validators = {
      'kwHourInputValue': ['', kwHour],
      'dropdownMenuListValue': ['0', 'Dispositivo Qualquer']
    }
    if (kwHourInputValue === validators.kwHourInputValue[0]) {
      kwHourInputValue = validators.kwHourInputValue[1]
    }
    if (dropdownMenuListValue === validators.dropdownMenuListValue[0]) {
      dropdownMenuListValue = validators.dropdownMenuListValue[1]
    }
    let energy = calcEnergyConsumption(
      Number(powerInputValue.replaceAll(',', '.')),  // Convert to decimal number
      Number(hoursInputValue.replaceAll(',', '.')),  // Convert to decimal number
      Number(kwHourInputValue.replaceAll(',', '.'))  // Convert to decimal number
    )
    if (energy === 'NaN') {
      energy = '0.00'
    }
    return `Foram gastos em média R$ ${energy} por mês com a utilização do aparelho '${dropdownMenuListValue}'`
}