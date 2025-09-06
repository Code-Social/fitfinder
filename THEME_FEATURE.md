# Dark/Light Theme Feature

## Overview
The Profile Rank (FitFinder) application now supports both light and dark themes, providing users with a better experience in different lighting conditions and personal preferences.

## Features Implemented

### 1. Theme Toggle
- **Location**: Header (top-right corner, next to GitHub button)
- **Design**: Beautiful toggle switch with sun/moon icons
- **Functionality**: Click to switch between light and dark themes
- **Accessibility**: Proper ARIA labels and keyboard navigation support

### 2. System Theme Detection
- **Automatic Detection**: Respects user's system preference (`prefers-color-scheme`)
- **Fallback**: Defaults to light theme if no preference is detected
- **Dynamic Updates**: Automatically updates when system theme changes

### 3. Theme Persistence
- **Local Storage**: User's theme preference is saved and restored on page reload
- **Priority**: User selection takes precedence over system preference
- **Reset**: Can be reset by clearing browser data

## Technical Implementation

### Files Created/Modified:
- `src/contexts/ThemeContext.tsx` - Theme management with React Context
- `src/components/ThemeToggle.tsx` - Toggle component with animations
- `src/components/ThemeToggle.css` - Styling for the toggle component
- `src/App.tsx` - Updated to include ThemeProvider and toggle
- `src/App.css` - Updated with CSS variables for theming

### Key Features:
- **CSS Variables**: All colors are defined as CSS custom properties
- **Smooth Transitions**: 0.3s ease transitions for theme changes
- **Responsive Design**: Toggle adapts to different screen sizes
- **TypeScript Support**: Full type safety for theme management

## Theme Colors

### Light Theme:
- Background: `#f5f5f5` (light gray)
- Cards: `#ffffff` (white)
- Text: `#333333` (dark gray)
- Primary: `#007bff` (blue)
- Borders: `#dddddd` (light gray)

### Dark Theme:
- Background: `#1a202c` (dark gray)
- Cards: `#2d3748` (medium dark gray)
- Text: `#f7fafc` (light gray)
- Primary: `#63b3ed` (light blue)
- Borders: `#4a5568` (medium gray)

## Usage

### For Users:
1. Click the theme toggle in the header (moon/sun icon)
2. Theme changes immediately with smooth animation
3. Preference is automatically saved
4. System theme changes are respected (if no manual selection)

### For Developers:
```typescript
import { useTheme } from './contexts/ThemeContext';

const MyComponent = () => {
  const { theme, toggleTheme, setTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
};
```

## Browser Support
- **Modern Browsers**: Full support for CSS custom properties
- **System Theme**: `prefers-color-scheme` media query support
- **Local Storage**: For theme persistence
- **Fallbacks**: Graceful degradation for older browsers

## Accessibility
- **Keyboard Navigation**: Toggle is fully keyboard accessible
- **Screen Readers**: Proper ARIA labels and descriptions
- **Focus Indicators**: Clear focus states for keyboard users
- **High Contrast**: Themes maintain good contrast ratios

## Future Enhancements
- [ ] Theme-specific images/icons
- [ ] Custom theme colors
- [ ] Theme scheduling (auto-switch based on time)
- [ ] Reduced motion support for animations
