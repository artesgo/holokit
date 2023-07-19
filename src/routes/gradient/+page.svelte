<script>
	import { Flex, Gradient, GradientBorder } from "$lib";
</script>

<div class="vars">
  <Flex gap={2}>
    <GradientBorder>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
    </GradientBorder>
  
    
    <Gradient>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
    </Gradient>
  </Flex>
</div>

<style>
  .vars {
    --color1: #0000;
    --color2: #fc0;
    --padding: 8px;
    --border-width: 1px;
    --border-radius: 4px;
    --deg: 45deg;
  }
</style>