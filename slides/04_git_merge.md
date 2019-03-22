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
.center[![branches](assets/branch-1.png)]
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

![branch illustration](assets/branch-2.png)
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
![branch illustration](assets/branch-3.png)
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
![branch checkout](assets/branch-4.png)
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
![head operators](assets/head-symbolic.png)
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

---

# Introduction to merging

- At some point you will want to merge branches
- Telling Git to merge two branches is easy
- However, it's important to understand how Git does it, and what problems may occur


- Scenario: You have a branch `fix-10`, which diverged from `master`
- You want merge the changes from `fix-10` to `master`

1. Checkout the branch that we will merge into (in this case, `master`)
2. Run the command `$ git merge <source branch>` (`fix-10` in our example)
3. Cross fingers

---

# How merging works

- There are three possible scenarios when you attempt to merge branches
	- **Fast-Forward**
	- **Non-Fast Forward**
	- **Conflict**

---

# How merging works
## Fast-Forward

- Git does **fast-forward** when one commit is directly reachable from another one
- This is as simple as moving pointers, no further actions are needed

.center[![example](assets/branch-5a.svg)]

---

# How merging works
## Fast-Forward

1. We want to merge `new-branch` into `master`
2. We checkout `master`
3. `$ git merge new-branch`

.center[![example](assets/branch-5b.svg)]

---

# How merging works
## Non-Fast Forward

- If the two branches being merged diverged at some point, Git can't simply move pointers
- Git finds the common *commit*  to both branches
- Will see the changes performed on both branches
- It sees that one or more files were modified, but at different chuncks
- Then, Git can handle this automatically, it uses changes from both branches

---

# How merging works
## Non-Fast Forward

.center[![example](assets/branch-5c.svg)]

---

# How merging works
## Non-Fast Forward

.center[![example](assets/branch-5d.svg)]

---

# How merging works
## CONFLICTS

- Similar to the **non-fast forward scenarion**
- However, the same file was modified on both branches on the same chuncks
- Git doesn't know how to handle this, so it reports a conflict
- The conflict is resolved manually by the user

---

# How merging works
## CONFLICTS

.center[![example](assets/branch-5e.svg)]

---

# How merging works
## CONFLICTS

- Upon conflict, git will report which files have conflicts
- It inserts delimeters on those files around chuncks with conflicts

```
>>>>>>> master
...
=======
...
<<<<<<< new-branch
```

- You edit the file manually
- When done, stage files with conflicts and commit

---

# Delete branches

- To delete a local branch:

```bash
$ git branch -d <branch>
```

- If the branch to be deleted is not totally merged with other branches (data loss), Git aborts the operation. To force, use `-D`

```bash
$ git branch -D <branch>
```
