var assert = require('assert');
var fs = require('fs');
var ENC = 'utf8';

describe('pugBeautify', function() {

  it('should work when fill_tab=false,omit_div=true,tab_size=2,separator_space: true,omit_empty_lines: true ', function() {
    var option = {
      fill_tab: false,
      omit_div: true,
      tab_size: 2,
      separator_space: true,
      omit_empty_lines: true 
    };
    var before = fs.readFileSync('./tmp/test_false_true_2_sapace_true.jade', ENC);
    var after = fs.readFileSync('./test/after/test_false_true_2_sapace_true.jade', ENC);
    assert.equal(after, before);
  });

});
