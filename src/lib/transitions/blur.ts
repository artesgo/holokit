import { gsap } from "gsap";

export function gblur(node: HTMLElement, { blur: _blur = '1rem', ease = 'none', duration = 1000 } = {}) {
	const timeline = gsap.timeline();
	const f = node.style.filter;
	const _duration = duration / 1000;
	timeline
		.from(node, {
			duration: _duration / 10,
			height: 0,
			ease: ease
		})
		.from(node, {
			duration: _duration / 10 * 9,
			filter: `${f} blur(${_blur})`
		});

	timeline.progress(1);

	return {
		duration,
		tick: (t: number) => {
			timeline.progress(t);
		}
	};
}
