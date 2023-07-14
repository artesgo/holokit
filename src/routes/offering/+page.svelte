<script>
	import { Card, Grid, GridItem, Theme } from "$lib";
</script>

<div class="pt-10">
  <Grid columnTemplate="1fr 1fr">
    <GridItem col={1} row={1}>
      <Theme theme={'void'} override={{ backgroundColorAlt: '#000a' }} stretch="element">
        <Card stretch="element">
          <h1>Modern Web App</h1>
          <ul>
            <li>JavaScript Frameworks</li>
            <li>Component Architecture</li>
            <li>Libraries</li>
          </ul>
        </Card>
      </Theme>
    </GridItem>
    <GridItem col={1} row={2}>
      <Theme theme={'void'} override={{ backgroundColorAlt: '#0009' }} stretch="element">
        <Card stretch="element">
          <h1>Collaboration</h1>
          <ul>
            <li>Pair Programming</li>
            <li>Rubber Ducking</li>
          </ul>
        </Card>
      </Theme>
    </GridItem>
    <GridItem col={1} row={3}>
      <Theme theme={'void'} override={{ backgroundColorAlt: '#0007' }} stretch="element">
        <Card stretch="element">
          <h1>Critical Thinking</h1>
          <ul>
            <li>Problem Breaking Down</li>
            <li>Task Management</li>
          </ul>
        </Card>
      </Theme>
    </GridItem>
    <GridItem col={1} row={4}>
      <Theme theme={'void'} override={{ backgroundColorAlt: '#0005' }} stretch="element">
        <Card stretch="element">
          <h1>Like a Senior Developer</h1>
          <ul>
            <li>Clean Code</li>
            <li>Best Practices</li>
            <li>Bad Code to Good</li>
          </ul>
        </Card>
      </Theme>
    </GridItem>
    <GridItem col={1} row={5}>
      <Theme theme={'void'} override={{ backgroundColorAlt: '#0003' }}>
        <Card stretch="element" align>
          <h1>Not Just the Basics</h1>
          <ul>
            <li>This is teaching you how to learn</li>
            <li>It's teaching you how to be ok with uncertainty</li>
            <li>Keeping up with technology</li>
          </ul>
        </Card>
      </Theme>
    </GridItem>

    <GridItem col={2} row={1}>
      <Theme theme={'void'} override={{ backgroundColorAlt: '#000a' }} stretch="element">
        <Card stretch="element">
          <h1>Using a Web Framework</h1>
          <ul>
            <li>Svelte / Sveltekit</li>
            <li>Build your own components / Library</li>
            <li>Component Breakdown Thought Process</li>
          </ul>
        </Card>
      </Theme>
    </GridItem>
    <GridItem col={2} row={2}>
      <Theme theme={'void'} override={{ backgroundColorAlt: '#0009' }} stretch="element">
        <Card stretch="element">
          <h1>Futureproof Yourself</h1>
          <ul>
            <li>Prepare for the workplace</li>
            <li>Or prepare for your own adventure</li>
          </ul>
        </Card>
      </Theme>
    </GridItem>
    <GridItem col={2} row={3}>
      <Theme theme={'void'} override={{ backgroundColorAlt: '#0007' }} stretch="element">
        <Card stretch="element">
          <h1>Take on Challenges</h1>
          <ul>
            <li>Find a problem you want to solve</li>
            <li>Come up with a solution</li>
          </ul>
        </Card>
      </Theme>
    </GridItem>
    <GridItem col={2} row={4}>
      <Theme theme={'void'} override={{ backgroundColorAlt: '#0005' }} stretch="element">
        <Card stretch="element">
          <h1>Mentorship</h1>
          <ul>
            <li>Keep connected and show me what you make</li>
            <li>Get Feedback and Grow</li>
            <li>Take your knowledge to other areas of life</li>
          </ul>
        </Card>
      </Theme>
    </GridItem>
    <GridItem col={2} row={5}>
      <Theme theme={'void'} override={{ backgroundColorAlt: '#0003' }} stretch="element">
        <Card stretch="element">
          <h1>Learn to Build the Web</h1>
          <ul>
            <li>Don't just scroll instagram / tic tok</li>
            <li>Build something</li>
          </ul>
        </Card>
      </Theme>
    </GridItem>
  </Grid>
</div>

<style>
  h1 {
    font-size: 1.2rem;
  }

  .pt-10 {
    padding-top: 1rem;
  }
</style>