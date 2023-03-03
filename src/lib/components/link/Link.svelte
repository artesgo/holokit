<script lang="ts">
	export let href = '';
	export let target: string | undefined = undefined;
	export let underline = false;
	let focused = false;
	function focus() {
		focused = true;
	}
	function blur() {
		focused = false;
	}
</script>

<a
	class="holo-link"
	class:underline
	class:focused
	{...$$restProps}
	{href}
	{target}
	on:mouseover={focus}
	on:focus={focus}
	on:blur={blur}
	on:mouseout={blur}
	on:blur
	on:click
	on:contextmenu
	on:dblclick
	on:focus
	on:mousedown
	on:mouseenter
	on:mouseleave
	on:mouseup
	on:mousemove
	on:mouseout
	on:mouseover
	on:keydown
	on:keyup
	on:keypress
>
	<slot />
</a>

<style lang="scss">
	.holo-link {
		color: var(--color);
		text-decoration: none;
	}
	.underline {
		text-decoration: underline;
	}
	.focused {
		outline: 1px solid var(--outline-color);
		outline-offset: var(--outline-offset);
	}
</style>
