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

node --version, npm-version and npx cypress version: node v26.13.0, npm 11.20.0, cypress 16.2.1
Step 4.3, failure message for the wrong title: Timed out retrying after 10000ms: expected 'Web form' to equal 'Web Form'
Step 4.6, tool and calories in the answer of POST /api/pizza:
Step 4.7, the line of the admin list that shows your pizza:
Step 4.8, run 1, result, duration and pizza name:
Step 4.8, run 2, result, duration and pizza name:

## Part B

1.
2.
3.
4.
5.
6. (Part 3)
7. (Part 4)
