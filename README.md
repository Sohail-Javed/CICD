## What is the Scenario:
CI workflow: Construct a CI environment that enables you to commit new source or test code to a CI server. On trigger (event or time), the server starts a new build and runs the tests available for the project.

## Problem function
Using a test-driven development, write 3 test cases, followed by the source code associated with the test. Examples of what it could be are : A merger of strings or numbers that merge the items in different order. e.g: for inputs "Emil" and "1234" the output could be E1m2i3l4" in node.js language.

## In the assignment asked for test Cases:
The functions do not all fit together as a single working application but you are expected to write at least 1 low-level integration test that includes 2 or more of the functions in the software. Note that low-level integration tests check the communication between functions such that the input and expected output behaviors can be measured over the series of components.

# Test Case 1: Merging strings and counting vowels
Merges the input strings and checks that the merged result is as expected. Processes the merged result to count the number of vowels.

# Test Case 2: Handling empty input correctly
Tests show the functions behave when both inputs are empty.

# Test Case 3: Handling special characters
Checks the behavior when special characters are used in the string input.

## Setup Project
Create a repository on GitHub & push the code

```sh
## Install Node & nvm
## nvm install 16 nvm use 16 node version 16
## Initialize Node.js Project

npm install
npm init -y

 
## Install the Testing Framework (Jest)
npm install jest --save-dev

## For test unit tests locally run
npm test 

## Run the pipeline as well by pushing code to verify that CI runs according to whether the tests pass or not.

```

