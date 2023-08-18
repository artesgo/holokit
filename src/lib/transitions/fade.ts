import { gsap } from 'gsap';

export function gfade(node: HTMLElement, { ease = 'none', duration = 1000 } = {}) {
	const timeline = gsap.timeline();
	const _duration = duration / 1000;
	timeline
		.from(node, {
			duration: _duration / 10,
			height: 0,
			ease: ease
		})
		.from(node, {
			duration: (_duration / 10) * 9,
			opacity: 0
		});

	timeline.progress(1);

	return {
		duration,
		tick: (t: number) => {
			timeline.progress(t);
		}
	};
}
