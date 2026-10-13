# Landing page renders

Three static, self-contained HTML mockups of possible landing-page directions
for the relaunch described in `../PLAN.md`. Open any of these directly in a
browser to view — they're not part of the Next.js app and aren't wired into
the build.

- `A-mission-control.html` — HUD/telemetry hero, leans hardest into "field
  robotics engineer."
- `B-field-report.html` — editorial/documentary hero, photo-led, warmer tone.
- `C-technical-minimal.html` — closest evolution of the current site's dark +
  neon-blue monospace identity, generative contour-line background, lowest
  build risk.

All three use clearly labeled placeholder blocks wherever real project
photo/video is assumed but doesn't exist yet (see §6 of the plan for the
media shot list). None of the copy is final — treat it as a stand-in for
tone and structure, not a script.

## Round two — quieter directions

Griffin flagged that A/B/C risked being too ornamented — chrome that doesn't
carry information (fake telemetry numbers, scanlines, terminal window bars,
masthead/byline framing) can distract from the actual proof of work. Round
two strips that out: no fabricated data, no genre costume, minimal/no
animation, proof stated in plain type instead of boxed widgets. See §4a of
`../PLAN.md` for the full critique.

- `D-plainspoken.html` — one big honest headline, a single real video, proof
  stated as a sentence, work listed as a plain hairline-divided list.
- `E-grid-discipline.html` — datasheet structure: label/value spec block,
  a plain proof row, work as a real table. No cards, no borders-as-decoration.
- `F-quiet-evolution.html` — nearly the current site's existing hero pattern
  (name, role line, scroll cue), just with new copy and one real asset
  (the monocopter clip) swapped in. Tests whether better words plus one real
  visual is enough, without a new visual system at all.

## Round three — C/E's system, with real media worked in

Feedback: the "field log/dispatch" framing in A and B (dateline, byline,
"FIG. 01" tags) read as tacky. C's "Featured field work" framing and E's
spec-sheet precision were the preferred starting points — but both are
fairly media-light, and a compelling piece of media (real video/photo) would
make them land harder. Round three keeps the "Featured field work" label
throughout (no "dispatch"/"field log" language anywhere) and works a
prominent hero visual into each system a different way.

- `G-minimal-hero-reel.html` — C's system almost unchanged (contour
  background, `whoami` prompt, terminal stat block) with one large plain
  hero video added directly under the headline, before the CTA row.
- `H-datasheet-visual-column.html` — E's spec-sheet/data-table system, with
  a full-width hero media break between the intro and the proof row, plus a
  small real thumbnail per row in the work table instead of plain text rows.
- `I-media-led-synthesis.html` — the hero video is deliberately the largest
  element on the page; headline is shorter to make room, proof collapses to
  one plain sentence, and "Featured field work" cards follow underneath.
  Most media-led of the three; still no chrome, no dispatch framing.

## Round four — E, with a video playing behind the hero text

E (`grid-discipline`) was the preferred direction. This round asks: what if
the spec list + headline sat on top of a looping background video instead of
plain background?

- `J-grid-discipline-video-hero.html` — same spec column + headline layout
  as E, now overlaid on a full-bleed looping reel with a left-weighted
  scrim for legibility. No real footage exists yet, so a canvas animation of
  underwater light caustics stands in for it — enough to judge the legibility
  and tone of "text over moving water," not the final footage. Proof row and
  work table stay off the video, plain, same as E — only the hero changes.

J shipped: it's now implemented for real in the live site (hero, fonts,
section headings, dividers), not just a static mockup. See `../PLAN.md`
§4c and the site's git history on this branch for what changed.

## Round five — About/Contact, left-justified like the work table

Griffin liked the left-aligned "Featured field work" table and asked for
About/Contact to follow the same alignment instead of staying centered
(their pre-existing layout, inherited from before this redesign). All
three reuse the live site's actual current copy so they're realistic
previews, not placeholder text.

- `K-spec-column.html` — reuses the hero's fixed label-column grid (same
  140–200px label + content split as the hero's spec list) for both About
  and Contact. Strongest visual echo of the hero.
- `L-table-echo.html` — skills and links rendered as literal table rows
  matching `table.work`'s styling exactly; the contact form becomes a
  table too, one row per field (label cell + input cell).
- `M-single-column.html` — the lightest-structure option: one flowing
  left-aligned column, no grid or table scaffolding, just consistent
  small-label section markers and generous whitespace.

K and M were the preferred directions.

## Round six — K and M, with a photo of Griffin worked in

No real photo exists yet, so all three use the same clearly-labeled
placeholder convention as the hero's media blocks — a dashed-border box,
not a broken image — so the layout can be judged independent of the
final photo. Intentionally not a studio headshot; the placeholder calls
for a field-conditions portrait, consistent with §6 of the plan.

- `N-portrait-card.html` — based on K. A small portrait sits in the
  hero-style label column, paired with the "About" marker like an ID
  card. Smallest footprint, most integrated with the existing grid.
- `O-photo-banner.html` — based on M. A wide field photo leads the
  section before the flowing text starts, with a one-line caption
  underneath. Biggest visual statement of the three.
- `P-side-portrait.html` — hybrid: a portrait-oriented photo sits beside
  the bio paragraph only (K-style column), while skills/links/contact
  continue full-width underneath (M-style flow). Middle ground between
  N and O.
