export function clickout(node: HTMLElement) {
	const handleClick = (event: Event) => {
		if (event.target && !node.contains(event.target as HTMLElement)) {
			node.dispatchEvent(new CustomEvent('clickedout'));
		}
	};
	document.addEventListener('click', handleClick, true);
	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
