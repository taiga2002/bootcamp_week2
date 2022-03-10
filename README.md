# Week 2 – Build Pretty, Code Fast

You're telling me a barb wired this fence?

## Getting Started

Make a copy of this template on you or your partner's personal GitHub account.

```sh
git checkout -b development
```

Install packages:

```sh
yarn
```

Finally:

```sh
yarn start
```

and open [http://localhost:3000](http://localhost:3000) to view it in the browser.

If you're using VSCode, it's recommended to go into settings and set `eslint.codeActionsOnSave.mode` to `all` and `editor.formatOnSave` to `true`.

---

## Phases

**Phase 1 (recommended Sunday)** – Put together the stateless UI (just the frontend components so it looks better)

**Phase 2 (rec. Tuesday)** – Build out custom `useForm` hook

- [React Hook Form](https://react-hook-form.com/) is a great example of a pretty well-put-together form hook
  - [API](https://react-hook-form.com/api/useform)
  - [Source Code](https://github.com/react-hook-form/react-hook-form)
- This should be able to handle validation
- Use hook to get submit logic working (i.e. console.log form results at the end)

**Phase 3 (rec. Wednesday)** – Add a button that allows a user to add a new text input to the form with a custom name.

- Think about best way to allow the user to name the input (hint, modal is probably easiest to collect this data).

## **Requirements**

Your form should look like this: [link to Figma](https://www.figma.com/file/BX1RYUilFGySN1A81M32e3/Designs?node-id=138%3A2)

**Functional Requirements**

- If anything was left blank, highlight the input field / component.

**Technical Requirements**

- Define your custom hook in the provided `src/Hooks/useForm.tsx` file.
- Your hook should be called like this:

  - ```typescript
    const { handleSubmit, register } = useForm();

    // some code not shown

    <form onSubmit={handleSubmit(successfulSubmit)}>

      <input {...register("name", {optionalArgs: optionalValues})} id="name">

    </form>
    ```

- Each type of input component should be defined in its own file in `src/Components/`.

- Chakra UI form inputs instead of plain HTML form inputs.

- Typescript

  - Type each component's props
  - Here's a snippet from our solution, but yours doesn't necessarily have to match exactly:

  - ```typescript
    import React from "react";

    export interface SelectInputProps {
      placeholder: string;
      options: string[];
      onChange: React.ChangeEventHandler<HTMLElement>;
    };

    const SelectInput: React.FC<SelectInputProps> = ({ placeholder, options, onChange }) => {...};

    export default SelectInput;
    ```

  - Type the return values of your hook (handleSubmit, register) as well.

- Re-renders
  - Your form should not re-render when input is changed.
  - The demo video on the landing of [react hook form's website](https://react-hook-form.com/) shows how to count the re-renders.

## Submission

**Add** your team information to [this spreadsheet](https://docs.google.com/spreadsheets/d/1dXsNPQxYvZUX6gAXzCfX8q1HVj6jUGKO1bn1RNyhZsI/edit?usp=sharing).

For each phase, **create** a PR from development to `main`.

**Send** the link to `#bootcamp-devs-checkoffs` on Slack for review.
