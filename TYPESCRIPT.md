# Typescript-Specific Notes

Below are some notes that are specific to the Typescript version of this tutorial. These should be
merged into the official README before being released!

## Installation

Install the Typescript Compiler, Typescript Declaration Files manager, and then install this
application's dependencies:

    npm install -g tsc typings
    npm install

Additionally, you will want to install the Typings Definition Files that we will be using:

    typings install dt~angular dt~angular-animate dt~angular-material dt~angular-route --global --save
    
Now, open a terminal and run your Typescript compiler with the `-w` flag to watch for changes, and
open a separate terminal to run your live-server to actually serve the page:

    tsc -w
    live-server --open=app