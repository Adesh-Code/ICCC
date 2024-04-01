# Theme Data

Theme data contains key-value pairs, exported in a range of formats, defining the foundation for Digital HIG styles.

## Concepts

Here is an overview of theme data concepts:

### Role

The type of data described by a design value. E.g., color, font size, or font weight.

### Primitive

A design value with a role. E.g., “iris-400”: A color (type) of value #8080FF

### Token

A name for a design value that describes its potential application and internally maps to primitive values.

- Color "ink-hover": Which resolves to "primitives.colors.tint.iris-400" and may or may not have an opacity value
- Typography: Font size + line height + font weight

More information on tokens can be found here https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421

### Color scheme

Color set that differs from default/global. So, light and dark for Rosetta. HIG has good use cases for this.

### Resolved vs unresolved roles

Resolved roles is the collection after primitive replacement has been effected
