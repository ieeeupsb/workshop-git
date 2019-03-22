template: slide_section

# Git workflow
## Work. Stage. Commit. Repeat!

---

layout: false

# Git worflow
## The three sections/trees

.center[
![git trees](assets/workflow.svg)
]

---

# Creating new local repositories

- Create a new empty repository with `init` command.
	- Can be applied in empty or non-empty directories
	- Git won't initialize the reposity in either case
	- No files are automatically tracked
- A new hidden directory **.git** is created
	- Repository configurations
	- Data

---

# Creating new local repositories

```bash
# create an empty directory
$ mkdir workshop-git
# go inside that directory
$ cd workshop-git/
# initialize empty repository
$ git init
```

---

# Staging

- You edit and create files in your working directory
- Next step is to stage
- The **add** command creates a new snapshot of the current file(s) content
- Whatever **snapshots** you create, that **are what will be added to the repository when you *commit***
- Staging is an intermidiate phase between what you do in the working directory and what will be recorded in the repository/database

---

# Staging

```bash
# add specific file
$ git add <filename>
# add everything (new | modified | deleted)
$ git add .
# add everything (new | modified | deleted)
$ git add -A
# add already-tracked files (modified | deleted)
$ git add -u
```

---

# Commit

- The *commit* act takes the new snapshots and stores them "permantely" in the database
- Each *commit* has an author and message
	- The author depends on your global and local configurations (name + email)

```bash
$ git commit -m "message"
```

- You can stage and *commit* with the following shortcut
- Only known files (modified or deleted) are taken into account

```bash
$ git commit -a -m "message"
$ git commit -am "message"
```

---

template: slide_section

# Useful Git commands

---

layout: false

# Status

- The `status` command shows a summary of:
	- modified files
	- **staged** files (a snapshot for file was created)
	- new files, **untracked**
- The same file can be modified and staged. Why?

```bash
$ git status
```

---

# Compare the git trees (staging area, working directory, commits)

- The `diff` command show changes between:
	- two commits
	- commits and the working directory
	- ...

```bash
# compare the working directory with staging area
# what would be staged if you run `git add`
$ git diff
```

---

# Compare the git trees (staging area, working directory, commits)

```bash
# Compare the changes which are staged relative to a given <commit>
# If the <commit> is not given, it compares with the last commit
# It shows what changes will be recorded if you run `git commit`
$ git diff --cached [<commit>]
```

```bash
$ git diff <commit> <commit>
# The changes between two commits
# Commits can be identified with hashes (sha1) or via symbolic name HEAD (explained further)
# If you run `git diff <A> <B>`, see it as: if I am at A and I walk to B, what has changed?
# Running `git diff <B> <A>` will show a symmetric output
```

---

# Compare the git trees (staging area, working directory, commits)

```bash
$ git diff <commit>
# Compares the modifications in the working directory relatively to a given commit
```

---

# Logs

- Logs let you see the *commit* history over time
- By default, it shows, for each *commit*:
	- an id
	- the author (name and email)
	- date & time
	- the message

```bash
$ git log
```

---

# Logs
## Customize the output

- If you wish a more condensed output (the id, first line of the message)

```bash
$ git log --oneline
```

- You can see a short brief of the changes introduced by each *commit*

```bash
# Which files were modified, and the ammount of insertions and deletions
# IMPORTANT: Changing a line is removing a line and inserting a new one
$ git log --stat
```

---

# Logs
## Customize the output

- If you want, you can see the actual changes introduced on each *commit*

```bash
$ git log -p
```

---

# Logs
## Filtering

```bash
# show `N` commits
$ git log -n N
$ git log -N # shortcut

# dates
$ git log --since="1 week ago"
$ git log --since="17/03/2019 20:00"
$ git log --until="today"
$ git log <since>..<until>
```

---

# Logs
## Filtering

```bash
# author (regular expression)
$ git log --author="fabio"

# files
$ git log -- hello.c
```

- You can also see the changes of a particular *commit*

```bash
$ git show <commit> # hash or symbolic names
```

---

template: slide_section

# Git worflow
## HANDS ON
