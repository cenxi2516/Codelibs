/**
 * 异步获取BatteryManager实例对象
 * @return {Promise<BatteryManager>}    Promise对象，数据为BatteryManager实例对象
 */
const batteryManager = (async () => {
    const {
        getBattery
    } = Navigator.prototype;

    if (!getBattery) return;

    return await getBattery.call(navigator);
})();

export default batteryManager;
