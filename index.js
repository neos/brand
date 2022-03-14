const upperFirst = value => `${value.charAt(0).toUpperCase()}${value.slice(1)}`

//
// This file can be installed and imported across packages to have one
// single source of truth for colors and general `styleguide` styles
// of the Neos brand.
//
const config = {
	colors: {
		primaryViolet: '#26224C',
		primaryBlue: '#00ADEE',
		contrastDarkest: '#141414',
		contrastDarker: '#222',
		contrastDark: '#3f3f3f',
		contrastNeutral: '#323232',
		contrastBright: '#999',
		contrastBrighter: '#adadad',
		contrastBrightest: '#FFF',
		success: '#00a338',
		warn: '#ff8700',
		error: '#ff460d',
		uncheckedCheckboxTick: '#5B5B5B'
	},
	fonts: {
		headings: {
			family: 'Open Sans',
			style: 'Light',
			cssWeight: '300'
		},
		copy: {
			family: 'Open Sans',
			style: 'Regular',
			cssWeight: '400'
		}
	}
};
const generateCssVarsObject = (subject = config, predicate = '') => {
	const hasPredicate = predicate && predicate.length;
	let target = {};

	Object.keys(subject).forEach(key => {
		const val = subject[key];
		const camelKey = upperFirst(key);
		const nestedPredicate = hasPredicate ? predicate + camelKey : key;

		if (typeof val === 'object') {
			target = Object.assign({}, target, generateCssVarsObject(val, nestedPredicate));
		} else {
			target[`--${predicate}${camelKey}`] = val;
		}
	});

	return target;
}

module.exports = {
	config,
	generateCssVarsObject
};
