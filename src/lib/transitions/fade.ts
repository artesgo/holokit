import { gsap } from 'gsap';
import type { Ease } from './ease';

export function gfade(node: HTMLElement, { ease, duration = 1000 }: Ease) {
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
