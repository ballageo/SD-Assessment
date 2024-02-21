# IncQuery coding task

- Author: George Ballard george@incquery.com
- Date Created: 20-Feb-2024

# Objective

Demonstrate proficiency using React functional components according to the guidelines set in the task

1. Make the question text editable: You start by ensuring the question text in the input field can be edited, allowing users to modify questions directly within the tool. You set a limit of 255 characters on the text, and show the user how many characters remain on their budget.

   - Capturing question text into state to allow modification, used `useEffect()` to update displayed text in real-time
   - Completed using 'maxLength' property on the text input for the question
   - Displays current / remaining characters before the input box

2. Implement the question mode toggle: Soon after, you realize the importance of selecting question modes single-select or multi-select modes and implement the logic.
   - Applied an `onClick()` event handler to toggle the active question type, which is passed down through props to each option to ensure only one can be set as "Active" at a time

3. Report a mismatch between question text contents and question mode: As you delve deeper, the potential for mismatches between the question text and the selected question mode becomes apparent. Addressing this, you implement a feature to report possible inconsistencies, guiding users to create more coherent and effective surveys. For example if the text "select all that apply" appears and the question is single-select, that would indicate an error.
   - Conditional rendering based on input question text will display an error message if the entered text is suggestive of the wrong question type being select (eg. single-select question text has "select all")
   - Applied custom CSS to ensure error message is below the question text field

4. Make the choice items editable: The ability to edit the text of choice items directly within the editor is identified as another critical feature. This capability allows for more nuanced answer options.
   - Creating a list of objects in state, which is mapped to render a `ChoiceItem.jsx` for every choice created.

5. Implement add, remove choice items: Lastly, recognizing the diverse needs of different surveys, you work on making the number of choice items configurable. Instead of placeholder text in new elements, you decide to use the last item's text.
   - Adding and deleteing choices via button click 
   - Potential to add logic consistent with current platform ('enter' on end of option creates new option, etc.)
