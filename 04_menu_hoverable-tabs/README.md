# Tabs

Tabs that display different content when hovered.

<img src="menu_hoverable-tabs.png" width=80%>

<br>

## Functionality

- **Inactive state**:

  - Tab buttons have a light purple background color
  - The first tab's content is displayed by default

- **Active state (Hover state)**:

  - Tab button background changes to dark purple when hovered
  - The corresponding tab's content is displayed
  - When a new tab is hovered, the previously active tab closes and the new tab's content opens

<br>

## How to Create Hoverable Tabs

1. Create HTML elements for the tab button and their respective content.
2. Hide all tab contents with `display: none`
3. Add mouse over interactivity to tab buttons

   - Attach event listeners to all tab buttons
   - On mouse over:
     1. Remove active classes from the previously selected tab to close it
     2. Add active classes to newly selected tab and its content

4. Define CSS rules for the active state

   - Specify background color changes for the active tab buttons
   - Display the corresponding tab content

5. Display the first tab content in default state by adding an active class in HTML elements
