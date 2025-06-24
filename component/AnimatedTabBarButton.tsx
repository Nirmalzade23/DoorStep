import React from 'react';
import { Pressable } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export default function AnimatedTabBarButton(props ) {
  const { children, accessibilityState, style, ...rest } = props;
  const focused = accessibilityState?.selected;
  const scale = useSharedValue(focused ? 1.2 : 1);

  React.useEffect(() => {
    scale.value = withSpring(focused ? 1.2 : 1);
  }, [focused]);

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: focused ? '#5d17b0' : 'transparent',
    borderRadius: 16,
    padding: 8,
    transform: [{ scale: scale.value }],
  }));

  return (
    <Pressable
      {...rest}
      style={[{ flex: 1, alignItems: 'center', justifyContent: 'center' }, style]}
    >
      <Animated.View style={animatedStyle}>
        {children}
      </Animated.View>
    </Pressable>
  );
} 