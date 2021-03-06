module.exports = {
  addon: {
    'app.js': '// app',

    components: {
      // A standalone component
      'top-level-component': {
        'index.hbs': '{{!-- top-level-component.hbs --}}',
        'index.ts': '// top-level-component.ts',
      },

      // A template-only component
      'template-only-component': {
        'index.hbs': '{{!-- template-only-component.hbs --}}',
      },

      // A nested component
      'parent-component': {
        'index.hbs': '{{!-- parent-component.hbs --}}',
        'index.ts': '// parent-component.ts',
        'child-component': {
          'index.hbs': '{{!-- parent-component/child-component.hbs --}}',
          'index.ts': '// parent-component/child-component.ts',
          'grandchild-component': {
            'index.hbs': '{{!-- parent-component/child-component/grandchild-component.hbs --}}',
            'index.ts': '// parent-component/child-component/grandchild-component.ts',
          },
        },
      },

      // Another nested component
      nested1: {
        'nested-component': {
          'index.hbs': '{{!-- nested1/nested-component.hbs --}}',
          'index.ts': '// nested1/nested-component.ts',
        },
        nested2: {
          'super-nested-component': {
            'index.hbs': '{{!-- nested1/nested2/super-nested-component.hbs --}}',
            'index.ts': '// nested1/nested2/super-nested-component.ts',
          },
        },
      },

      // A component with layoutName
      'layout-name': {
        'has-layout-name.ts': [
          '// top-level-component.ts',
          'Component.extend({ layoutName: "components/layout-name/layout-name-template" });',
        ].join('\n'),
      },

      'layout-decorator': {
        'index.hbs': '{{!-- layout-decorator-template.hbs --}}',
        'index.ts': [
          'import Component from "@ember/component";',
          'export default class LayoutDecorator extends Component {}',
        ].join('\n'),
      },

      'layout-property-classic': {
        'index.hbs': '{{!-- layout-property-classic.hbs --}}',
        'index.ts': [
          'import Component from "@ember/component";',
          'import SomeMixin from "my-addon/mixins/whatever";',
          'export default Component.extend(SomeMixin, {});',
        ].join('\n'),
      },

      'layout-property-native': {
        'index.hbs': '{{!-- layout-property-native.hbs --}}',
        'index.ts': [
          'import Component from "@ember/component";',
          'export default class NativeProperty extends Component {}',
        ].join('\n'),
      },

      // A template imported into multiple component classes
      'first-repeated-import.ts': [
        '// first-repeated-import.ts',
        'import Component from "@ember/component"',
        'import { layout } from "@ember-decorators/component";',
        'import template from "my-addon/templates/components/repeatedly-imported";',
        '@layout(template)',
        'export default class FirstRepeatedImport extends Component {}',
      ].join('\n'),
      'second-repeated-import.ts': [
        '// second-repeated-import.ts',
        'import Component from "@ember/component"',
        'import { layout } from "@ember-decorators/component";',
        'import template from "my-addon/templates/components/repeatedly-imported";',
        '@layout(template)',
        'export default class SecondRepeatedImport extends Component {}',
      ].join('\n'),

      // A component with partial
      partials: {
        'with-partial': {
          'index.hbs': [
            '{{!-- with-partial.hbs --}}',
            '{{partial "components/partials/partial-one-template"}}',
            '{{partial "components/partials/partial-two-template"}}',
            '{{partial "components/partials/partial-three-template"}}',
          ].join('\n'),
        },
      },
    },

    templates: {
      'application.hbs': '{{outlet}}',

      components: {
        // A component with layoutName
        'layout-name': {
          'layout-name-template.hbs': '{{!-- layout-name-template.hbs --}}',
        },

        // A partial template
        partials: {
          'partial-one-template.hbs': '{{!-- partial-one-template.hbs --}}',
          'partial-two-template.hbs': '{{!-- partial-two-template.hbs --}}',
          '-partial-three-template.hbs': '{{!-- partial-three-template.hbs --}}',
        },
        'repeatedly-imported.hbs': '{{!-- repeatedly-imported.hbs --}}',
      },
    },
  },
};
