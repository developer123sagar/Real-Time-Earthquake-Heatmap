# Working with Git/Github Repository (Remote repo.) 🌐

Now, we know how to write good and clean commit message to help us communicate better about changes we've made in the project. From here, we gonna learn how to work with remote repository.

> **Prerequisites**
>
> 1. Basic knowledge of Git
> 2. Github account

Let's get started

Today we gonna add a new type of Button component called ButtonRipple into our existing repository (starter-kit-v3). First we need to clone the repo. To clone repository use **`git clone`** command using following link.

```Bash
https://github.com/naxa-developers/react-typescript-starterkit-v3.git
```

After done cloning the repo. navigate to the project directory and open with it your favorite code editor or IDE.

Before we start writing code, let verify current working branch.

Open you favorite terminal (for Windows user use CMD or Powershell) and enter the following command.

```bash
git branch
```

Output:

```Bash
*  master
```

The above command will print all the branch you own as well as some others branch like **`master`** aka main branch. The default branch is `master` branch and asterisk indicates that the your current working branch.

Now let's create our own new branch called `feat/fancy-button`.

Use following command to create a branch

```Bash
git checkout -b feat/fancy-button
```

And you'll be seeing output something like this

```Bash
Switched to a new branch 'feat/fancy-button'
```

Execute the `git branch` command again, a new branch is created with provided name and it'll automatically select the newly created branch.

Now head back to the code editor, create a new directory `Button` inside the directory called `src/components/common/`. After creating directory create new file `index.tsx` and past the following code and save file.

```Bash
import { MouseEvent, useRef } from 'react';

export default function FancyButton() {

  const rippleRef = useRef<HTMLDiVElement | null>(null)

  function handleClick(event: MouseEvent<HTMLDivElement>) {
    console.log(event)
  }

    return(
      <button
        type="button"
        className="naxatw-relative naxatw-overflow-hidden naxatw-rounded-md naxatw-border-0 naxatw-border-purple-500 naxatw-bg-purple-400 naxatw-p-3 naxatw-px-4 naxatw-font-semibold naxatw-text-white naxatw-outline-purple-500 hover:naxatw-shadow-light"
        onClick={handleClick}
      >
        My Button
        <div
          className="naxatw-absolute naxatw-h-0 naxatw-w-0 naxatw-rounded-full naxatw-bg-gray-50 naxatw-opacity-50 naxatw-transition naxatw-duration-700"
          ref={rippleRef}
        />
      </button>
    )
}
```

After saving the file, go to `src/views/Dashboard/index.tsx` and render the button. You should see a button rendered on the screen.

Now, run the following command:

```Bash
git status
```

After running the command, Git will list all changes have been made from the last commit in terminal. For now, we've only made one change in the project, we can see the following output from the above command.

Output:

```Bash
On branch feat/fancy-button

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        src/components/common/Button/
```

Right now, our `FancyButton` component hasn't track by Git, so have to tell Git, track our newly created FancyButton. I expect you've already figure out what to do on the next step. Let's run command `git status` to confirm, Git is tracking our `FancyButton` component.

Output:

```Bash
On branch feat/fancy-button
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   src/components/common/Button/index.tsx
```

Now, our changes have been staged, it's time write our first commit message. Before we write commit message, there's a certain convention we have to follow. These conventions are already covered in the previous doc ([here if you need again](./conventional_commits.md)).

### Quick summary about commit message conventions:

- API or UI relevant changes
  - **`feat`** Commits, that add or remove a new feature to the API or UI
  - **`fix`** Commits, that fix a API or UI bug of a preceded feat commit
- **`refactor`** Commits, that rewrite/restructure your code, however do not change any API or UI behaviour
  - **`perf`** Commits are special refactor commits, that improve performance
- **`style`** Commits, that do not affect the meaning (white-space, formatting, missing semi-colons, etc)
- **`test`** Commits, that add missing tests or correcting existing tests
- **`docs`** Commits, that affect documentation only
- **`build`** Commits, that affect build components like build tool, ci pipeline, dependencies, project version, ...
- **`ops`** Commits, that affect operational components like infrastructure, deployment, backup, recovery, ...
- **`chore`** Miscellaneous commits e.g. modifying .gitignore

Let's write a commit message for our `FancyButton` component.

Run the following command:

```Bash
git commit -m "feat(button): add ripple effect button"
```

You'll see similar output like this on your terminal.

```Bash
[main] feat(button): add ripple effect button
 1 file changed, 25 insertions(+)
 create mode 100644 src/components/common/Button/index.tsx
```

Our commit message looks slightly different than may be we used to write before. Let's break-down it.

- **Type(feat)**:

  - feat indicates that this commit introduces a new feature.
  - It follows the conventional commit format, where different types (like fix, docs, chore, etc.) are used to categorize the changes.

- **Scope(button)**:

  - `button` is the scope of the change. This indicates that the changes are specific to the `button` component. The scope is enclosed in parentheses to clarify where the change has been made. Scope can be either `file` or `directory` name.

- **Subject/Message**: after colon(:) symbol, `add ripple effect button` provides a concise summary of what was done. It explains that the ripple effect was added.

Congratulation, now you know how to write good commit message. let's explore further, here some scenario, suddenly your project manager tells you, our `FancyButton` also need icon to show along with button label. But there's some problem with our button, the way our `FancyButton` component is composed, the current requirement (which is adding a icon also) don't support. So let's make our `FancyButton` component to also have icon.

Replace you FancyButton component code with the following:

```Bash
import { MouseEvent, useRef } from 'react';
import Icon from '../Icon';

type ButtonProps = {
  label: string;
  iconName?: string;
};

export default function ButtonRipple({ iconName, label }: ButtonProps) {

  const rippleRef = useRef<HTMLDiVElement | null>(null)

  function handleClick(event: MouseEvent<HTMLDivElement>) {
    console.log(event)
  }

    return(
      <button
        type="button"
        className="naxatw-relative naxatw-overflow-hidden naxatw-rounded-md naxatw-border-0 naxatw-border-purple-500 naxatw-bg-purple-400 naxatw-p-3 naxatw-px-4 naxatw-font-semibold naxatw-text-white naxatw-outline-purple-500 hover:naxatw-shadow-light"
        onClick={handleClick}
      >
      {iconName && <Icon name={iconName} className="naxatw-text-2xl" />}
      {label}
        <div
          className="naxatw-absolute naxatw-h-0 naxatw-w-0 naxatw-rounded-full naxatw-bg-gray-50 naxatw-opacity-50 naxatw-transition naxatw-duration-700"
          ref={rippleRef}
        />
      </button>
    )
}
```

Great we've added an icon option to button, let's add these changes in Git. Run following command.

```Bash
git add src/components/common/Button/index.tsx

git commit -m "refactor(button): add prop for show icon"
```

I hope this commit message looks familiar to you, there's only two changes, one is `type` and another is `message`. The `type = refactor` is used because of we modified our component to add support for `icon`. Depending on task your doing either adding new feature, or fixing bug etc..., you're gonna always prefix the commit message with appropriate `type`.

Finally our `FancyButton` component is ready to use in our project. Unfortunately, we're the only one can use it. If we want to use the button by everyone, we need to push `FancyButton` component to our remote repository, so if anyone need it, they can pull the code and use it.

Before we push `FancyButton`'s component change, we must ensure it works on production environment without breaking our epic app. Run the following command(s) depending on your package manager.

```Bash
# for NPM user

npm build

# for yarn user

yarn build
```

I hope our `FancyButton` component builds successfully. If it's failed, it will show error message with tracking information such as file name and line number.

There's still one thing to do before we push the change, remember we're working as a team in the same codebase (a repository), may be some of the team member added a new feature, another remove the old feature and other working on bug fixing etc..., and these changes also wanna include in your branch to keep update with everyone else's changes happening in the codebase.

Run the following command:

```Bash
git pull origin <branch_name> # branch name is where all the latest changes are store

# here in NAXA, we have a "develop" branch to push the changes (this specific to only NAXA)
```

Depending on the success of the command, we can get get either successfully applied latest changes in the current branch or merge conflict. Let's say we get a merge conflict,
