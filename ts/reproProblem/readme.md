
# Table of Contents

1.  [Q) Have problems running tests in folder outside playwright directory](#orgb0305fb)
    1.  [Transcripts](#orge26534a)
        1.  [Unable to run outside folder ..\pw4tests folder ( using backslashed relative paths )](#org632a006)
        2.  [Unable to run outside folder ../pw4tests folder ( using forward slashed relative paths )](#org533bbdc)
        3.  [Able to run local 'test2' directory using &#x2013;config {file} and &#x2013;config {dir}](#org926d160)
        4.  [Able to run local 'test' directory by default](#org29e6818)


<a id="orgb0305fb"></a>

# Q) Have problems running tests in folder outside playwright directory

In the description of the cli, <https://playwright.dev/docs/test-cli>, I can specify a test directory independently
with -c {dir} or &#x2013;config {dir}: Directory with the tests to run without configuration file.

In this reproProblem folder, I have the Playwright setup in "pw4" and the tests in "pw4tests/tests".
There are local test directories 'pw4/test', 'pw4/test2', and one outside the repo folder '../pw4tests/tests'

The tree command shows this in a better way : 

c:\cprojects\github\khtan-private\LearningPlaywright\ts\reproProblem>tree /f .

    Folder PATH listing
    Volume serial number is 00000001 22B2:40C1
    C:\CPROJECTS\GITHUB\KHTAN-PRIVATE\LEARNINGPLAYWRIGHT\TS\REPROPROBLEM
    │   readme.org
    │
    ├───pw4
    │   │   package-lock.json
    │   │   package.json
    │   │   playwright.config.ts
    │   │
    │   ├───tests
    │   │       example.spec.ts
    │   │
    │   └───tests2
    │           example2.spec.ts
    │
    └───pw4tests
        └───tests
                example.spec.ts

In all cases, I use both &#x2013;config {file} to point to the configuration file and &#x2013;config {dir} to point to the
test directory.


<a id="orge26534a"></a>

## Transcripts


<a id="org632a006"></a>

### Unable to run outside folder ..\pw4tests folder ( using backslashed relative paths )

    c:\cprojects\github\khtan-private\LearningPlaywright\ts\pw4>npx playwright test --browser chromium --config playwright.config.ts --config ..\pw4tests
    
    Running 0 test using 0 worker
    
    
    Error: Cannot find module '@playwright/test'
    Require stack:
    - c:\cprojects\github\khtan-private\LearningPlaywright\ts\pw4tests\tests\example.spec.ts
    - c:\cprojects\github\khtan-private\LearningPlaywright\ts\pw4\node_modules\@playwright\test\lib\loader.js
    - c:\cprojects\github\khtan-private\LearningPlaywright\ts\pw4\node_modules\@playwright\test\lib\runner.js
    - c:\cprojects\github\khtan-private\LearningPlaywright\ts\pw4\node_modules\@playwright\test\lib\cli.js
    - c:\cprojects\github\khtan-private\LearningPlaywright\ts\pw4\node_modules\playwright-core\lib\cli\cli.js
    - c:\cprojects\github\khtan-private\LearningPlaywright\ts\pw4\node_modules\playwright-core\cli.js
    - c:\cprojects\github\khtan-private\LearningPlaywright\ts\pw4\node_modules\@playwright\test\cli.js
    
        at Object.<anonymous> (c:\cprojects\github\khtan-private\LearningPlaywright\ts\pw4tests\tests\example.spec.ts:1:1)
    
    =================
     no tests found.
    =================


<a id="org533bbdc"></a>

### Unable to run outside folder ../pw4tests folder ( using forward slashed relative paths )

    c:\cprojects\github\khtan-private\LearningPlaywright\ts\pw4>npx playwright test --browser chromium --config playwright.config.ts --config ../pw4tests
    
    Running 0 test using 0 worker
    
    
    Error: Cannot find module '@playwright/test'
    Require stack:
    - c:\cprojects\github\khtan-private\LearningPlaywright\ts\pw4tests\tests\example.spec.ts
    - c:\cprojects\github\khtan-private\LearningPlaywright\ts\pw4\node_modules\@playwright\test\lib\loader.js
    - c:\cprojects\github\khtan-private\LearningPlaywright\ts\pw4\node_modules\@playwright\test\lib\runner.js
    - c:\cprojects\github\khtan-private\LearningPlaywright\ts\pw4\node_modules\@playwright\test\lib\cli.js
    - c:\cprojects\github\khtan-private\LearningPlaywright\ts\pw4\node_modules\playwright-core\lib\cli\cli.js
    - c:\cprojects\github\khtan-private\LearningPlaywright\ts\pw4\node_modules\playwright-core\cli.js
    - c:\cprojects\github\khtan-private\LearningPlaywright\ts\pw4\node_modules\@playwright\test\cli.js
    
        at Object.<anonymous> (c:\cprojects\github\khtan-private\LearningPlaywright\ts\pw4tests\tests\example.spec.ts:1:1)
    
    =================
     no tests found.
    =================
    
    
    c:\cprojects\github\khtan-private\LearningPlaywright\ts\pw4>npx playwright test --browser chromium --config playwright.config.ts --config ../pw4tests/tests
    
    Running 0 test using 0 worker
    
    
    Error: Cannot find module '@playwright/test'
    Require stack:
    - c:\cprojects\github\khtan-private\LearningPlaywright\ts\pw4tests\tests\example.spec.ts
    - c:\cprojects\github\khtan-private\LearningPlaywright\ts\pw4\node_modules\@playwright\test\lib\loader.js
    - c:\cprojects\github\khtan-private\LearningPlaywright\ts\pw4\node_modules\@playwright\test\lib\runner.js
    - c:\cprojects\github\khtan-private\LearningPlaywright\ts\pw4\node_modules\@playwright\test\lib\cli.js
    - c:\cprojects\github\khtan-private\LearningPlaywright\ts\pw4\node_modules\playwright-core\lib\cli\cli.js
    - c:\cprojects\github\khtan-private\LearningPlaywright\ts\pw4\node_modules\playwright-core\cli.js
    - c:\cprojects\github\khtan-private\LearningPlaywright\ts\pw4\node_modules\@playwright\test\cli.js
    
        at Object.<anonymous> (c:\cprojects\github\khtan-private\LearningPlaywright\ts\pw4tests\tests\example.spec.ts:1:1)
    
    =================
     no tests found.
    =================


<a id="org926d160"></a>

### Able to run local 'test2' directory using &#x2013;config {file} and &#x2013;config {dir}

    c:\cprojects\github\khtan-private\LearningPlaywright\ts\pw4>npx playwright test --browser chromium --config playwright.config.ts --config tests2
    
    Running 1 test using 1 worker
    
      ✓  [chromium] › example2.spec.ts:14:3 › New2 › should clear text input field when an item is added (1s)
    
    
      1 passed (2s)


<a id="org29e6818"></a>

### Able to run local 'test' directory by default

    c:\cprojects\github\khtan-private\LearningPlaywright\ts\pw4>npx playwright test --browser chromium --config playwright.config.ts
    
    Running 1 test using 1 worker
    
      ✓  [chromium] › example.spec.ts:14:3 › New1 › should allow me to add todo items (995ms)
    
    
      1 passed (2s)

