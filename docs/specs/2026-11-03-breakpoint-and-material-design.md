# Breakpoint project entry and refined-paper material design

## Intent

Add the `mahinigam/breakpoint` project to the fourth position in the portfolio, remove the existing seventh project, and add a restrained frosted-glass + gloss finish that supports the existing editorial terminal system.

## Project catalog

- Insert **Breakpoint** as project `04`, linking to `https://github.com/mahinigam/breakpoint`.
- Describe it as a calibrated credit-risk decision system: a 200-feature LightGBM model trained on 458,913 American Express customers, calibrated out-of-fold, and optimized into a constrained Grow / Hold / Restrict policy.
- Surface four concise evidence points in the existing dashboard structure: calibrated AUC `0.9584`; three-action decision policy; `+5.1%–9.7%` profit uplift versus the binary policy; and `1.83%` worst-case regret.
- Remove **Distributed Task Scheduler**, which is currently the seventh entry.
- Preserve the other entries and assign sequential display indices `01` through `09`.

## Visual direction: refined paper

The site remains a warm-paper, dark-ink editorial interface. Frosted glass is not a new surface system; it is a selective interaction material.

- **Navigation:** when the header is fixed after scrolling, use a lightly translucent warm surface with backdrop blur, a fine border, and a single soft top highlight.
- **Hero capability strip:** lift the four capability cells slightly through translucent paper fills and a hairline highlight, without turning them into rounded cards.
- **Project dashboard:** keep the split dashboard structurally flat. Give only the active project row and the desktop detail plane a faint translucent paper layer; on interaction, a short, subtle sheen may travel over the active row.
- **Controls and links:** retain text-first controls. Add visible focus states, press feedback, and minimal gloss to only the resize handle and project links.
- **Accessibility:** every frosted surface must retain readable text contrast; blur and gloss are reduced or removed under `prefers-reduced-motion`.

## Boundaries

- Do not change the page structure, project dashboard behaviors, copy outside the new Breakpoint entry, or the current warm palette.
- Do not use broad gradients, opaque glass cards, neon highlights, or decorative effects that compete with the content.
- Preserve the current mobile project accordion and navigation behavior.

## Verification

- Add a focused data test that proves Breakpoint occupies the fourth slot, the former seventh item is absent, and visible indices are sequential.
- Run the project lint and production build.
- Inspect rendered desktop and mobile screenshots for contrast, readable blur, layout stability, and sensible reduced-motion behavior.
