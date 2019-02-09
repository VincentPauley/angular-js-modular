# Angular JS

This is meant to be a quick-start guide for working with Angular JS, useful for maintenacne on legacy apps.

## Scope

Scope == Angular Context

All Angular components have their own scope that is accessible through the view.  There is a global scope automatically created by the framework, when there are multiple scopes any nested scope object has access to its parent scope but NOT the other way around.

## $watch

Anytime data is bound to the UI it receives a $watch entry into the $watch list.  $watch is like an event emitter that can send/receive events when the data model or UI changes.

## Digest Loop

Any time a browser event comes in anutlar runs the digest loop which iterates the entire $watch list and ensures everything is up to date with current changes.  Not super important to understand, but be aware that Angular has control of the thread when the digest loop is running.

## More on Scope
Its important to understand that every DOM element within an Angular application has a specific scope associated with it.  Within an ng-repeat directive each item has its own child scope from the list. The child scopes can access the parent scope through $parent - remember that child can access scope from its parent but NOT the other way around. 