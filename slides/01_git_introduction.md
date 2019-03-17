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
