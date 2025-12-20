# TeamCard Component

A beautiful, interactive team member card component that follows the SoulSailers website design system.

## Features

- **Responsive Design**: Adapts to different screen sizes
- **Interactive Animations**: Smooth hover effects and transitions
- **Social Media Integration**: Support for Instagram, Twitter, and GitHub links
- **Email Contact**: Direct email functionality
- **Placeholder Support**: Shows initials when no image is provided
- **Brand Colors**: Uses your website's color scheme (primary blue, orange accents)

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | No | Team member's name (defaults to "Team Member") |
| `role` | string | No | Team member's role/position |
| `about` | string | No | Brief description about the team member |
| `image` | string | No | URL to team member's photo |
| `email` | string | No | Email address for contact |
| `social` | object | No | Social media links object |
| `social.instagram` | string | No | Instagram profile URL |
| `social.twitter` | string | No | Twitter profile URL |
| `social.github` | string | No | GitHub profile URL |

## Usage

```jsx
import TeamCard from './components/TeamCard';

const MyTeam = () => {
  return (
    <TeamCard
      name="John Doe"
      role="Senior Travel Consultant"
      about="Specializes in adventure travel and mountain expeditions. Has climbed peaks across the Himalayas."
      image="https://example.com/john-doe.jpg"
      email="john@soulsailers.com"
      social={{
        instagram: 'https://instagram.com/johndoe',
        twitter: 'https://twitter.com/johndoe',
        github: 'https://github.com/johndoe'
      }}
    />
  );
};
```

## Styling

The component uses CSS custom properties (CSS variables) from your main stylesheet:

- `--primary-blue`: Main brand color
- `--orange`: Accent color for hover states
- `--bg-card`: Card background
- `--white`: Text on colored backgrounds
- `--border-color`: Card borders
- `--shadow-card`: Card shadows
- Various transition and spacing variables

## Responsive Breakpoints

- **Desktop**: 280px × 280px
- **Tablet** (≤768px): 260px × 260px
- **Mobile** (≤480px): 240px × 240px

## Animation States

1. **Default**: Card shows profile image/placeholder with minimal info
2. **Hover**: 
   - Card lifts up with shadow
   - Profile image shrinks to top-left corner
   - Full content area expands
   - Social links and contact button become visible

## Accessibility

- Proper semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus indicators

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- CSS custom properties support required