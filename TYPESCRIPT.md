# Typescript-Specific Notes

Below are some notes that are specific to the Typescript version of this tutorial. These should be
merged into the official README before being released!

## Installation

Install the Typescript Compiler, Typescript Declaration Files manager, and then install this
application's dependencies:

    npm install -g tsc typings
    npm install

Additionally, you will want to install the Typings Definition Files that we will be using:

    typings install dt~jquery dt~angular dt~angular-animate dt~angular-material --global --save
    
Now, open a terminal and run your Typescript compiler with the `-w` flag to watch for changes, and
open a separate terminal to run your live-server to actually serve the page:

    tsc -w
    live-server --open=app
    

## Notes

* UsersList component inlines the HTML template (to show alternative way for simple components)
* The types provided by the typings tool are outdated and use references to interfaces begining with
  'I' which is not in-line with ng2
