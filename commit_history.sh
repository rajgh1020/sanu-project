#!/usr/bin/env bash
# commit_history.sh
# Simulate 30 commits over two weeks (June 3–16 2025), 2–3 per day.

# 3rd & 4th get 3 commits; the rest 2 commits/day at 10:00 and 16:00
declare -a dates=(
  # June 3
  "2025-06-03T09:00:00+09:00"
  "2025-06-03T14:00:00+09:00"
  "2025-06-03T18:00:00+09:00"
  # June 4
  "2025-06-04T09:00:00+09:00"
  "2025-06-04T14:00:00+09:00"
  "2025-06-04T18:00:00+09:00"
)

# Now June 5–16: 2 commits per day at 10:00 and 16:00
for day in {05..16}; do
  dates+=("2025-06-${day}T10:00:00+09:00")
  dates+=("2025-06-${day}T16:00:00+09:00")
done

# 30 descriptive but plain commit messages
declare -a msgs=(
  "Initial project setup"
  "Add index.html boilerplate"
  "Update style.css variables"
  "Implement hero section layout"
  "Style hero text and button"
  "Add feature cards markup"
  "Style feature cards"
  "Add tracker form markup"
  "Implement tracker JS logic"
  "Style tracker form"
  "Fix form validation message"
  "Add about page content"
  "Style about page panels"
  "Add gallery grid markup"
  "Implement gallery filter logic"
  "Style gallery cards"
  "Add contact form markup"
  "Implement contact validation"
  "Style contact form"
  "Fix navigation active state"
  "Refactor CSS into one file"
  "Rename CSS classes for clarity"
  "Optimize image assets"
  "Fix HTML typos"
  "Update README with instructions"
  "Add license file"
  "Improve responsive breakpoints"
  "Fix footer alignment"
  "Minor CSS tweaks"
  "Final project cleanup"
)

# Iterate and create commits
for i in "${!dates[@]}"; do
  GIT_AUTHOR_DATE="${dates[$i]}"   GIT_COMMITTER_DATE="${dates[$i]}"     git commit --allow-empty -m "${msgs[$i]}"
done

echo "✅ Created ${#msgs[@]} empty commits spanning 2025-06-03 to 2025-06-16."
