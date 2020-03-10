import { h } from 'preact';
import { storiesOf } from '@storybook/react';

import './typography.scss';

storiesOf('Base/Components', module).add('Modals', () => (
  <div className="container">
    <div className="body">
      <h2>Modals</h2>
      <p>
        Modals should be positioned centered in relation to entire viewport. So
        relation to its tirgger doesn’t really matter.
      </p>
      <p>There are 3 sizes of modals:</p>
      <ul>
        <li>S(mall): 480px width with 24px padding</li>
        <li>Default: 640px width with 32px padding</li>
        <li>L(arge): 800px width with 48px padding</li>
      </ul>
      <p>Use your best judgements when choosing the right size.</p>
      <p>
        If you need to utilize entire modal area and you have to get rid of
        default padding, please use modifier class
        <code>crayons-modal--padding-0</code>.
      </p>
      <p>
        FYI: Modals use “Box” component as background, with Level 3 elevation.
      </p>
    </div>

    <div>
      <div className="crayons-modal">
        Hey, I'm a Default Modal content! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Sequi ea voluptates quaerat eos
        consequuntur temporibus.
      </div>
    </div>

    <div>
      <div className="crayons-modal crayons-modal--s">
        Hey, I'm a Small Modal content! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Sequi ea voluptates quaerat eos consequuntur
        temporibus.
      </div>
    </div>

    <div>
      <div className="crayons-modal crayons-modal--l">
        Hey, I'm a Large Modal content! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Sequi ea voluptates quaerat eos consequuntur
        temporibus.
      </div>
    </div>

    <div>
      <div className="crayons-modal crayons-modal--padding-0">
        Hey, I'm a modal content with no padding! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Sequi ea voluptates quaerat eos
        consequuntur temporibus.
      </div>
    </div>

    <pre>
      <div className="crayons-modal">Hey, ...</div>

      <div className="... crayons-modal--s">Hey, ...</div>

      <div className="... crayons-modal--l">Hey, ...</div>

      <div className="... crayons-modal--padding-0">Hey, ...</div>
    </pre>
  </div>
));
