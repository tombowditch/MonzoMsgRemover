# MonzoMsgRemover
A Google Apps Script to remove the "Log in to Monzo" messages once you've used them

# How to Setup

Go to your projects Current Triggers and setup a time-based action. I use one every 6 hours. (tip: having two app scripts triggering every minute will hit Google ratelimits, this app does 100% not need to run every minute, if even every 24 hours, but it is useful to know).
