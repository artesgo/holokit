<script>
	import { Flex, Slider, Card } from "$lib";
</script>

<Flex row gap={1}>
  <Card>
    <Slider id="vol" label="Volume" min={0} max={1000}></Slider>
    <Slider id="vol2" label="Volume" input min={100} max={1000}></Slider>
  </Card>
  <Card>
    <Slider theme="success" id="vol" label="Volume" min={0} max={1000}></Slider>
    <Slider borderless theme="success" id="vol" label="Volume" min={0} max={1000}></Slider>
    <Slider theme="info" id="vol" label="Volume" min={0} max={1000}></Slider>
    <Slider borderless theme="info" id="vol" label="Volume" min={0} max={1000}></Slider>
    <Slider theme="warning" id="vol" label="Volume" min={0} max={1000}></Slider>
    <Slider borderless theme="warning" id="vol" label="Volume" min={0} max={1000}></Slider>
    <Slider theme="danger" id="vol" label="Volume" min={0} max={1000}></Slider>
    <Slider borderless theme="danger" id="vol" label="Volume" min={0} max={1000}></Slider>
    <Slider theme="neutral" id="vol" label="Volume" min={0} max={1000}></Slider>
    <Slider borderless theme="neutral" id="vol" label="Volume" min={0} max={1000}></Slider>
  </Card>
</Flex>
