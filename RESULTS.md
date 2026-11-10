# UI lab results

Tool parts that I chose: Part 3 (Robot Framework) and Part 4 (Cypress)

## Part 0

Step 0.1, Chrome version: 157.0.8103.39
Step 0.3, ChromeDriver version: 157.0.8103.38
Step 0.4, locator of Pizza, Please!: button[name="pizza-please"]
Step 0.4, locator of Excluded tools: css=select
Step 0.4, locator of Must be vegetarian: id=default-checkbox
Step 0.4, locator of Custom Pizza Name: input#pizza-name
Step 0.5, pizza name, tool and calories of the run by hand:

- Pizza name: Lab Pizza 20261105-150715
- Recommended tool: Pizza cutter
- Calories per slice: 350

| Step | Actual result                                                                           | Pass or fail |
| ---- | --------------------------------------------------------------------------------------- | ------------ |
| 1    | The heading reads Looking to break out of your pizza routine?                           | Pass         |
| 2    | Max Calories per Slice, Excluded tools, Must be vegetarian and Custom Pizza Name appear | Pass         |
| 3    | The fields show 600, Knife, vegetarian ticked, Lab Pizza 20261105-150715                | Pass         |
| 4    | The answer shows Lab Pizza 20261105-150715, Pizza cutter, and 350 calories per slice    | Pass         |
| 5    | The page says Please log in first.                                                      | Pass         |
| 6    | The page shows Latest pizza recommendations                                             | Pass         |
| 7    | The line shows Lab Pizza 20261105-150715 with Pizza cutter                              | Pass         |

## Part 3: Robot Framework

robot --version: Robot Framework 7.5.1
Step 3.2, failure message for the wrong title: Title should have been 'Web Form' but was 'Web form'.
Step 3.8, run 1, result, elapsed time and pizza name: PASS, 9.4s, Lab Pizza 20261108-214424
Step 3.8, run 2, result, elapsed time and pizza name: PASS, 9.4s, Lab Pizza 20261108-214443

## Part 4: Cypress

node --version, npm-version and npx cypress version: node v24.16.0, npm 11.13.0, cypress 16.2.1
Step 4.3, failure message for the wrong title: Timed out retrying after 10000ms: expected 'Web form' to equal 'Web Form'
Step 4.6, tool and calories in the answer of POST /api/pizza: Pizza cutter, 350
Step 4.7, the line of the admin list that shows your pizza: Lab Pizza 20261110-210943 (tool=Pizza cutter, ingredients_number=5)
Step 4.8, run 1, result, duration and pizza name: PASS, 13s, Lab Pizza 20261110-210700
Step 4.8, run 2, result, duration and pizza name: PASS, 13s, Lab Pizza 20261110-210943
Step 4.9 (optional), browser and result: Did not run

## Part B

1. The tests locate "Max Calories per Slice" through its label because the three number boxes on the QuickPizza page share the exact same id `floating_filled`. Since an id should be unique, using it here cannot distinguish between the three input fields. A developer should change the page to assign a unique id to each field, such as `id="max-calories"`. This change helps a tester because locating an element by a unique id is faster, more reliable, and less likely to break when the page layout or label text changes.

2. This check is a consistency check oracle, which compares two different parts of the system with each other to ensure they agree. It would catch a fault where the customer-facing recommendation page displays one tool, but the backend database or admin list records a completely different tool. For instance, if the customer is recommended "Scissors" but the admin list saves it as "Pizza cutter" for the same pizza name, this consistency check would immediately fail and highlight the defect.

3. To check that the pizza is truly vegetarian, the test could iterate through the list of ingredients displayed on the recommendation page to verify no meat products are included. To automate this, the test would need a predefined list or database of all possible meat and non-meat ingredients from QuickPizza's backend. The test would then cross-reference every ingredient shown on the page against this master list to strictly confirm its vegetarian status.

4. Robot Framework required explicit wait keywords like `Wait Until Element Is Visible` for elements that loaded dynamically. In contrast, Cypress automatically retried finding elements and checking conditions without needing explicit wait commands, making it significantly faster to write QP-01. Robot Framework generated a readable HTML log showing step-by-step text execution and screenshots, whereas Cypress provided an interactive Command Log and automatically recorded a video of the full run, making visual debugging highly intuitive.

5. I would choose Cypress for the automated UI tests in Project 2. The first reason is its automatic waiting mechanism, which eliminates the need to clutter the test code with explicit wait commands and reduces flakiness. The second reason is its interactive Command Log and automatic video recording, which makes tracing failures and capturing the required full-run evidence much easier and more reliable than manual screenshots.

6. (For Part 3) If QuickPizza changed the locator of the calories box, I would only need to update the `${MAX_CALORIES}` variable within the `*** Variables ***` section of the `quickpizza.resource` file. The resource file encapsulates all locators and page-specific details, keeping this change entirely out of the test file (`pizza_scenario.robot`). Because the test file only calls high-level keywords like `Fill In The Pizza Request`, it remains unaffected by underlying UI layout changes.

7. (For Part 4) QP-01 must be a single test in Cypress because Cypress automatically clears cookies before each new test runs. QuickPizza relies on a cookie to keep a browser session tied to a specific backend server. If steps 6 and 7 were split into a second test, the cookie would be cleared, routing the admin login to a different server instance, and the admin list would fail to show the custom pizza created by the customer in steps 1 to 5.
