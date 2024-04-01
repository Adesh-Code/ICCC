const lightGradients = require("../light/gradients.cjs");

module.exports = {
  gradients: {
    ...lightGradients.gradients,
    "fill-category-title": {
      value:
        "linear-gradient(180deg, rgba(23,23,23,1) 0%, rgba(23,23,23,1) 83%, rgba(23,23,23,0) 100%)"
    },
    "row-activated-loud-reverse": {
      value: `linear-gradient(90deg, rgba(95, 96, 255, 0.048) 0%, rgba(95, 96, 255, 0.16) 100%)`
    },
    "row-highlighted-activated-loud-reverse": {
      value: `linear-gradient(90deg, rgba(95, 96, 255, 0.048) 0%, rgba(95, 96, 255, 0.16) 100%), rgba(95, 96, 255, 0.11)`
    },
    "row-highlighted-hover-loud": {
      value: `linear-gradient(90deg, rgba(95, 96, 255, 0.16) 0%, rgba(95, 96, 255, 0.00048) 100%), rgba(95, 96, 255, 0.11)`
    },
    "row-highlighted-hover-loud-reverse": {
      value: `linear-gradient(90deg, rgba(95, 96, 255, 0.00048) 0%, rgba(95, 96, 255, 0.16) 100%), rgba(95, 96, 255, 0.11)`
    },
    "row-highlighted-pressed-loud": {
      value: `linear-gradient(90deg, rgba(43, 194, 117, 0.16) 0%, rgba(43, 194, 117, 0.00048) 100%), rgba(43, 194, 117, 0.11)`
    },
    "row-highlighted-pressed-loud-reverse": {
      value: `linear-gradient(90deg, rgba(43, 194, 117, 0.00048) 0%, rgba(43, 194, 117, 0.16) 100%), rgba(43, 194, 117, 0.11)`
    },
    "row-highlighted-selected-activated-loud-reverse": {
      value: `linear-gradient(90deg, rgba(95, 96, 255, 0.048) 0%, rgba(95, 96, 255, 0.16) 100%), rgba(95, 96, 255, 0.21)`
    },
    "row-highlighted-selected-hover-loud": {
      value: `linear-gradient(90deg, rgba(95, 96, 255, 0.16) 0%, rgba(95, 96, 255, 0.00048) 100%), rgba(95, 96, 255, 0.21)`
    },
    "row-highlighted-selected-hover-loud-reverse": {
      value: `linear-gradient(90deg, rgba(95, 96, 255, 0.00048) 0%, rgba(95, 96, 255, 0.16) 100%), rgba(95, 96, 255, 0.21)`
    },
    "row-highlighted-selected-pressed-loud": {
      value: `linear-gradient(90deg, rgba(43, 194, 117, 0.16) 0%, rgba(43, 194, 117, 0.00048) 100%), rgba(43, 194, 117, 0.21)`
    },
    "row-highlighted-selected-pressed-loud-reverse": {
      value: `linear-gradient(90deg, rgba(43, 194, 117, 0.00048) 0%, rgba(43, 194, 117, 0.16) 100%), rgba(43, 194, 117, 0.21)`
    },
    "row-hover-loud-reverse": {
      value: `linear-gradient(90deg, rgba(95, 96, 255, 0.00048) 0%, rgba(95, 96, 255, 0.16) 100%)`
    },
    "row-pressed-loud-reverse": {
      value: `linear-gradient(90deg, rgba(43, 194, 117, 0.00048) 0%, rgba(43, 194, 117, 0.16) 100%)`
    },
    "row-selected-activated-loud-reverse": {
      value: `linear-gradient(90deg, rgba(95, 96, 255, 0.048) 0%, rgba(95, 96, 255, 0.16) 100%), rgba(95, 96, 255, 0.16)`
    },
    "row-selected-hover-loud": {
      value: `linear-gradient(90deg, rgba(95, 96, 255, 0.16) 0%, rgba(95, 96, 255, 0.00048) 100%), rgba(95, 96, 255, 0.16)`
    },
    "row-selected-hover-loud-reverse": {
      value: `linear-gradient(90deg, rgba(95, 96, 255, 0.00048) 0%, rgba(95, 96, 255, 0.16) 100%), rgba(95, 96, 255, 0.16)`
    },
    "row-selected-pressed-loud": {
      value: `linear-gradient(90deg, rgba(43, 194, 117, 0.16) 0%, rgba(43, 194, 117, 0.00048) 100%), rgba(43, 194, 117, 0.16)`
    },
    "row-selected-pressed-loud-reverse": {
      value: `linear-gradient(90deg, rgba(43, 194, 117, 0.00048) 0%, rgba(43, 194, 117, 0.16) 100%), rgba(43, 194, 117, 0.16)`
    }
  }
};
