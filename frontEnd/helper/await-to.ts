export const to = async <E extends object, V>(
	promiseTask: Promise<V>,
	errorExt?: object
): Promise<[null, V] | [E, undefined]> => {
	try {
		const data = await promiseTask
		return [null, data]
	} catch (error) {
		return [Object.assign({}, error, errorExt) as E, undefined]
	}
}
