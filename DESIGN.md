---
name: Stat Clinic
description: A calm medical health app where thesis-writing doctors get their statistics handled and ask for a quote on WhatsApp.
colors:
  primary: "#0b7a62"
  primary-hover: "#09684f"
  on-primary: "#ffffff"
  primary-soft: "#e4f3ee"
  primary-text: "#0a6e58"
  heading: "#0f2b3c"
  text: "#1d3343"
  text-2: "#4f6475"
  text-3: "#5a6d7d"
  bg: "#f6f9f9"
  surface: "#ffffff"
  surface-2: "#eef4f4"
  line: "#e0e9e9"
  line-strong: "#c7d5d6"
  chart-blue: "#2f6f9f"
  whatsapp: "#16a34a"
  photo-ink: "rgb(8 38 50)"
  dark-bg: "#0a1519"
  dark-surface: "#112027"
  dark-surface-2: "#162a32"
  dark-heading: "#eef5f6"
  dark-text: "#dbe7ea"
  dark-line: "#1f343c"
  dark-primary: "#2dbe9a"
  dark-on-primary: "#04201a"
  dark-primary-soft: "#12342e"
  dark-primary-text: "#5ed9b9"
typography:
  display:
    fontFamily: "Inter Variable, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.75rem, 7.6vw, 3.25rem)"
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter Variable, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "1.625rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter Variable, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  title-sm:
    fontFamily: "Inter Variable, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 650
    lineHeight: 1.2
  body:
    fontFamily: "Inter Variable, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: "Inter Variable, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontFamily: "Inter Variable, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.4
  tab-label:
    fontFamily: "Inter Variable, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.5
  numeral:
    fontFamily: "Inter Variable, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(3.5rem, 18vw, 5rem)"
    fontWeight: 750
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "tnum"
  mono:
    fontFamily: "JetBrains Mono Variable, ui-monospace, Cascadia Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  tile: "12px"
  control: "14px"
  card: "16px"
  feature: "20px"
  hero: "28px"
  pill: "999px"
  circle: "50%"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "32px"
  gutter: "20px"
  gutter-narrow: "16px"
  gutter-desktop: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.title-sm}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-outline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary-text}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "52px"
  button-outline-hover:
    backgroundColor: "{colors.primary-soft}"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.text-2}"
    rounded: "{rounded.pill}"
    height: "52px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "16px"
  info-panel:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
    padding: "16px"
  photo-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.control}"
    padding: "10px 10px 12px"
  icon-tile:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary-text}"
    rounded: "{rounded.tile}"
    size: "42px"
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "52px"
  seg-option:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
    height: "52px"
  seg-option-checked:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary-text}"
  result-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary-text}"
    rounded: "{rounded.feature}"
    padding: "22px 18px 14px"
  timeline-number:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.circle}"
    size: "30px"
  whatsapp-badge:
    backgroundColor: "{colors.whatsapp}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.circle}"
    size: "76px"
  tab-active:
    textColor: "{colors.primary}"
    typography: "{typography.tab-label}"
    height: "64px"
---

# Design System: Stat Clinic

## Overview

**Creative North Star: "The Calm Health App"**

Stat Clinic looks and behaves like a clean medical app on a doctor's phone. The client's reference image is binding, so the system reproduces that idiom faithfully rather than reinterpreting it. A real photograph opens the Home screen (a laptop and stethoscope, no faces) under a deep teal-ink shade that carries white type. Below it, everything is white cards on a very light grey-green ground. Deep medical green pill buttons carry the actions, and mint wash panels hold reassurance and information.

Density is relaxed and thumb-first. Controls are 52px tall, cards use 14 to 16px corners and soft shadows, and Inter is the single typeface. Navy-ink headings sit over slate body text. The system leans on recognizable app patterns: a three-tab bottom bar with a short green marker over the active tab, a centered screen title with a back chevron, list rows with mint icon tiles and chevrons, a numbered timeline, and a round WhatsApp-green contact badge.

The world is light by default. It follows the operating system into a dark theme where the ground turns deep teal-black and the green brightens toward mint.

**Key Characteristics:**
- A photo-led hero under a teal-ink gradient, with white headline and subline
- White cards on a pale grey-green ground, with hairline borders and soft shadows
- One deep medical green for pill buttons, active states and checked options
- Mint wash for icon tiles, the trust strip and information panels
- Inter throughout. Navy-ink headings, slate body
- WhatsApp green appears only on the contact badge
- Familiar phone-app chrome: a fixed three-tab bar that becomes a left rail on desktop

## Colors

A quiet clinical palette of pale grey-green grounds, navy-ink type and one deep medical green.

### Primary
- **Medical Green** (primary): pill buttons, the active tab label and marker, timeline numbers, checked-option borders, slider fill, focus outlines and the result-card border. It deepens to **Deep Medical Green** (primary-hover) on hover. **Green Text** (primary-text) is the text-safe shade for outline-button labels, story titles, timeline headings, results, outputs and icons. **Mint Wash** (primary-soft) fills icon tiles, the trust strip, information panels, the sample-size card, checked options, the active desktop rail row and the input focus halo.

### Secondary
- **Chart Blue** (chart-blue): the comparison series in data thumbnails, paired with Medical Green bars. It is not used outside charts.

### Tertiary
- **WhatsApp Green** (whatsapp): the contact badge only, with a white glyph and its own green glow.

### Neutral
- **Navy Ink** (heading): every heading, and the trust-strip text.
- **Ink Text** (text) for body copy, **Slate** (text-2) for secondary copy and ledes, **Fog Slate** (text-3) for inactive tabs, placeholders, chevrons and fine print.
- **Pale Grey-Green** (bg): the page ground. **White** (surface): cards, the tab bar, inputs and options. **Mist** (surface-2): hover fills and thumbnail grounds.
- **Hairline** (line) for card borders and dividers. **Firm Hairline** (line-strong) for control borders and the timeline spine.
- **Photo Ink** (photo-ink): the deep teal used only at 10 to 90% alpha as the hero shade and title text-shadow.

### Named Rules
**The One Green Rule.** Medical Green is the only action and selection color. Every button, active state, checked option and focus ring uses it.

**The Badge-Only Rule.** WhatsApp Green appears only on the contact badge. The WhatsApp call to action itself is a Medical Green pill carrying the WhatsApp glyph.

**The Mint Panel Rule.** Information and reassurance (trust strip, ethics, confidentiality, computed sample size) sit on Mint Wash without border or shadow. Interactive content sits on white cards.

## Typography

**Display Font:** Inter Variable (with Segoe UI, system-ui, -apple-system)
**Body Font:** Inter Variable
**Label/Mono Font:** JetBrains Mono Variable, used only inside the illustrative raw-data thumbnail and the sample-size formula line

**Character:** A single neutral, highly legible sans. Hierarchy comes from weight (650 to 750) and gentle negative tracking, not from a second face.

### Hierarchy
- **Display** (650, clamp(1.75rem, 7.6vw, 3.25rem), 1.15, -0.02em): the hero headline only, white on the shaded photo, max 17ch, with a soft text-shadow in photo ink.
- **Headline** (700, 1.625rem, -0.02em): the contact title. The tool result name uses the same voice in Green Text at clamp(1.5rem, 6.5vw, 2rem).
- **Title** (700, 1.3125rem, -0.015em): section titles.
- **Title-sm** (650, 1.0625rem): screen titles, card titles, timeline steps, legends, field and slider labels, list-row names (1rem) and buttons (1rem, 650).
- **Body** (400, 1rem, 1.5): running text. Ledes are capped at 60ch. Body-sm (0.9375rem) is used in cards and the timeline.
- **Caption** (600, 0.8125rem): the trust strip, photo-card body text (400, 0.8125rem, 1.4) and story titles (700, 0.875rem). Captions are sentence case.
- **Tab label** (500, 0.75rem; 650 when active).
- **Numeral** (750, clamp(3.5rem, 18vw, 5rem), -0.04em, tabular): the computed sample size. Other numbers (slider output, contact handle) use Inter with tabular numerals.

### Named Rules
**The Single Face Rule.** Inter sets everything a reader reads. Mono is a costume for illustrative data (the raw table thumbnail and the formula), never for interface text or numbers.

## Layout

The layout is a mobile-first single column. The gutter is 20px, 16px under 370px and 32px at 960px. Inner pages cap at 720px (narrow pages 520px). The Home body caps at 1040px on desktop. Sections are 32px apart and titles sit 16px above their content. Card padding is 16px, and gaps step through 8, 12 and 14px.

The phone hero fills up to 78svh minus the tab bar, capped at 640px. The photo covers the top 84% and is masked to fade into the page. Copy and actions sit at the bottom, in the thumb zone, with the two pill buttons stacked full width. Directly under the hero, three photo cards sit side by side in a three-column grid (8px gap), followed by the mint trust strip and the tools list. Under 370px the photo cards become horizontal rows with a 96px square image.

The chrome is a fixed 64px white tab bar with three equal tabs, a top hairline and an upward shadow. The active tab is marked by a 36x3px green bar at its top edge that animates between tabs on a spring. Inner screens get a sticky 60px blurred header with a back chevron and a centered icon and title. At 960px the tab bar becomes a 240px left rail with brand at top and the language toggle at bottom. The active row gets a Mint Wash fill and a 3px green bar on its left edge. On desktop the hero is inset 16px with 28px corners, the photo runs full height, the shade runs horizontally, and the buttons sit side by side. Breakpoints: max 370px and 960px.

## Elevation & Depth

Depth is soft and shallow. White cards lift off the pale ground with a faint navy-tinted shadow plus a hairline border. The tool result card lifts one tier higher. Mint panels are flat. A green glow sits under primary buttons, and the tab bar casts a short shadow upward. In the dark theme the shadows switch to black at higher opacity.

### Shadow Vocabulary
- **Card** (`--shadow-1`: `0 1px 2px rgb(15 43 60 / 0.04), 0 4px 16px -6px rgb(15 43 60 / 0.1)`): cards, list groups, photo cards, info cards and the slider thumb.
- **Raised** (`--shadow-2`: `0 2px 6px rgb(15 43 60 / 0.06), 0 16px 36px -14px rgb(15 43 60 / 0.2)`): the test-picker result card.
- **Button glow** (`--shadow-primary`: `0 10px 22px -10px rgb(11 122 98 / 0.6)`): primary pill buttons.
- **Bar** (`--shadow-bar`: `0 -6px 20px -14px rgb(15 43 60 / 0.25)`): the bottom tab bar.

### Named Rules
**The Soft Card Rule.** Shadows are blurred, negatively spread and navy-tinted, always paired with a hairline border on white. Mint panels never carry a shadow.

## Shapes

Corners are gentle and consistent. Icon tiles, the desktop rail rows, icon buttons and the portrait use 12px. Photo cards, the trust strip, inputs and segmented options use 14px. Cards, list groups and mint panels use 16px (`--radius`). The two tool feature cards use 20px, and the desktop hero uses 28px. Every button is a full pill (999px). Timeline numbers, the large timeline icon tiles and the WhatsApp badge are circles. Card borders are 1px hairlines and control borders are 1.5px. Photos are clipped by their card's corners and cropped at a 4:3 aspect ratio.

## Components

### Buttons
Soft, rounded and unmistakably tappable.
- **Shape:** full pill (999px), 52px tall, 1.5px border slot, Inter 650 at 1rem (0.9375rem in the hero).
- **Primary:** Medical Green fill, white label, button glow, optional leading 20px glyph (the WhatsApp mark on the main call to action).
- **Hover / Focus:** fill deepens on hover, the button presses to scale(0.98) on active, and focus shows a 3px green outline at 3px offset.
- **Outline:** white fill, Medical Green border, Green Text label. Mint Wash on hover.
- **Quiet:** transparent with slate text; Mist on hover.

### Cards / Containers
- **Corner Style:** 16px (photo cards 14px, feature cards 20px).
- **Background:** white for content, Mint Wash for information panels.
- **Shadow Strategy:** Card tier on white; none on mint (see Elevation & Depth).
- **Border:** 1px Hairline on white cards. The result card uses a 1.5px Medical Green border instead.
- **Internal Padding:** 16px (photo cards 10px 10px 12px on phones, 16px 18px 18px on desktop).

### Photo Cards (signature)
Three white cards, each with a 4:3 photograph on top (Unsplash, no faces), a Green Text title (0.875rem, 700) and a two-line slate caption. They sit in a tight three-column row under the hero.

### List Rows
White list group with hairline separators. Each row is at least 72px tall, with a 42px Mint Wash icon tile (12px radius), a navy name over a slate line, and a Fog Slate chevron. Rows fill with Mist on hover.

### Numbered Timeline
A 30px green circle holding the white step number, then a 48px round mint icon tile, then the Green Text step title over slate text. Steps are joined by a 2px Firm Hairline spine.

### Inputs / Fields
- **Style:** 52px tall, white fill, 1.5px Firm Hairline border, 14px radius. The label sits above in navy at 1.0625rem 650.
- **Focus:** the border turns green and a 4px Mint Wash halo appears; there is no outline.
- **Segmented options:** same shell. Hover turns the border green. Checked options get a green border, Mint Wash fill and Green Text. Keyboard focus shows a 3px green outline.
- **Slider:** 6px track filled green up to the value, 26px white thumb with a 3px green ring and the Card shadow. The value is shown in a 1.125rem 700 Green Text output.

### Navigation
- **Phone:** a white 64px bar with three tabs (Accueil, Confiance, Devis). Each tab has a 22px Lucide or WhatsApp glyph over a 0.75rem label. Inactive tabs are Fog Slate; the active tab is green at 650 with the top marker bar.
- **Desktop:** a 240px rail with 48px rows at 12px radius, Mist on hover, Mint Wash plus a left marker bar when active.
- **Language:** a borderless "FR | EN" text toggle. The active language is Green Text, or white on the photo.

### Contact Badge
A 76px WhatsApp Green circle with a white glyph and a green glow, centered above the contact title.

## Do's and Don'ts

### Do:
- **Do** make every button a 52px pill. Use Medical Green for the one primary action and an outlined green pill for the alternative.
- **Do** put information and reassurance on Mint Wash panels and interactive content on white hairline cards.
- **Do** use real photography (Unsplash, no faces) with credits in PHOTO-CREDITS.md, and lay a photo-ink shade over any photo that carries white type.
- **Do** mark demo charts and tables as synthetic in right-aligned fine print.
- **Do** keep corners between 12 and 16px on everyday surfaces. Reserve 20px for tool feature cards and 28px for the desktop hero.
- **Do** use the ease `cubic-bezier(0.16, 1, 0.3, 1)` for rise-in reveals (12 to 14px over 0.6 to 0.7s) and honor reduced motion.

### Don't:
- **Don't** use WhatsApp Green anywhere except the contact badge.
- **Don't** introduce a second typeface for interface text, or use mono for real numbers.
- **Don't** add shadows or borders to mint panels.
- **Don't** use square or lightly rounded buttons. Buttons are always pills.
- **Don't** use photographs showing faces, or present illustrative data as real.
- **Don't** add small labels above headings. Section titles stand alone, as built.
