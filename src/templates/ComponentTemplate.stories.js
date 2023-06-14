import { html } from 'lit-html';

export default {
  title: 'Components/{{pascalCase name}}',
};

export const Default = () => html`
  <div class="{{pascalCase name}}">
    <h1>{{pascalCase name}} Component</h1>
  </div>
`;
