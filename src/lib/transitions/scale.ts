import { gsap } from 'gsap';
import type { Vec2Ease } from './ease';

export function gscale(node: HTMLElement, { ease, duration = 1000 }: Vec2Ease) {
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
