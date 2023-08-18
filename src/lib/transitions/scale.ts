import { gsap } from 'gsap';

export function gscale(node: HTMLElement, { ease = 'none', duration = 1000 } = {}) {
	const timeline = gsap.timeline();
	const _duration = duration / 1000;
	timeline
		.from(node, {
			duration: _duration,
			width: 0,
			height: 0,
			opacity: 0,
			overflow: 'hidden',
			ease: ease,
		});

	timeline.progress(1);

	return {
		duration,
		tick: (t: number) => {
			timeline.progress(t);
		}
	};
}
