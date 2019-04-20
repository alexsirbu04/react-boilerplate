export const useUtils = () => {
	const getUniqueId = () =>
		`_${Math.random()
			.toString(36)
			.substr(2, 9)}`;

	return { getUniqueId };
};
