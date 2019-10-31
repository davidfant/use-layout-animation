import { useEffect } from 'react';
import { LayoutAnimation, LayoutAnimationConfig } from 'react-native';

export function useLayoutAnimation(
    triggers: ReadonlyArray<any>,
    config: LayoutAnimationConfig = LayoutAnimation.Presets.easeInEaseOut,
    onAnimationDidEnd?: () => void,
) {
    useEffect(
        // Note: when using this with eg react-native-web,
        // we need to make sure that LayoutAnimation is set
        () => !!LayoutAnimation && LayoutAnimation.configureNext(config, onAnimationDidEnd),
        triggers,
    );
}
