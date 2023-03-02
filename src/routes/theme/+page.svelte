<script>
	import { Card, Theme } from "$lib";
	import Button from "$lib/components/button/Button.svelte";
</script>


<Theme theme='void' override={{ color: '#F00', paddingHL: '64px', backgroundColorAlt: '#333' }}>
  <Card>Hi</Card>
</Theme>
<Theme theme='void' override={{ color: '#FC0', paddingHL: '32px', backgroundColorAlt: '#333' }}>
  <Card>Hello</Card>
</Theme>
<Theme theme='void' override={{ color: '#FF0', paddingHL: '16px', backgroundColorAlt: '#333' }}>
  <Card>Welcome</Card>
</Theme>
<Theme theme='void' override={{ color: '#CF0', paddingHL: '8px', backgroundColorAlt: '#333' }}>
  <Card>To</Card>
</Theme>
<Theme theme='void' override={{ color: '#0F0', paddingHL: '4px', backgroundColorAlt: '#333' }}>
  <Card>The</Card>
</Theme>
<Theme theme='void' override={{ color: '#0FC', paddingHL: '8px', backgroundColorAlt: '#333' }}>
  <Card>Rainbow</Card>
</Theme>
<Theme theme='void' override={{ color: '#0FF', paddingHL: '16px', backgroundColorAlt: '#333' }}>
  <Card>Road</Card>
</Theme>
<Theme theme='void' override={{ color: '#0CF', paddingHL: '32px', backgroundColorAlt: '#333' }}>
  <Card>Show</Card>
</Theme>
<Theme theme='void' override={{ color: '#00F', paddingHL: '64px', backgroundColorAlt: '#333' }}>
  <Card>!</Card>
</Theme>


<Theme theme='void' override={{ color: 'something wrong', paddingHL: '64px' }}>
  <Card>Bad Props, doesn't break, but also doesn't default back to working variable</Card>
</Theme>



<Theme theme="light">
  <Card>
    Use The Other Theme
    <Button>Test</Button>
  </Card>
</Theme>