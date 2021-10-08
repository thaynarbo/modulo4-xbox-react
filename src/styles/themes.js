const white = '#FFFFFF';
const black = '#000000';
const red = {
	red40: '#BA0000',
	red30: '#DC8080',
	red20: '#F1CCCC',
	red10: '#FCF5F5',
};

const green = {
	green1: '#77bb44',
	green2: '#2ca243',
	green3: '#107c10',
};

const blackShades = {
	black,
	black10: '#2A2A34',
	black20: '#20232C',
	black30: '#1F1E22',
	black40: '#1B1B23',
};

const spacing = {
	space1: '4px',
	space2: '8px',
	space3: '16px',
	space4: '24px',
	space5: '32px',
	space6: '40px',
	space7: '48px',
	space8: '56px',
	space9: '64px',
};

const shadow = {
	shad1: '0px 2px 5px 1px rgba(0, 0, 0, 0.05)',
};

const zIndex = {
	z1: 100,
	z2: 200,
	z3: 300,
	z4: 400,
	z5: 500,
	z6: 600,
	z7: 700,
	z8: 800,
	z9: 900,
};

export const theme = {
	zIndex,
	spacing,
	shadow,
	colors: {
		...red,
		...green,
		white,
		...blackShades,
	},
	fontSizes: {
		small: '1em',
		medium: '2em',
		large: '3em',
		h1: '36px',
		h2: '34px',
		h3: '32px',
		h4: '28px',
		h5: '24px',
		p0: '24px',
		p1: '16px',
		p2: '14px',
		p3: '13px',
		p4: '11px',
	},
};
