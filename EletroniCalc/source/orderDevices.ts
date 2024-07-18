export function orderDevices(devices: {
    category: {
        name: number
    }
}): Array<{
    key: string
    value: string
    disabled: boolean
}> {
    const devices_data = [
        {
            key: '0',
            value: 'Dispositivo Qualquer',
            disabled: true,
        },
    ]

    console.log(devices_data)

    Object.entries(devices).forEach((device) => {
        // Add devices to list
        const treatedName = device[0].replaceAll('_', ' ')
        devices_data.push({
            key: String(device[1]),
            value: treatedName,
            disabled: false,
        })
    })

    console.log(devices_data)

    return devices_data
}
