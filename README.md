
# use-layout-animation

This module makes it easy to use [React Native's LayoutAnimation](https://facebook.github.io/react-native/docs/layoutanimation) with React Hooks. It triggers a layout animation whenever some values change. It is used similar to React's `useEffect`.

## Installation
```
yarn add use-layout-animation
```

## Usage

```ts
import { useLayoutAnimation } from 'use-layout-animation';

function Component(props) {
    useLayoutAnimation([props.animateWhenThisPropChanges]);
    // ...
}
```

### Advanced usage

```ts
function Component(props) {
    useLayoutAnimation(
        // props that trigger a layout animation when they change
        [props.animateWhenThisPropChanges, props.orWhenThisPropChanges],
        // LayoutAnimationConfig
        // For reference, see all available presets here:
        // https://facebook.github.io/react-native/docs/layoutanimation#presets
        LayoutAnimation.Presets.spring,
        // Callback when animations end
        () => alert('layout animation done'),
    );
}
```
