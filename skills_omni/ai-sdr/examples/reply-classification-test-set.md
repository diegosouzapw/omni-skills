# Reply Classification Test Set

Use this starter set to test labeling and routing behavior.

## Instructions

For each reply, assign:

- reply class
- recommended action
- whether human approval is required

## Cases

### 1

**Reply:**
"Sounds interesting. Can you send more detail and pricing?"

**Expected class:** Positive
**Expected action:** Route to human
**Human approval required:** Yes, because pricing is requested

### 2

**Reply:**
"Not the right time. Check back next quarter."

**Expected class:** Neutral
**Expected action:** Approved nurture or human review based on policy
**Human approval required:** Usually no, if an approved follow-up exists

### 3

**Reply:**
"Please remove me from your list."

**Expected class:** Negative
**Expected action:** Suppress immediately
**Human approval required:** No

### 4

**Reply:**
"We already use another vendor for this."

**Expected class:** Objection
**Expected action:** Route according to approved objection policy
**Human approval required:** Often yes unless a reviewed playbook exists

### 5

**Reply:**
"Can you confirm whether your product is SOC 2 compliant?"

**Expected class:** Compliance-sensitive
**Expected action:** Escalate to human
**Human approval required:** Yes

### 6

**Reply:**
"This claim about our hiring plans is wrong. Where did you get that?"

**Expected class:** Compliance-sensitive
**Expected action:** Escalate to human, review data source and claim
**Human approval required:** Yes

### 7

**Reply:**
"Happy to chat. Are you free Tuesday?"

**Expected class:** Positive
**Expected action:** Route to meeting owner or scheduling queue
**Human approval required:** Depends on policy, but usually yes for final confirmation

### 8

**Reply:**
"Who else like us do you work with?"

**Expected class:** Neutral or objection depending on policy
**Expected action:** Human review unless approved proof points exist
**Human approval required:** Usually yes

## How to use this file

- add real historical replies from your workflow
- keep expected labels stable for regression checks
- add edge cases whenever a live mistake occurs
