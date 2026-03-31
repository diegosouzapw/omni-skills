#!/usr/bin/env python3
"""Print a standardized React Native / Expo intake checklist."""

questions = [
    "What app type is this: Expo Go, Expo development build, Expo prebuild-managed, or bare React Native?",
    "Which platforms are affected: iOS, Android, or both?",
    "Which versions matter here: Expo SDK, React Native, Reanimated, Gesture Handler, navigation stack?",
    "Does the issue reproduce in debug, release, or both?",
    "Is the task mainly about lists, animations, images, navigation, native config, or monorepo resolution?",
    "Are native modules, custom fonts, or config plugins involved?",
    "Is this a monorepo, and where do native dependencies live?",
    "Is the app using the New Architecture if that affects compatibility or performance guidance?",
]

print("React Native / Expo triage questions:\n")
for index, question in enumerate(questions, start=1):
    print(f"{index}. {question}")
