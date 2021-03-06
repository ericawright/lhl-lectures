# Testing Rails applications using RSpec

We took a quick tour on using RSpec with Rails, taking tips from [this excellent article](https://www.sitepoint.com/learn-the-first-best-practices-for-rails-and-rspec/).

The app (more of a skeleton, really) we've worked on can be found inside [`/code`](code). Be sure to check the [`/code/spec/models`](code/spec/models) folder in particular.

## Test steps
In general a test case will have the following steps:

* Set up: Create an environment that allows you to test a condition in the program
* Perform checks: Check that the results came up as expected
* Clean up: Each test case must clean up all the data created in the setup phase. This is so that test cases don't interfere with each other.

## What to test
Writing good unit tests is an art. You want to make sure that your tests cover most of your public methods - especially the ones that have tricky logic.

Tips for testing:

* Test edge cases. pick values that are right at the boundary.
* Test are supposed to be easy to read. be careful how you DRY up your code. you need to strike a good balance between readability and DRY.
* Don't use random data in your setup stage. tests need to be reproducible, meaning if you run the test twice without changing your application code, you should get the same result.
* Test are supposed to be easy to maintain, meaning easy to update when your requirements change.
* don't over test. when unit testing you want to test that a specific method works. no need to check that another method used by your method under test works.

## RSpec

RSpec is a popular test framework in Ruby. MiniTest is the second most popular framework and is included in the Ruby standard library (i.e. comes with ruby. no need to install a gem.)

The reason RSpec is so popular is that the data validators are quite expressive. Here is an example.

```ruby
# With MiniTest

student = Student.new
assert student.student_number != nil

# With RSpec

student = Student.new
expect(student.student_number).not_to eql nil
```

We also talked about how to use:
* `describe` blocks to group test cases.
  * `context` does the exact same thing.
* `before` / `before :each` blocks to write code that needs to be used to create the necessary test conditions.
