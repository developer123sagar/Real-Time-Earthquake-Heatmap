# Learning Git 💻

Git is a version control system that helps you track changes in your files and collaborate with others. Let's understand Git effectively.

By the end of this you'll be know what is Git and how it works.

> #### Attention:
>
> Before we start, i assume you've already installed Git on your system, if you're using linux then it comes with pre-installed otherwise head out to the Git documentation.

## Table of Contents

1. [Why we should use Git?](#1-why-we-should-use-git)
2. [How Git works?](#2-how-git-works)
3. [Basic Git workflow](#3-basic-git-workflow)
4. [4 Pillars of Git (ADD, COMMIT, PULL, PUSH)](#4-4-pillars-of-git-add-commit-pull-push)
5. [Further Reading](#5-further-reading-📒✏️)

## 1. Why we should use Git?

Git is very powerful tool for modern software development. By knowing it's benefits
we can make our teamworks smoother and faster.

**Here, some benefits**

- Multiple people (you, other and me) can work on the same project at the same time without overwriting each other's work.
- See who made what changes and when.
- Easily go back to the older version if something breaks.
- Team members can review each other’s work before merging it.
- Many many more

Now we knows what Git provide us (as developer) at the bare minimum to start to leverage these benefits as individual or teams.

## 2. How Git Works?

Git has three main states that your files can reside in: **modified**, **staged**, and **committed**.

![git-status](./assets/git_state.png)

Here’s what each state means:

1. **Modified**: A file is considered "modified" when changes have been made to it in the working directory since the last commit. These changes have not yet been staged (indexed) for the next commit.

2. **Staged (i.e., Indexed)**: A file is "staged" or "indexed" when changes to it have been marked for inclusion in the next commit. These changes are ready to be committed to the Git repository.

3. **Committed**: A file is "committed" when the changes that were staged have been permanently recorded in the Git repository. These changes are saved as part of a commit with a unique identifier.

## 3. Basic Git Workflow

### 3.1 Understanding Repositories

- **Local Repository:** The Git repository on your local machine. It contains your project files and Git tracking.
- **Remote Repository:** A copy of your project hosted on a remote server, such as GitHub, GitLab, or Bitbucket, allowing collaboration and backup.
- **.git Folder:** When you initialize a Git repository, a `.git` folder is created in the root of the project. It contains all the information Git needs to track changes.

### 3.2 Cloning an Existing Repository

- **Clone a Remote Repository:**
  If you want to work on an existing project hosted on a remote server, you can copy it (clone it) to your local machine:
  ```bash
  git clone <repository_url>
  ```
  Example:
  ```bash
  git clone https://github.com/naxa-developers/react-typescript-starterkit-v3.git
  ```
  This command creates a local copy of the remote repository and sets up a link to the original.

### 3.3 Staging Files (Git Index)

- **The Staging Area (Index):**
  The staging area, or index, is an intermediate space between your working directory and the Git repository. Changes in your project are staged (added) before committing.
- **Stage Changes:**
  To tell Git which files you want to include in the next commit, use `git add`:
  ```bash
  git add <file_name>     # Add a specific file
  git add .               # Add all changes in the current directory
  ```
  Example:
  ```bash
  git add README.md
  ```

### 3.4 Checking the Status of Files

- **Check the Status of Your Working Directory:**
  Use `git status` to see which files are staged, unstaged, or untracked:
  ```bash
  git status
  ```
  This command provides an overview of your project’s state.

### 3.5 Committing Changes

- **Commit Staged Changes:**
  After staging, you save a snapshot of the current state of the project by committing. Each commit should represent a meaningful unit of work.
  ```bash
  git commit -m "Your commit message"
  ```
  Example:
  ```bash
  git commit -m "Added navigation bar"
  ```

---

### Basic Workflow Example:

```bash
# Step 1: Initialize a repository (if it's a new project)
git init

# Step 2: Check the current status of the project
git status

# Step 3: Stage changes to the staging area
git add .

# Step 4: Commit the staged changes
git commit -m "Your commit message"

# Step 5: Push the changes to a remote repository (if connected)
git push origin <branch_name>
```

## 4. 4 Pillars of Git (ADD, COMMIT, PULL, PUSH)

These commands are the mostly you're gonna use while working with Git.

### ADD

The `git add` command adds changes (new files or modifications) to the staging area. These changes are then ready to be committed.

#### Syntax:

```bash
git add <file_name>    # Add a specific file to the staging area
git add .              # Add all changes (new, modified, deleted) in the current directory
```

#### Example:

```bash
git add index.html    # Stage a specific file
git add .             # Stage all changes in the current directory
```

### COMMIT

The git commit command takes the staged changes and commits them to the local repository. Each commit represents a snapshot of your project at a specific point in time.

#### Syntax:

```bash
git commit -m "commit message"    # Commit staged changes with a message describing the changes
```

#### Example:

```bash
git commit -m "Fixed navigation bar bug"    # Commit with a descriptive message
```

### PUSH

The **`git push`** command uploads your local commits to a remote repository (e.g., GitHub, GitLab). This allows others to access your latest changes or backups your work remotely.

#### Syntax:

```bash
git push origin <branch_name>     # Push commits to a specific branch of the remote repository
```

#### Example:

```bash
git push origin main    # Push commits to the 'main' branch on the remote repository

or

git push origin my_cat_album
```

### PULL

The **`git pull`** command fetches and integrates changes from a remote repository into your local repository. It combines **`git fetch`** and **`git merge`** to update your local codebase with the latest changes from others.

#### Syntax:

```bash
git pull origin <branch_name>     # Pull updates from the specified branch of the remote repository
```

#### Example:

```bash
git pull origin main    # Pull the latest changes from the 'main' branch
```

## 5. Further reading 📒✏️

I hope this very introductory docs somehow useful to you get started with Git in very fundamental way, if not you can always use other resources as you like. So if you reading this sentence, i can assume, know you've a some understanding about Git, that's great, from here you need to follow bellow links in orders.

- Learn how to write commit [click here](./conventional_commits.md)
- Working with remote repository [click here](./working_with_repository.md)
