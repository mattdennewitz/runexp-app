# Run Expectancy UI

This, the `www` directory, holds the UI implementation
and key/value data store for this app.

## Notes

`<ion-toggle>` and `<ion-checkbox>` and their vanilla HTML
equivalencies are buggy as of the time of development,
so a work-around is used to extract the underlying
checkbox's state. This issue can be tracked
[here](https://github.com/driftyco/ionic/issues/1349).

## Data

Stateful run expectancy data is stored in `js/data.js`
as a large hash of situations as keys and the situation's
run expectancy as values.
