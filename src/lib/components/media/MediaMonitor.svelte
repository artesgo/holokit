<script lang="ts">
  import type { MediaContext } from '$lib/stores';
	import { getContext } from "svelte";

  let innerWidth = 0;
	let mediaManager = getContext<MediaContext>('media');
	$: {
		mediaManager.set(innerWidth);
	}
</script>

<svelte:window bind:innerWidth />