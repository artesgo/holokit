<script>
	import { Flex, Slider } from "$lib";
</script>

<Flex row gap={1}>
  Row Flex
  <Slider id="vol" label="Volume" min={0} max={1000}></Slider>
  <Slider id="vol2" label="Volume" input min={100} max={1000}></Slider>
</Flex>
