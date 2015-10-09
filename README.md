# Compile SVG

This package will automatically look for all the SVGs in your codebase, package them up together as a sprite, and insert that sprite in your DOM. 

### Install

```
meteor add utilities:compile-svg
```

### Usage

The package also provides a helper to easily use SVG images (note the triple `{{{...}}}` tag):

```
{{{getSVG filename}}}
```

(Note: `filename` is the svg file's name without its extension)

### Why SVG Sprites?

Loading all your SVGs in a single sprite means they don't take up multiple browser requests, and including them right in the DOM means they're styleable using CSS. See [this article](https://css-tricks.com/svg-symbol-good-choice-icons/) for more info. 