import { defineConfig } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'
import transformerCompileClass from '@unocss/transformer-compile-class'

export default defineConfig({
  transformers: [
    transformerVariantGroup(),
    transformerCompileClass({
      classPrefix: 'fluentui-',
    }),
    transformerDirectives(),
  ],
})
