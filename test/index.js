var _ = require('lodash'),
  timeframeToSeconds = require('..');

function assertEqual(actual, expected) {
  if (actual !== expected) {
    throw new Error(
      'Expected ' + expected + ' (' + typeof expected + '), but got ' + actual + ' (' + typeof actual + ')!'
    );
  }
}

describe('Correct inputs', function() {
  _.each(
    {
      '1m': 60,
      '3m': 180,
      '1h': 3600,
      '2h': 7200,
      '1d': 86400,
      '1w': 604800
    },
    function(expectedSeconds, input) {
      it(input + ' = ' + expectedSeconds, function() {
        assertEqual(timeframeToSeconds(input), expectedSeconds);
      });
    }
  );
});
