name: slide_title
class: slide_title, center, middle
layout: true

{{content}}

<div class="slide_logos">
<img alt="nuieee-logo" src="/assets/nuieee-logo.png">
<img alt="cs-logo" src="/assets/computer-society-logo.svg">
</div>

---

name: slide_section
class: slide_section, center, middle
layout: true

{{content}}

---

template: slide_title
layout: false

# Workshop Introduction to Git

---

template: slide_section

# Version controls

---

layout: false

# Version control

- System that **tracks** one or more files over time
- Lets you check the files state on the past
- In theory any file can be tracked
	- However, some **features** are **only** possible in **text files**
	- Tracking very **large files can slow things down**
- **Git** is **not the first source version control**, there are many
- However, **developers are more happy with Git** than anything else

---

# Version controls: types
## LCVS

- Local Version Control Systems (LCVS)
- **Local** repository
- Doesn't allow collaborative work
- Not pratical if you want to work on multiple devices

---

# Version Controls: types
## CVCS

- Centralized Version Control Systems (CVCS)
- Repository is hosted in one or more servers
- Clients download one version of the repository, work over it, then send it to the server
- All operations are online (network overhead, can't work offline)
- Not really realiable
	- What if the server is down?
	- What if there's an accident with physical damage in the servers?
- Example: SVN, Perforce

---

# Version Controls: types
## DVCS

- Distributed Version Control Systems (DVCS)
- Repository hosted in one or more servers (like CVCS)
- Clients have a full repository copy
- Most operations are local
	- Fast
	- No internet connection is needed
- Examples: **Git**, Mercurial
- May take several disk time and require several time for downloading and uploading new versions if:
	- Very long history
	- Very large binary files

---

template: slide_section

# Setting up Git

---

layout: false

# Installing 

- Windows: [https://git-scm.com/download/win](https://git-scm.com/download/win)
- Mac: [https://git-scm.com/download/mac](https://git-scm.com/download/mac)
- Linux: [https://git-scm.com/download/linux](https://git-scm.com/download/linux)

---

# Initial configuration

- Changes on the repository are identified by the author with a name and email
- Global configuration

```bash
$ git config --global user.name "example"
$ git config --global user.email "example@ieee.com"
```

- Repository configuration (*overrides* global configurations)

```bash
$ git config user.name "example"
$ git config user.email "example@ieee.com"
```

---

template: slide_section

# Git workflow
## Work. Stage. Commit. Repeat!

---

layout: false

# Git worflow
## The three sections/trees

.center[
![git trees](/assets/workflow.svg)
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

---

template: slide_section

# A look into Git Internals

---

layout: false

# Git internals 

.center[
![internal objects](/assets/internals-3a.svg)
]

---

# Git internals 

.center[
![internal objects](/assets/internals-3b.svg)
]

---

# Git internals 

.center[
![internal objects](/assets/internals-3c.svg)
] 

---

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

.center[![example](/assets/branch-5a.svg)]

---

# How merging works
## Fast-Forward

1. We want to merge `new-branch` into `master`
2. We checkout `master`
3. `$ git merge new-branch`

.center[![example](/assets/branch-5b.svg)]

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

.center[![example](/assets/branch-5c.svg)]

---

# How merging works
## Non-Fast Forward

.center[![example](/assets/branch-5d.svg)]

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

.center[![example](/assets/branch-5e.svg)]

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

---

template: slide_section

# Working with remotes

---

layout: false

# Working with remotes

- So far, you have worked locally
- If you intend to collaborate with others, you need to host the repository on a server
- Several questions arise:
	- How does git know where it should send data?
	- Where should it pull data from? How can I get changes done by others?
	- How to manage remote branches?

---

# Working with remotes
## Listing the configured remote servers

- You can view which remote servers are configured in the repository:

```bash
$ git remote
$ git remove -v # more detailed (show urls for Read and Write)
```

- For a repository created locally, the output is most likely empty

---

# Working with remotes
## Listing the configured remote servers

- If you clone the repository from GitHub, you will see at least one entry.
- Most likely named **origin** - the default name given to the server you cloned the repository from

```bash
$ git clone git@github.com:ieeeupsb/workshop-git.git
$ cd workshop-git/
$ git remote -v
```

```
origin  git@github.com:ieeeupsb/workshop-git.git (fetch)
origin  git@github.com:ieeeupsb/workshop-git.git (push)
```

---

# Working with remotes
## Listing the configured remote servers

- You can have several remote configurations
- One configuration for each collaborator, for example

```bash
bakkdoor https://github.com/bakkdoor/grit (fetch)
bakkdoor https://github.com/bakkdoor/grit (push)
cho45  https://github.com/cho45/grit (fetch)
cho45 https://github.com/cho45/grit (push)
defunkt https://github.com/defunkt/grit (fetch)
defunkt https://github.com/defunkt/grit (push)
origin git@github.com:mojombo/grit.git (fetch)
origin git@github.com:mojombo/grit.git (push)
```

---

# Working with remotes
## Managing remote repositories

- You can add new remote configurations:

```bash
$ git remote add <remote name> <url>
```

- Remove them:

```bash
$ git remote remove <remote name>
```

---

# Working with remotes
## Managing remote repositories

- Rename them:

```bash
$ git rename <old> <new>
```
- **Remotes** are just a **friendly reference** to the repository URL
	- Instead of saying _"Hey Git, send my commits to **git@github.com:ieeeupsb/workshop-git.git**"_
	- ... we say _"Git, send my commits to &lt;**remote**&gt;"_

---

# Remote branches

- At this point, you know Git can be configured to communicate with remote repositories
- Git also has **remote references**
	- Pointers to branches, tags, ..., on the remote repository
- **Remote-tracking branches** are references to the state of remote branches (local references you can't move)
- Everytime you do any network connection, Git updates the references

---

# Remote branches

- Remote-tracking branches take the form **&lt;remote&gt;/&lt;branch&gt;**
	- E.g. **origin/master**
- In summary we have:
	- Local branches
	- Remote(-tracking) branches
	- A **local branch _can have_ a relationship with a remote branch**

---

# Cloning repositories

```bash
# clone a repository from a given URL (git supports several protocols)
# automatically it creates a directory with the repository name
# you can customize if you specify `<directory>`
$ git clone <repository url> [<directory>]

$ git clone git@github.com:ieeeupsb/workshop-git.git example
```

- Clones the repository in a new directory
- Creates remote-tracking branches for each branch in the cloned repository
- Creates and checks out an initial branch (typically `master`)
- You now have a local branch `master` tracking the remote `origin/master`

---

# Pushing

- You work locally on a branch. How to share it with the world?
- Git doesn't automatically synchronize your local branches to remote branches
- You have to explicitly **push** your changes

```
$ git push <remote> <branch>

# You can have a local branch named `hello`, and the remote be `unit-test`
$ git push <remote> <local branch name>:<remote branch name>
```

---

# Fetching

- Fetch downloads latest changes from the repository
	- Commits, files, ...
	- Lets you **see what everybody else has been working on**
	- It has **no effect on your local content**
- Safe way to review *commits*  before integrating them with your local repository

```
# Fetch all branches from the repository pointed by `remote`
$ git fetch <remote>
# Fetch a specific branch the repository `remote`
$ git fetch <remote> <branch>
# Fetch all data from all registered `remotes`
$ git fetch --all
```

---

# Pulling

- It fetches and merges the downloaded changes into your local content
	- `$ git fetch`
	- `$ git merge`
	- It only fetches and merges the local checked out branch (referenced by `HEAD`)
- A merge is performed, can lead to **merge conflicts**

---

# Pulling

```bash
# Equivalent to `$ git fetch origin HEAD`
# Followed by `$ git merge HEAD`
$ git pull

# Equivalent to above, but instead of remote `origin` use `<remote>`
$ git pull <remote>

# Fetches the remote branch <remote>/<branch>...
# ... and merges to current branch `HEAD`
$ git pull <remote> <branch>
```

---

# Tracking branches

- A **local branch** can be configured to **track a remote branch**
- This simplifies the previous operations
- No longer have to specify the `remote` and `branch` fields


- Lets say you tell Git _"The local branch `a` tracks the remote branch `origin/b`"_
- Now assume you are the at branch `a`
- Operations such `pull`, `push` and `fetch` will get/send data to `origin/b` automatically

---

# Tracking branches
## Configuration

- At any time, you can change what remote branch a local branch is tracking

```bash
$ git branch --set-upstream-to=<remote>/<branch> [<local branch>]
$ git branch -u <remote>/<branch> [<local branch>]
```

- **Tip**: Use `git branch -vv` to check relationship of local branches with remote ones

---

# Tracking branches
## Configuration

- For example, for the remote `origin`, remote branch `dev` and local branch `development`:

```bash
$ git branch -u origin/dev development

# If you are at the development branch, you can ommit the local branch name
$ git branch -u origin/dev
```

- This configuration is possible if and only if the remote branch already exists
- You may need to use `$ git fetch --all` to update remote references

---

# Examples
## Create a new remote branch

- Imagine you have a local branch `issue-12` with some work
- How to create a remote branch `issue-12` so that other collaborators can access your work?

```
$ git push -u <remote>/<branch>
```

---

# Examples
## Working on a remote branch

- You can't directly work on remote branches
- You need to have a local branch which is tracking that remote branch

**Method 1**
- Create the local branch with `git branch`
- Ensure you have the reference for the remote branch with `git branch -r`
- Settup the upstream of the new branch with `$ git branch -u <remote>/<branch>`
- Run `git pull` to merge remote branch with your local branch

---

# Examples
## Working on a remote branch

**Method 2**
- Use the following commands
- They create a local branch which is already tracking the desired remote branch
- Examples assume you have local references for the remote branch

---

# Examples
## Working on a remote branch

```bash
$ git checkout -b <branch> <remote>/<branch>
# shortcut for above (local branch with same name as the remote one)
$ git checkout --track <remote>/<branch>
# shortcut for the shortcut
# works if:
# a) the branch doesn't exist locally
# b) matches a name of a single remote's branch
$ git checkout <branch>
```

---

# Examples
## Delete a remote branch

- Scenario: you have a local branch `A` tracking the remote branch `remote-A`
- You delete your local branch `A`
- The remote branch is not affected


- If you really want to delete the remote branch, use:

```bash
$ git push <remote> --delete <branch>
```
