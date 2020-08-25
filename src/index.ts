import { useEffect, useRef } from 'react';
import { LayoutAnimation, LayoutAnimationConfig } from 'react-native';

function usePrevious<T>(val: T): T {
    const prev = useRef<T>();
    useEffect(() => {
        prev.current = val;
    });
    return prev.current;
}

export function useLayoutAnimation(
    deps: ReadonlyArray<any>,
    config: LayoutAnimationConfig = LayoutAnimation.Presets.easeInEaseOut,
    onAnimationDidEnd?: () => void,
) {
    useEffect(
        // Note: when using this with eg react-native-web,
        // we need to make sure that LayoutAnimation is set
        () => LayoutAnimation?.configureNext(config, onAnimationDidEnd),
        deps,
    );
}

export function useImmediateLayoutAnimation(
    deps: ReadonlyArray<any>,
    config: LayoutAnimationConfig = LayoutAnimation.Presets.easeInEaseOut,
    onAnimationDidEnd?: () => void,
) {
    const prevDeps = usePrevious(deps);
    const hasChanged = !!prevDeps && deps.some((dep, index) => dep !== prevDeps[index]);
    if (hasChanged) {
        LayoutAnimation?.configureNext(config, onAnimationDidEnd)
    }
}
