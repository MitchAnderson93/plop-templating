# plop-templating

Generate components using plop, Playwright and Storybook.
Configured to use Storybook (web components/vite).

## How does it work?
See plopfile.js and ./templates.

Current templates:
- ComponentTemplate.js //functional JS
- ComponentTemplate.scss //Scoped styles
- ComponentTemplate.stories.js //Storybook story for testing against AC
- ComponentTemplate.spec.js 

Other ideas:
- ComponentTemplate.hbs //.hbs or similar Squiz matrix template?
- ComponentTemplate.json //Could be used to replicate Matrix metadata schema
- ComponentTemplate.mdx // Content about the component (template to fill out)

## Setup:
'''bash 
    npm install
    npm run storybook
'''

## To build/static host:
'''bash
    npm run build-storybook
    # Add Github pages deploy
''' 
