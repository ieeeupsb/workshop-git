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
