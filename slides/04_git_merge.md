template: slide_section

# Introduction to Git Branches

---

layout: false

# What is a branch?
## Abstraction

- A branch let's you diverge the development of your project
	- A branch for a bugfix
	- A branch for a new feature
	- A branch for testing new ideas
.center[![branches](/assets/branch-1.png)]
---

# What is a branch?
## Abstraction

- Branches tipically have a common node (*commit*)
- You can switch between branches and merge them
	- You have the main development branch
	- You fix a bug in a separate branch. Then you want to merge in the main branch

---

# What is a branch?
## How it works in Git

.flex[
- A branch is just a pointer to a *commit*
- For example, `master` is pointing for the last *commit* of `master` branch
	- Ok, you have multiple branches. **How does Git know at which branch you are**?
	- Special symbolic pointer: **HEAD**
	- It points to the local branch you are currently on

![branch illustration](/assets/branch-2.png)
]
---

# Create a new branch

- Use `branch` command

```bash
$ git branch <branch_name>
```

.flex[

.div[
What happens internally?

1. A new branch (pointer) is created
2. Its pointing to the same *commit* as `HEAD`
3. However, `HEAD` is not updated, it doesn't point to the new branch
]

.div[
![branch illustration](/assets/branch-3.png)
]
]

---

# Switching between branches

In order to switch to a new branch:

```bash
$ git checkout <branch>
```
.flex[
.div[
What happens internally?

1. `HEAD` is updated. It points to the checked out branch
2. Working directory is updated
]
.div[
![branch checkout](/assets/branch-4.png)
]
]

---

# Understanding symbolic HEAD

- Symbolic name `HEAD` can be used to refer branches, and therefore commits
- `HEAD` itself is pointing to the current checked out branch
- You can use two aditional operators: `^` and `~`

---

# Understanding symbolic HEAD

.flex[
.flex-child[
- `HEAD~1` or `HEAD~`: commit's first parent
- `HEAD~2`: commit's first parent's first parent
- ...


- `HEAD^1` or `HEAD^`: commit's first parent
- `HEAD^2`: commit's second parent
- ...
]
.flex-child[
![head operators](/assets/head-symbolic.png)
]
]

---

# Create branches 
## Alternatives

If you want to create a branch pointing to a specific *commit*

```bash
$ git branch <branch name> <commit SHA1>
$ git branch <branch name> HEAD~n
```

In order to create a new branch and immediately checkout to that branch

```bash
$ git checkout –b <branch name>
$ git checkout –b <branch name> <commit sha1>
$ git checkout –b <branch name> HEAD~n
```
