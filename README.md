# Williams Venture Studio — Website

This is the official website for Williams Venture Studio, built with **Next.js 16** and **Tailwind CSS v4**. This guide explains how everything is organized, how to edit content without touching complex code, and how to preview and publish your changes.

---

## Table of Contents

- [Williams Venture Studio — Website](#williams-venture-studio--website)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
  - [Running the Website Locally](#running-the-website-locally)
    - [Steps](#steps)
  - [Editing Content](#editing-content)
    - [Navigation \& Footer](#navigation--footer)
    - [Home Page](#home-page)
    - [Work / Project Cards](#work--project-cards)
    - [Individual Project Pages](#individual-project-pages)
    - [The Summit Page](#the-summit-page)
    - [About Page](#about-page)
    - [Contact Page](#contact-page)
    - [Replacing Placeholder Images](#replacing-placeholder-images)
  - [Publishing Changes with Git](#publishing-changes-with-git)
    - [Step 1 — Make and preview your changes](#step-1--make-and-preview-your-changes)
    - [Step 2 — Open the Source Control panel](#step-2--open-the-source-control-panel)
    - [Step 3 — Stage your changes](#step-3--stage-your-changes)
    - [Step 4 — Write a commit message](#step-4--write-a-commit-message)
    - [Step 5 — Commit](#step-5--commit)
    - [Step 6 — Push](#step-6--push)
    - [Quick Reference: Terminal Commands](#quick-reference-terminal-commands)
  - [Reporting Problems \& Proposing Changes with GitHub](#reporting-problems--proposing-changes-with-github)
    - [Issues — Flagging Something That Needs Attention](#issues--flagging-something-that-needs-attention)
    - [Pull Requests — Proposing a Change for Review](#pull-requests--proposing-a-change-for-review)
    - [Workflow Summary](#workflow-summary)

---

## Project Structure

```
venture-studio-website/
├── app/                        # Every page of the website lives here
│   ├── globals.css             # Site-wide colors, fonts, and animations
│   ├── layout.tsx              # The shell that wraps every page (fonts, theme)
│   ├── page.tsx                # Home page  →  /
│   ├── about/
│   │   └── page.tsx            # About page  →  /about
│   ├── contact/
│   │   └── page.tsx            # Contact page  →  /contact
│   └── work/
│       ├── page.tsx            # Work grid  →  /work
│       ├── summit/
│       │   └── page.tsx        # Summit dedicated page  →  /work/summit
│       └── [slug]/
│           └── page.tsx        # Template for all other projects  →  /work/ai-series, etc.
│
├── components/                 # Reusable building blocks used across pages
│   ├── Header.tsx              # Top navigation bar
│   ├── Footer.tsx              # Bottom footer
│   ├── ProjectCard.tsx         # The image cards on the home and work pages
│   └── ThemeProvider.tsx       # Powers the light/dark mode toggle
│
├── lib/
│   └── projects.ts             # ← THE MAIN CONTENT FILE. Edit projects here.
│
├── public/
│   └── images/                 # Put your own photos here
│
└── next.config.ts              # Technical configuration (image domains, etc.)
```

The most important thing to understand: **most content edits happen in just a handful of files**, and you never need to touch the complex layout or styling code to update what the website says.

---

## Running the Website Locally

Before publishing any changes, you should preview them on your own computer first.

**Prerequisites:** Make sure you have [Node.js](https://nodejs.org) installed. You only need to do this once.

### Steps

1. Open your code editor (VS Code is recommended).
2. Open the terminal inside your editor. In VS Code: go to **Terminal → New Terminal** in the menu bar.
3. Type the following command and press Enter:

```
npm run dev
```

4. After a few seconds you will see a message like:

```
▲ Next.js 16.x.x
- Local: http://localhost:3000
```

5. Open your browser and go to **http://localhost:3000**. You will see the website exactly as it will appear when published.
6. Any changes you save in your editor will automatically appear in the browser within a second or two — no need to restart.
7. When you are done previewing, go back to the terminal and press **Ctrl + C** to stop the server.

---

## Editing Content

### Navigation & Footer

**File:** `components/Header.tsx`

The navigation links are defined near the top of the file:

```tsx
const NAV_LINKS = ['Work', 'About', 'Contact'] as const
```

To add or rename a link, edit this list. The URL is automatically generated from the name in lowercase (e.g. `'About'` → `/about`), so make sure a matching folder exists in `app/` if you add a new one.

---

**File:** `components/Footer.tsx`

The social media links are defined at the top:

```tsx
const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/williams-venture-studio/' },
  { label: 'Instagram', href: 'https://www.instagram.com/wcventurestudio' },
  { label: 'Twitter', href: 'https://x.com/wcventurestudio' },
]
```

To update a URL, change the `href` value. To rename a link, change the `label` value. The copyright year (`2026`) and studio name (`Williams Venture Studio`) are a few lines below in the JSX — just find and update the text directly.

---

### Home Page

**File:** `app/page.tsx`

The hero text — the large "Venture Studio" heading and the tagline beneath it — is written directly in this file. Find the `<h1>` and the `<p>` tag just below it and edit the text between the tags.

The project cards grid is automatically populated from `lib/projects.ts` (see below) — you do not need to edit `page.tsx` to add or remove cards.

---

### Work / Project Cards

**File:** `lib/projects.ts`

This is the single source of truth for all projects. Every card on the home page and work page, and every individual project page, is driven by this file. Here is what a project entry looks like:

```ts
{
  id: '1',
  title: 'AI Series',
  subtitle: 'Weekly Hackathons',
  category: 'Events',
  image: 'https://images.unsplash.com/photo-xxx?w=800&q=80',
  slug: 'ai-series',
  about: 'Williams Venture Studio hosts weekly mini-hackathons...',
  details: [
    { label: 'Format', value: 'Weekly on-campus sessions' },
    { label: 'Focus', value: 'AI / ML' },
  ],
},
```

| Field | What it does |
|---|---|
| `title` | Large heading on the card and project page |
| `subtitle` | Smaller line beneath the title on the project page |
| `category` | The pill tag shown on the card (e.g. "Events", "Studio") |
| `image` | URL of the card's background photo |
| `slug` | The URL path — `ai-series` becomes `/work/ai-series`. Use lowercase with hyphens, no spaces. |
| `about` | The paragraph of body copy on the project page |
| `details` | The metadata column on the right of the project page. Add as many label/value pairs as you like, or remove the `details` field entirely to hide the column. |

**To add a new project:** Copy an existing entry, paste it at the end of the array (before the closing `]`), and fill in the fields. Make sure the `id` is unique and the `slug` is unique.

**To remove a project:** Delete its entire `{ ... }` block from the array. Make sure to remove the trailing comma from the entry before it.

**Note:** The Summit project has its own dedicated page and does not use the `about` or `details` fields. Its entry in this file only needs `id`, `title`, `subtitle`, `category`, `image`, and `slug`.

---

### Individual Project Pages

**File:** `app/work/[slug]/page.tsx`

You do not need to edit this file to change project content — all content is pulled from `lib/projects.ts` as described above. The only reason to edit this file is if you want to change the layout or design of all project pages at once.

---

### The Summit Page

**File:** `app/work/summit/page.tsx`

The Summit has its own dedicated page because it has a unique design with a hero image, stats bar, schedule, speaker grid, and registration section. All of its content is defined directly in this file.

**To update the event details** (date, time, format): Find the hero section and edit the text values directly.

**To update the schedule:** Find the `PANELS` array near the top of the file:

```ts
const PANELS = [
  {
    time: '11:00 AM',
    track: 'Energy',
    description: 'The future of energy infrastructure...',
  },
  ...
]
```

Add, remove, or edit entries here.

**To update past speakers:** Find the `PAST_SPEAKERS` array:

```ts
const PAST_SPEAKERS = [
  {
    name: 'Alex Rivera',
    title: 'General Partner',
    firm: 'Sequoia Capital',
    image: 'https://images.unsplash.com/...',
  },
  ...
]
```

Replace placeholder names, titles, firms, and images with real ones. For images, see the [Replacing Placeholder Images](#replacing-placeholder-images) section below.

**To update the stats bar:** Find the `STATS` array:

```ts
const STATS = [
  { value: '500+', label: 'Attendees' },
  { value: '30+', label: 'Speakers' },
  ...
]
```

---

### About Page

**File:** `app/about/page.tsx`

The two paragraphs of body copy are written directly in the JSX. Find the `<p>` tags in the file and edit the text between them.

The capabilities list is defined near the top of the file:

```tsx
const CAPABILITIES = [
  'Brand Strategy',
  'Event Production',
  'Digital Experiences',
  'Creative Direction',
  'Content & Media',
]
```

Add, remove, or rename items in this list.

---

### Contact Page

**File:** `app/contact/page.tsx`

The email address is in an `<a href="mailto:...">` tag — update both the `href` value and the visible text to match.

The social links are in an array at the top of the file — update the `href` values to point to your actual profiles.

---

### Replacing Placeholder Images

Several pages currently use placeholder photos from Unsplash. Here is how to swap them out for real photos:

1. **Prepare your image.** Recommended sizes:
   - Project card / hero images: at least 1200px wide, landscape orientation
   - Speaker headshots: at least 400px wide, portrait orientation (3:4 ratio works best)
   - Summit hero: at least 1600px wide

2. **Add the image to the project.** Place your file inside `public/images/`. For example: `public/images/summit/hero.jpg`

3. **Update the `src` value** in the relevant file. Change:
   ```tsx
   src="https://images.unsplash.com/photo-xxx"
   ```
   to:
   ```tsx
   src="/images/summit/hero.jpg"
   ```
   The path starts with `/` and is relative to the `public/` folder.

4. **For project card images**, update the `image` field in `lib/projects.ts`.

5. **For Summit speaker headshots**, update the `image` field in the `PAST_SPEAKERS` array in `app/work/summit/page.tsx`.

**Important:** If you use images hosted on an external website (not in your `public/` folder), the domain must be added to `next.config.ts` under `remotePatterns`. Currently, `images.unsplash.com` is already configured there.

---

## Publishing Changes with Git

Git is the tool that tracks your changes and sends them to the server where your website is hosted. Here is the full workflow from making a change to seeing it live.

### Step 1 — Make and preview your changes

Edit the relevant file(s), then run `npm run dev` to confirm everything looks right in the browser before publishing.

### Step 2 — Open the Source Control panel

In VS Code, click the **branch icon** in the left sidebar (it looks like a small graph with dots and lines). You will see a list of all the files you have changed.

### Step 3 — Stage your changes

Hover over the word **Changes** and click the **+** icon that appears. This stages all your changes, which means you are telling Git "I want to include all of these in my next save point."

Alternatively, you can stage individual files by clicking the **+** icon next to each file name.

### Step 4 — Write a commit message

At the top of the Source Control panel, there is a text box that says **Message**. Type a short description of what you changed, for example:

```
Update summit speaker list
```

or

```
Add new project: Fellowships
```

### Step 5 — Commit

Click the blue **Commit** button. This saves a snapshot of your changes locally.

### Step 6 — Push

Click the blue **Sync Changes** button that appears after committing (or **Push** if you see that instead). This sends your changes to GitHub, which will trigger your hosting provider (e.g. Vercel) to automatically rebuild and publish the updated website.

Your changes will be live within about a minute.

---

### Quick Reference: Terminal Commands

If you prefer the terminal over the VS Code GUI, here are the equivalent commands:

```bash
# Preview the site locally
npm run dev

# Stage all changes
git add .

# Save a snapshot with a message
git commit -m "Your message here"

# Publish to GitHub
git push
```

---

## Reporting Problems & Proposing Changes with GitHub

GitHub has two features built specifically for managing feedback and changes without everyone needing direct access to push code: **Issues** and **Pull Requests**. Think of Issues as a to-do list and Pull Requests as a review process before anything goes live.

---

### Issues — Flagging Something That Needs Attention

An Issue is how you tell the team "something needs to change here." You do not need to know how to fix it — just describe the problem clearly and assign it to whoever should handle it.

**When to open an Issue:**
- A link is broken or goes to the wrong place
- Text on a page is outdated, misspelled, or needs rewriting
- A photo needs to be swapped out
- Something looks wrong on mobile or in dark mode
- A new section or page needs to be added

**How to open an Issue:**

1. Go to the repository on **github.com**.
2. Click the **Issues** tab near the top of the page.
3. Click the green **New Issue** button.
4. Give it a clear, specific title. Good examples:
   - `Summit page: update speaker list for 2026`
   - `Contact page: LinkedIn URL is broken`
   - `Home page: hero tagline needs to be updated`
5. In the description box, explain what needs to change and where. Include the URL of the page if relevant, and paste in the new text or a photo if you have it ready. The more specific, the easier it is for whoever fixes it.
6. On the right side, use **Assignees** to tag the person responsible for fixing it.
7. Use **Labels** to categorize it — for example, `content` for text/image updates, `bug` for something broken, `enhancement` for new features. You can create custom labels in the repo settings.
8. Click **Submit new issue**.

The issue will stay open until someone closes it, which they should do once the fix has been pushed live. Team members can leave comments on the issue to ask questions or give updates.

---

### Pull Requests — Proposing a Change for Review

A Pull Request (PR) is how you propose a set of changes to the codebase and ask for someone to review them before they go live. This is the right workflow any time the change is significant enough that a second pair of eyes is warranted — for example, a new page, a redesign of a section, or anything that touches multiple files.

The idea is: instead of pushing directly to the `main` branch (which immediately deploys to the live site), you create a separate branch, make your changes there, and open a PR asking someone to review and approve before it gets merged.

**Step 1 — Create a new branch**

In VS Code, click the **branch name** in the bottom-left corner of the window (it will say `main` by default). A dropdown will appear at the top of the screen. Click **Create new branch** and give it a short descriptive name with no spaces, for example:

```
update-summit-speakers
```
or
```
add-fellowships-page
```

You are now on your own branch. Changes you make here will not affect the live site until the PR is merged.

**Step 2 — Make your changes**

Edit the relevant files as described in the [Editing Content](#editing-content) section. Run `npm run dev` to preview everything locally.

**Step 3 — Commit and push your branch**

Follow the same commit steps from the [Publishing Changes with Git](#publishing-changes-with-git) section. When you click **Sync Changes** / **Push**, VS Code will push your branch to GitHub (not `main`).

**Step 4 — Open a Pull Request on GitHub**

1. Go to the repository on **github.com**. You will usually see a yellow banner saying **"Your recently pushed branch: compare & pull request"** — click that button. If you don't see it, go to the **Pull Requests** tab and click **New pull request**.
2. Make sure the **base** branch (the destination) is set to `main` and the **compare** branch is your new branch.
3. Give the PR a clear title matching what you changed, for example: `Update Summit speaker list and stats for 2026`.
4. In the description, explain what you changed and why. If this PR closes an open Issue, write `Closes #12` (replacing 12 with the Issue number) — GitHub will automatically link them and close the Issue when the PR is merged.
5. Under **Reviewers** on the right, tag anyone who should approve the changes before they go live.
6. Click **Create pull request**.

**Step 5 — Review and merge**

The assigned reviewer will look at the changes, leave comments if anything needs adjusting, and approve the PR when it looks good. Once approved, click **Merge pull request** → **Confirm merge**. The changes will be merged into `main` and the site will redeploy automatically within about a minute.

After merging, you can safely delete the branch using the button that appears on the PR page.

---

### Workflow Summary

```
Spot a problem or content that needs updating
        ↓
Open an Issue on GitHub describing what needs to change
        ↓
Assign it to the right person
        ↓
That person creates a new branch, makes the changes, previews locally
        ↓
They push the branch and open a Pull Request referencing the Issue
        ↓
A teammate reviews and approves the PR
        ↓
PR is merged into main → site redeploys live automatically
        ↓
Issue is closed
```

This workflow ensures nothing goes live without being intentional about it, and creates a clear history of what changed, when, and why.

---

*For questions about the codebase, reach out to Henrique Rodrigues.*
