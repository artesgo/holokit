import { gsap } from "gsap";
import type { BlurEase } from "./ease";

export function gblur(node: HTMLElement, { blur: _blur = '1rem', ease, duration = 1000 }: BlurEase) {
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
