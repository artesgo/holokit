import { gsap } from 'gsap';

export function gfly(node: HTMLElement, { ease = 'none', duration = 1000, y = 0, x = 0 } = {}) {
	const timeline = gsap.timeline();
  const _duration = duration / 1000;
	timeline
		.from(node, {
			duration: (_duration / 10),
			height: 0,
			ease
		})
		.from(node, {
			position: 'relative',
			duration: (_duration / 10) * 9,
			left: x,
			top: y,
			opacity: 0
		});
	// makes it so the animation does not flash from the initial animation
	timeline.progress(1);

	return {
		duration,
		tick: (t: number) => {
			timeline.progress(t);
		}
	};
}
