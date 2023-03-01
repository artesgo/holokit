<script>
	import { Card, Theme } from "$lib";
</script>


<Theme theme={{ color: '#F00', paddingHL: '64px' }}>
  <Card>Hi</Card>
</Theme>
<Theme theme={{ color: '#FC0', paddingHL: '32px' }}>
  <Card>Hello</Card>
</Theme>
<Theme theme={{ color: '#FF0', paddingHL: '16px' }}>
  <Card>Welcome</Card>
</Theme>
<Theme theme={{ color: '#CF0', paddingHL: '8px' }}>
  <Card>To</Card>
</Theme>
<Theme theme={{ color: '#0F0', paddingHL: '4px' }}>
  <Card>The</Card>
</Theme>
<Theme theme={{ color: '#0FC', paddingHL: '8px' }}>
  <Card>Rainbow</Card>
</Theme>
<Theme theme={{ color: '#0FF', paddingHL: '16px' }}>
  <Card>Road</Card>
</Theme>
<Theme theme={{ color: '#0CF', paddingHL: '32px' }}>
  <Card>Show</Card>
</Theme>
<Theme theme={{ color: '#00F', paddingHL: '64px' }}>
  <Card>!</Card>
</Theme>


<Theme theme={{ color: 'something wrong', paddingHL: '64px' }}>
  <Card>Bad Props, doesn't break, but also doesn't default back to working variable</Card>
</Theme>