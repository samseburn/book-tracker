export const FONT_SIZE = Object.freeze({
	small: '0.875rem',
	base: '1rem',
	large: '1.5rem',
});

export const FONT_WEIGHT = Object.freeze({
	regular: 400,
	medium: 500,
	bold: 700,
});

export const FONT_STYLE = Object.freeze({
	small: () => `
    font-size: 0.875rem;
    line-height: 24px;
    letter-spacing: -0.01em;
  `,
	base: () => `
    font-size: 1rem;
    line-hieght: 1.625;
    letter-spacing: -0.01em;
  `,
	large: () => `
    font-size: 1.125rem;
    line-height: 28px;
    letter-spacing: -0.02em;
  `,
});
