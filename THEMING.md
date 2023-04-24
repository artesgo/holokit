# Theming

If you wish to use your own theme for this library.

Provide your own theme file containing the following css variables.

```scss
:root {
	// font variables
	--font-size-s: 0.8rem;
	--font-size-m: 0.9rem;
	--font-size-l: 1rem;

	--font-weight-s: 500;
	--font-weight-m: 700;
	--font-weight-l: 900;

	// padding variables
	--padding-h-s: 12px;
	--padding-h-m: 16px;
	--padding-h-l: 20px;
	--padding-v-s: 4px;
	--padding-v-m: 8px;
	--padding-v-l: 12px;

	// margin variables
	--margin-h-s: 12px;
	--margin-h-m: 16px;
	--margin-h-l: 20px;
	--margin-v-s: 12px;
	--margin-v-m: 20px;
	--margin-v-l: 32px;

	// general border variables
	--border: 1px solid;
	--border-radius: 2px;
	--border-radius-rounded: 50%;
	--border-width-m: 2px;
	--border-width-l: 4px;

	// input control variables
	--control-width: 250px;
	--control-min-width: 250px;
	--control-max-width: 750px;
	--control-border: 1px solid;
	--control-border-radius: 2px;
	--outline-offset: 1px;

	// border shadow
	--box-shadow: 0px;

	// misc
	--transition: 100ms;

	// the following are colour tokens to theme various controls in your app
	--success: #5d81c7;
	--success-lightest: #9bb8f3;
	--success-lighter: #7397df;
	--success-darker: #4a6bad;
	--success-darkest: #2d477a;

	--info: #f8db92;
	--info-lightest: #fff2d2;
	--info-lighter: #ffe5a4;
	--info-darker: #eecd79;
	--info-darkest: #e7b841;

	--danger: #c90d40;
	--danger-lightest: #f899b3;
	--danger-lighter: #ee6589;
	--danger-darker: #740825;
	--danger-darkest: #460214;

	--warning: #ff511c;
	--warning-lightest: #ffb6a0;
	--warning-lighter: #ff6b3d;
	--warning-darker: #e93e0a;
	--warning-darkest: #ca2f00;

	--neutral: #62567e;
	--neutral-lightest: #b4a4da;
	--neutral-lighter: #7e6da5;
	--neutral-darker: #493d64;
	--neutral-darkest: #332a49;
}
```
