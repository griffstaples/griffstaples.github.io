# Site Relaunch Plan — Field & Marine Robotics Focus

Status: **draft for review**. Nothing in `pages/` or `components/` has been touched yet.
This document plus the three HTML renders in `new_files_and_updates/renders/` are the
"look and feel before we build it" deliverable. Once you pick a direction (or a
mashup of directions), we implement it for real in the Next.js app.

---

## 1. What the resume tells me that the site doesn't

Reading your resume against the live site, the gap is bigger than "needs a refresh":

- **The site still says "Software Developer."** The resume leads with *Marine
  robotics · Field deployment · Edge ML · Software development*. Software is now
  your fourth bullet, not your headline.
- **No mention of the ROV, the bio-inspired surface vehicle, the AUV sim, the
  acoustic models, MDA, or UBC anywhere on the site.** The entire "Field Robotics &
  Research Experience" section of your resume — arguably your most distinctive
  work — doesn't exist on griffinstaples.com.
- **The project list is 100% old-career.** Crypto trader, blood-pressure monitor,
  comment analyzer, embedding dictionary — all solid, all software-only, none of
  it signals "this person builds and deploys physical systems in the field."
  Monocopter is the one project already on the site that *does* fit the new
  story, and it's buried last, and its detail page is a placeholder
  ("under construction").
- **All individual project pages are stubs.** `pages/projects/index.tsx`,
  `bloodpressure.tsx`, `cryptotrader.tsx`, and `monocopter.tsx` all render the
  same `UnderConstructionPage` component. The "See projects" button on the
  homepage leads nowhere useful.
- **No field credibility markers.** ROC(M) VHF radio, Pleasure Craft Operator
  Card, Wilderness First Aid — small details, but exactly the kind of thing that
  tells a hiring manager "this person has actually been on a boat/in the field,"
  not just in a lab. Currently invisible.
- **No awards/leadership section.** $83k+ in fellowships and three research
  presentation awards in 2026 alone are strong, unclaimed signal.

## 2. What's working and should survive the redesign

- The dark theme + neon-blue (`#00EFFF`) accent + monospace (`Source Code Pro`)
  "whoami" framing is a good, distinctive base. It reads as "engineer," not
  "generic portfolio template." Keep it, but let it flex toward a more
  marine/field palette (see §5).
- The zig-zag alternating project tiles (`StandardProjectTile`) are a clean
  pattern — reuse for the new project set.
- Typing-animation hero, scroll-triggered fades, custom cursor — nice craft
  touches that show front-end polish without being gimmicky. Worth keeping,
  just pointed at new content.
- Single-page scroll with anchor nav (`about` / `projects` / `contact`) is a
  reasonable structure for a portfolio this size — the problem is what's *in*
  each section, not the scaffolding.
- Static export → GitHub Pages pipeline (`.github/workflows/deploy.yml`, only
  triggers on `website-v2`) is simple and cheap to keep. No reason to change
  hosting.

## 3. The core problem with the current flow

Landing on the site today: full-height hero with your name typing out, then
"Software Developer," then a bare down-arrow. That's it. No visual, no proof,
no hook — you have to scroll past an empty screen to find out anything about
you. For someone who now builds and *field-deploys* underwater and surface
vehicles, that's a missed opportunity: robotics is inherently visual, and you
have (or can get) video/photo of hardware actually working in the real world.
That's the single highest-leverage fix here.

**New flow, in order:**

1. **Hero** — a visual + a one-line positioning statement + immediate proof
   (not just a name). First thing people see should make them think "this
   person builds real things," within 2 seconds, no scrolling required.
2. **Proof strip** — a thin band of hard numbers/credentials right under the
   hero (field deployments, 91.3% average, $83K in funding, 5 yrs industry,
   ISS flight software) — fast credibility before they commit to reading
   further.
3. **Featured work** — 1–2 flagship robotics projects (ROV, bio-inspired
   vehicle) get a large, visual, almost case-study treatment — not squeezed
   into the same tile size as a crypto bot.
4. **About / whoami** — rewritten for the new focus; keep the terminal voice,
   update the content.
5. **Full project grid** — remaining projects (monocopter, ML work, and yes,
   the legacy software projects too — they still show range and are good
   proof of software depth, just not the headline anymore).
6. **Experience timeline** — UBC, MDA, Key Living, etc. Currently nowhere on
   the site; the resume is the only place this exists.
7. **Contact** — keep as is, it works.

## 4. Brainstormed hero concepts

Three different hero directions, realized as full renders in
`new_files_and_updates/renders/`. All three assume you'll eventually have real
photo/video from field deployments — for now they use the monocopter test
flight asset you already have plus clearly-labeled placeholders for media that
doesn't exist yet, so you can judge the *layout and tone*, not the final
footage.

**A. "Mission Control"** — full-bleed video/photo background (ROV going into
the water, or the monocopter test flight), dark HUD-style overlay with
telemetry-looking readouts (depth, coordinates, status), monospace headline.
Leans hardest into the "field engineer" identity. Highest visual impact, most
build effort (needs real footage to look great).

**B. "Field Report"** — editorial/documentary layout. Large photo on one
side, a "field note" style write-up on the other (date, location, role,
one-line outcome) — like a dispatch from a deployment. Warmer, more narrative,
easier to make work with a handful of good photos rather than video.

**C. "Technical Minimal"** — closest evolution of the current site. Bold
typographic headline, a subtle schematic/sonar/topographic line-art
background (generative, no photo needed), stat strip, one hero
image/video module. Lowest risk, fastest to build, least dependent on having
new media ready — good option if you want to ship an improvement *now* and
layer in real field media later.

~~My original recommendation here was to build A's structure, ship with C's
generative background, and swap in real video later.~~ Superseded by the
critique in §4a below — see §4b for three quieter alternatives instead.

## 4a. Critique of A/B/C — too much chrome

Griffin's reaction to the first three renders: they might be too complex and
risk distracting from the work itself. That's a fair read, and on reflection
I agree more than I'd like:

- **Render A is the worst offender.** The telemetry readouts (`DEPTH 4.2m`,
  `HEADING 184°`) are fabricated — numbers that look precise but mean
  nothing. For a "this guy gets things done" positioning, fake precision is a
  liability the moment anyone looks twice: it reads as showmanship standing
  in for substance. The scanline texture, corner brackets, and pulsing REC
  dot are sci-fi HUD costume with no informational payload.
- **Render B** is softer but still leans on journalism trappings — dateline,
  byline, a "FIG. 01" tag — that set a *mood* rather than convey information.
- **Render C**, even as the deliberately restrained option, still carries a
  terminal-window title bar and a blinking cursor that aren't load-bearing.

Where I'd push back, gently: the underlying idea — lead with a real visual
and real proof instead of "name, then scroll" — is still right. A bare page
also undersells genuine accomplishments. The fix isn't removing proof, it's
stripping the *genre costume* around it (fake HUD chrome, filmstrip framing,
terminal skeuomorphism) and letting real numbers and real work carry the
page with less visual noise between the viewer and the content.

## 4b. Round two — quieter directions (D, E, F)

Same resume content, same dark + monospace brand base, but no fabricated
data, no decorative chrome, and minimal-to-no animation:

**D. "Plainspoken"** — one large, confident headline; a single real visual
(the monocopter clip, shown plainly, no frame/overlay); proof stated as a
sentence ("two vehicles fielded since 2025... 91.3%... $83,500+") rather than
boxed stat widgets; work listed as a plain hairline-divided list, not cards.

**E. "Grid Discipline"** — treats the hero like a spec sheet: a label/value
block (role, focus, based, cert.) beside the headline, a plain four-column
proof row separated only by hairlines, and the project list as an actual
table (project / result / stack / link). No cards, no borders used as
decoration — structure only where it organizes real data.

**F. "Quiet Evolution"** — the lowest-risk option. Keeps the current site's
existing hero pattern almost exactly (name, role line, scroll cue) and only
changes the copy and adds one real asset (the monocopter video) in place of
empty space. Tests the hypothesis that better words plus one real visual
might fix the "hook" problem without a new visual system at all.

My recommendation now: **D or F.** F is the safest, fastest-to-ship test of
"does better copy alone fix this." D keeps F's restraint but earns a bit more
visual weight from a confident headline and a slightly bigger hero video —
my pick if you want one real step up from the current site without
reintroducing chrome. E is worth a look if you want the homepage to double as
a fast-scanning reference (useful if recruiters/hiring managers are the
primary audience), but a full data table is a cooler, more clinical tone than
D or F.

## 5. Visual identity notes

- Keep the dark base (`#1C1C1C` → `#282828` gradient) — it's already good and
  reads as "engineering," not "startup landing page."
  - Consider complementing `#00EFFF` (neon blue) with a secondary marine/field
  tone — e.g. a deep teal or amber warning-light accent — used sparingly for
  "field" moments (badges, section dividers) so the palette nods at
  water/field work without a full re-theme.
- Keep `Source Code Pro` for the terminal-voice copy (`whoami`, `skills`,
  etc.) — it's a nice signature. Consider pairing with a heavier display
  weight for the hero headline so first impression doesn't read as pure code
  editor.
- The existing `SectionDivider` (dotted grid pattern) already has a
  faint technical/schematic feel — lean into that more broadly (could evolve
  into a topographic-line or sonar-sweep motif) rather than introducing a
  whole new visual language.

## 6. Media to create (none of this exists yet — flagging for production)

Roughly in priority order for impact per unit of effort:

1. **ROV field deployment** — short clip or hero-quality photo of the
   underwater ROV in/near the water with the Sc'ianew First Nation context
   (people, boat, coastline). This is your single best "wow" asset — nobody
   else applying for robotics roles has "fielded with a First Nation for sea
   urchin monitoring" on their site.
2. **Bio-inspired surface vehicle** — video of it moving under its own
   propulsion on water. Motion sells a vehicle project far better than a
   static CAD render.
3. **Monocopter test flight** — you already have `monocopter_testflight.mp4`
   and a thumbnail. Reuse directly; maybe re-cut a shorter loop for a hero
   background (no audio needed, 5–10s loop).
4. **AUV sim / RL controller** — a screen capture or rendered clip of the
   simulator, even mid-development, showing the vehicle topology being
   optimized or the controller running. Simulation visuals are very shareable
   and show the ML/robotics crossover.
5. **Acoustic vessel classification** — a spectrogram or waveform graphic with
   classification overlay. Doesn't need to be fancy; even a clean matplotlib
   export styled to match the site would read as credible.
6. **CAD / Onshape renders** — any of the ROV or vehicle CAD model, even
   unrendered, for a "design" beat distinct from "it's in the water" footage.
7. **A field-conditions portrait** — you, on a boat or at a field site, not a
   studio headshot. One photo like this does a lot of work for the "hands-on,
   open to field work" positioning line in your profile.

None of this blocks shipping the redesign — the plan is built so placeholder
treatments (schematic backgrounds, existing monocopter footage, labeled
"coming soon" cards) look intentional, not broken, until real media lands.

## 7. Content updates needed regardless of visual direction

- Page `<title>`/meta description (`pages/index.tsx`) — still says "Griffin
  Staples, Software Developer."
- `HomeSection` subtitle — "Software Developer" → something like "Marine &
  Field Robotics · Edge ML" (exact wording TBD with you).
- `AboutSectionV2` bio — rewrite for robotics/field focus; current text is
  generic "freelance web developer" framing.
- `TAG_NAMES` skill tags — add ROS/robotics/ML tooling, keep the software
  stack as secondary tags rather than removing it (depth story).
- Resume link (`GriffinStaples_CV.pdf`) — swap for the new
  Marine & Field Robotics resume in this folder.
- Build real `/projects/[slug]` pages for Monocopter at minimum (video already
  exists) — currently a placeholder despite having an asset ready.
- Add an Experience/Timeline section and an Awards/Leadership mention —
  currently nowhere on the site.

## 8. Suggested next steps

1. You review the three renders and tell me which direction (or combination)
   you want, and give feedback on tone/copy.
2. We lock hero copy and the proof-strip numbers together.
3. I implement the chosen direction in the actual Next.js components, reusing
   existing patterns (`StandardProjectTile`, `SectionDivider`, etc.) rather
   than a rewrite from scratch.
4. We slot in real media as you produce it — the layout is built to degrade
   gracefully from "placeholder" to "real footage" without further rework.
