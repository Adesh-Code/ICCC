module.exports = {
  "state-activate": {
    transitionTimingFunction: {
      value: "{primitives.transitions.easing.energetic}"
    },
    transitionDuration: { value: "{primitives.transitions.duration.2}" }
  },
  "state-blur": {
    transitionTimingFunction: {
      value: "{primitives.transitions.easing.smooth}"
    },
    transitionDuration: {
      value: "{primitives.transitions.duration.3}"
    }
  },
  leave: {
    transitionTimingFunction: {
      value: "{primitives.transitions.easing.speed-up}"
    },
    transitionDuration: {
      value: "{primitives.transitions.duration.5}"
    }
  },
  enter: {
    transitionTimingFunction: {
      value: "{primitives.transitions.easing.slow-down}"
    },
    transitionDuration: {
      value: "{primitives.transitions.duration.5}"
    }
  },
  morph: {
    transitionTimingFunction: {
      value: "{primitives.transitions.easing.smooth}"
    },
    transitionDuration: {
      value: "{primitives.transitions.duration.4}"
    }
  },
  fade: {
    transitionTimingFunction: {
      value: "{primitives.transitions.easing.smooth}"
    },
    transitionDuration: {
      value: "{primitives.transitions.duration.5}"
    }
  }
};
