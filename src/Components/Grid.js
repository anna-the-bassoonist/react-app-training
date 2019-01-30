import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import book from './img/book.jpg';
import ibis from './img/ibis.jpg';

const GridExamplePadded = () => (
  <div>
    <p>Text left and Text right
    </p>

    <Grid columns={4} padded textAlign="justified">
      <Grid.Column>
        <h2>left Text</h2>
        <p>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
    Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
    ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
    consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
    a, venenatis vitae, justo. Nullam felis eu pede
    link mollis pretium.Intege Etiam ultricies nisi vel augue.
    Curabitur ullamcorper ultricies nisi.
        </p>
      </Grid.Column>
      <Grid.Column>
        <Image bordered size="huge" src={book} verticalAlign="bottom" />
      </Grid.Column>
      <Grid.Column>
        <h2>right Text</h2>
        <p>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
    Aenean massa strong.isque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
    Curabitur ullamcoum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
    Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
    ridiculus mus. Donec quaunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
    vulputaenean imperdiet. Etiam ultricies nisi vel augue.
    Curabitur ullamcorper ultricies nisi.
        </p>
      </Grid.Column>
      <Grid.Column>
        <Image bordered centered="true" size="huge" src={ibis} />
      </Grid.Column>
    </Grid>
  </div>
);

export default GridExamplePadded;
