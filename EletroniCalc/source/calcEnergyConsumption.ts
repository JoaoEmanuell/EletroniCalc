export function calcEnergyConsumption(
        watt: number, use_time: number, kw_hour: number
    ): string {
        watt = Math.abs(watt);
        use_time = Math.abs(use_time);
        kw_hour = Math.abs(kw_hour);
        console.log(watt, use_time, kw_hour)
        return Number(((watt * use_time) / 1000) * kw_hour).toFixed(2);
    };