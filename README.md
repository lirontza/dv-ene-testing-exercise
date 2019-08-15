# testing-exercise

In this exercise, you'll go into new code, understand it, test it and identify points for improving quality and performance. If you find it challenging, you may go ahead and improve it as a bonus. 

## Setup 
Here are the steps required to set up the exercise environment:
1. Clone the repository to your local computer 
2. Install node version 12.8.0.  
3. Run _npm install_ from the root directory of the project 
4. Run _npm test_ from the root directory of the project. You should see one test reported passed. It's an empty test, it does nothing, you'll soon fill in your code here. 

## Background 
The exercise is about measuring the time a user is viewing a video ad. The calculation of the viewed time is done in the `VideoAdViewCalculator` class. 
  

## The source code 
The source code is separate to the following files: 
1. `enums.js` - definition of enums. 
2. `data-store.js` - a store of data, simulates use of a database. 
3. `data-layer.js` - a layer for manipulation of data in the data store. 
4. `video-ad-view-calculator` - here is where the business logic resides. This is the class that calculates the viewed time. 

`VideoAdViewCalculator` tracks a session of an ad, collects samples of measurements and reports the summary of the session to the data store. 
Each sample of measurement includes: 
1. `percentageInView` - The percentage (0-100) of the pixels of the element that resides in the viewed part of the user's screen. Consider the case when you scroll down the page and you see the video partially. This property represents the percentage of the pixels within the viewed part. 
2. `playClicked` - an indication whether the play (either pause or resume) was clicked during this sample. 

The summary reported by the calculator includes: 
1. `VideoPlayed` - a boolean indication whether the video was played during the session. Assume that at the beginning of the session the video is not playing (pending to start). Therefore, you need to have at least one sample with `playClicked` for this indication to be `true`. 
2. `maxViewedSamples` - the maximal number of consecutive samples during which the video was both playing and having more than 50% of the pixels in view. 

The interface of the `VideoAdViewCalculator` includes two functions `addSample` and `reportEndSession`. The rest (prefixd with _) are private helper functions. 

## What you need to do 
Follow these steps to complete the exercise: 
1. Test the correctness of the implementation in `VideoAdViewCalculator`. You can do that by adding tests to the `video-ad-view-calculator-spec.js` file using `mocha` and `chai` frameworks. 
2. Summarize your findings in step 1. If you identify issues in the implementation, describe them. 
3. Describe the complexity of the execution time for the `reportEndSession` function. Use the big O notation to describe it. 
4. Bonus part! If you want to take an extra step, suggest your implementation for `VideoAdViewCalculator` in a way that it addresses your findings in steps 2 and 3. 
 
## How to submit 
When you're done, submit the written code and explanation to liron.tzabari@doubleverify.com. 

