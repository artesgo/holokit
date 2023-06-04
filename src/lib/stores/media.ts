import { get, writable } from 'svelte/store';

export interface MediaState {
	width: number;
	sizes: Map<string, number>;
	breakpoints: Map<string, boolean>;
}

const mediaState: MediaState = {
	width: 1200,
	sizes: new Map([
		['small', 600],
		['mobile', 768],
		['tablet', 992],
		['desktop', 1200],
		['wide', 1500]
	]),
	breakpoints: new Map([
		['tiny', false],
		['small', false],
		['mobile', false],
		['tablet', false],
		['desktop', false],
		['wide', false]
	])
};

export interface MediaContext {
	width: number;
	subscribe: () => void;
	set: (width: number) => void;
	replace: (sizeMap: Map<string, number>) => void;

	isSmall: () => boolean;
	isMobile: () => boolean;
	isTablet: () => boolean;
	isDesktop: () => boolean;
	isWide: () => boolean;

  atLeastSmall: () => boolean;
  atLeastMobile: () => boolean;
  atLeastTablet: () => boolean;
  atLeastDesktop: () => boolean;
}

export function createMediaManager() {
	const store = writable<MediaState>(mediaState);
	const { subscribe, update } = store;
	return {
		subscribe,
		set: (width: number) => {
			const sizesMap = ['wide', 'desktop', 'tablet', 'mobile'];
			const breakpoints = get(store).breakpoints;
			const sizes = get(store).sizes;
			// reset the values
			breakpoints.set('small', false);
			breakpoints.set('tiny', false);
			for (const size of sizesMap) {
				breakpoints.set(size, false);
			}
			// check the smallest size
			if ((sizes.get('small') as number) < width && (sizes.get('mobile') as number) >= width) {
				breakpoints.set('small', true);
			}
			if ((sizes.get('small') as number) >= width) {
				breakpoints.set('tiny', true);
			}
			// check the rest of the sizes
			for (const size of sizesMap) {
				const value = sizes.get(size) as number;
				// if the largest is true, the rest don't need to be checked
				if (width > value) {
					breakpoints.set(size, true);
					break;
				}
			}
			update((state) => ({
				...state,
				width,
				breakpoints
			}));
		},
		replace: (sizeMap: Map<string, number>) => {
			update((state) => ({
				...state,
				sizes: sizeMap
			}));
		}
	};
}

export function isBreakpoint(store: MediaState) {
	return {
		tiny: () => {
			return store.breakpoints.get('tiny');
		},
		small: () => {
			return store.breakpoints.get('small');
		},
		atLeastSmall: () => {
			return (
        store.breakpoints.get('small') ||
				store.breakpoints.get('mobile') ||
				store.breakpoints.get('tablet') ||
				store.breakpoints.get('desktop') ||
				store.breakpoints.get('wide')
			);
		},
		mobile: () => {
			return store.breakpoints.get('mobile');
		},
		atLeastMobile: () => {
			return (
				store.breakpoints.get('mobile') ||
				store.breakpoints.get('tablet') ||
				store.breakpoints.get('desktop') ||
				store.breakpoints.get('wide')
			);
		},
		tablet: () => {
			return store.breakpoints.get('tablet');
		},
		atLeastTablet: () => {
			return (
				store.breakpoints.get('tablet') ||
				store.breakpoints.get('desktop') ||
				store.breakpoints.get('wide')
			);
		},
		desktop: () => {
			return store.breakpoints.get('desktop');
		},
		atLeastDesktop: () => {
			return (
				store.breakpoints.get('desktop') ||
				store.breakpoints.get('wide')
			);
		},
		wide: () => {
			return store.breakpoints.get('wide');
		}
	};
}
