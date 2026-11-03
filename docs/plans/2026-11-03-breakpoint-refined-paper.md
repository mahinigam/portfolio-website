# Breakpoint Project Entry and Refined-Paper Finish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use subagent-driven-development (recommended) or executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Breakpoint as project 04, remove Distributed Task Scheduler, and introduce a restrained frosted-paper interaction finish.

**Architecture:** The project catalog remains the single source of truth in `projectsData`; a Node built-in test protects its ordering and factual contents. Presentation changes are limited to the global material utilities and existing navigation, hero, and dashboard components, preserving their behavior and responsive structure.

**Tech Stack:** React 19, Vite 7, Tailwind CSS 3, Framer Motion, Node built-in test runner, ESLint.

---

## File structure

- `src/data/projectsData.js` — canonical ordered project catalog; will receive the Breakpoint record and sequential indices.
- `test/projectsData.test.js` — catalog contract test using Node's built-in test runner.
- `package.json` — exposes the test command without adding a test dependency.
- `src/index.css` — reusable refined-paper material, gloss, accessibility, and reduced-motion styles.
- `src/components/Navbar.jsx` — applies the frosted header material after scrolling.
- `src/pages/Hero.jsx` — applies the quiet translucent treatment to capability cells.
- `src/components/ProjectsDashboard.jsx` — applies active-row and detail-plane material treatments without changing interaction logic.

### Task 1: Lock down the catalog contract

**Files:**
- Create: `test/projectsData.test.js`

- [x] **Step 1: Create a failing catalog test**

```js
import test from 'node:test'
import assert from 'node:assert/strict'
import { projectsData } from '../src/data/projectsData.js'

test('lists Breakpoint fourth and excludes Distributed Task Scheduler', () => {
  assert.equal(projectsData[3].id, 'breakpoint')
  assert.equal(projectsData[3].name, 'Breakpoint')
  assert.equal(projectsData.some(({ id }) => id === 'task-scheduler'), false)
  assert.deepEqual(projectsData.map(({ index }) => index), ['01', '02', '03', '04', '05', '06', '07', '08', '09'])
})
```

- [x] **Step 2: Run the test and confirm the expected failure**

Run: `node --test test/projectsData.test.js`

Expected: FAIL because the fourth item is currently `ai-risk-manager` and no `breakpoint` entry exists.

### Task 2: Update the project catalog

**Files:**
- Modify: `src/data/projectsData.js`
- Modify: `package.json`
- Test: `test/projectsData.test.js`

- [x] **Step 1: Add the Breakpoint record at position 04**

```js
{
  id: 'breakpoint',
  index: '04',
  name: 'Breakpoint',
  type: 'CREDIT-RISK DECISION SYSTEM',
  utility: 'Turns calibrated credit-risk scores into a constrained Grow / Hold / Restrict policy, pairing a 200-feature LightGBM model with explicit portfolio guardrails and economic scenario analysis.',
  stack: ['Python', 'LightGBM', 'DuckDB', 'SHAP', 'Tableau', 'scikit-learn', 'pytest'],
  metrics: [
    ['Calibrated AUC', '0.9584'],
    ['Policy', 'Grow / Hold / Restrict'],
    ['Profit uplift', '+5.1% to +9.7%'],
    ['Worst-case regret', '1.83%'],
  ],
  repo: 'https://github.com/mahinigam/breakpoint',
}
```

Remove the complete `task-scheduler` object. Change all following `index` values to `05`–`09` while retaining their existing order.

- [x] **Step 2: Add the test command**

Add `"test": "node --test"` to `scripts` in `package.json`.

- [x] **Step 3: Verify the catalog contract passes**

Run: `npm test`

Expected: `1` test passing and `0` failures.

- [x] **Step 4: Commit the catalog update**

```bash
git add package.json src/data/projectsData.js test/projectsData.test.js
git commit -m "feat: add Breakpoint to portfolio projects"
```

### Task 3: Add the refined-paper material system

**Files:**
- Modify: `src/index.css`

- [x] **Step 1: Define focused material utilities**

```css
.paper-glass { background: rgba(247, 245, 240, 0.72); border-color: rgba(28, 28, 28, 0.12); box-shadow: inset 0 1px rgba(255, 255, 255, 0.78), 0 12px 32px rgba(28, 28, 28, 0.04); }
@supports (backdrop-filter: blur(12px)) { .paper-glass { backdrop-filter: blur(14px) saturate(125%); } }
.paper-gloss { isolation: isolate; overflow: hidden; }
.paper-gloss::after { content: ''; position: absolute; inset: 0; pointer-events: none; z-index: -1; opacity: 0; background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,.45) 48%, transparent 66%); transform: translateX(-120%); transition: transform .7s cubic-bezier(.25,1,.5,1), opacity .2s ease; }
.paper-gloss:hover::after, .paper-gloss:focus-visible::after { opacity: 1; transform: translateX(120%); }
```

- [x] **Step 2: Define accessibility and motion fallbacks**

```css
button:focus-visible, a:focus-visible { outline: 2px solid #1C1C1C; outline-offset: 4px; }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; animation-duration: .01ms !important; animation-iteration-count: 1 !important; } }
```

- [x] **Step 3: Verify static quality**

Run: `npm run lint`

Expected: exit code `0` with no ESLint errors.

### Task 4: Apply materials at the approved interaction points

**Files:**
- Modify: `src/components/Navbar.jsx`
- Modify: `src/pages/Hero.jsx`
- Modify: `src/components/ProjectsDashboard.jsx`

- [x] **Step 1: Update the scrolled navigation state**

Change the `scrolled` branch in `Navbar.jsx` to `border-terminal-hairline paper-glass`; retain `border-transparent bg-transparent` otherwise.

- [x] **Step 2: Treat the hero capability cells as quiet instruments**

Change each capability cell class from `bg-terminal-bg px-4 py-5` to `paper-glass px-4 py-5` in `Hero.jsx`; do not add radius classes.

- [x] **Step 3: Treat the project dashboard selectively**

Add `paper-glass` to the desktop detail plane, then append `relative paper-glass paper-gloss` to the active project button class in both dashboard variants. Do not change the `onMouseEnter`, `onClick`, `onPointerDown`, or style calculations.

- [x] **Step 4: Verify the production build**

Run: `npm run build`

Expected: Vite completes successfully.

- [x] **Step 5: Commit the visual finish**

```bash
git add src/index.css src/components/Navbar.jsx src/pages/Hero.jsx src/components/ProjectsDashboard.jsx
git commit -m "style: add refined paper material finish"
```

### Task 5: Inspect the rendered experience

**Files:**
- No source changes expected

- [x] **Step 1: Start the Vite development server and capture desktop/mobile screenshots**

Run the site through the browser-testing workflow at `1440×900` and `390×844`. Capture the top of the page, the project dashboard, and a selected project state.

- [x] **Step 2: Check visual and accessibility requirements**

Confirm readable contrast over every translucent layer; visible keyboard focus; no overflow at 390px; no dashboard regression; and no sheen motion with reduced motion enabled.

- [x] **Step 3: Run final checks**

Run: `npm test && npm run lint && npm run build`

Expected: all checks exit `0`.

- [x] **Step 4: No screenshot-driven correction was required**

```bash
git add src
git commit -m "fix: tune refined paper responsive finish"
```
