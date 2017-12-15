import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    const opts = {
      lines: 13, // The number of lines to draw
      length: 38, // The length of each line
      width: 17, // The line thickness
      radius: 45, // The radius of the inner circle
      scale: 0.33, // Scales overall size of the spinner
      corners: 1, // Corner roundness (0..1)
      color: '#343a40', // CSS color or array of colors
      fadeColor: 'transparent', // CSS color or array of colors
      opacity: 0.25, // Opacity of the lines
      rotate: 0, // The rotation offset
      direction: 1, // 1: clockwise, -1: counterclockwise
      speed: 1, // Rounds per second
      trail: 60, // Afterglow percentage
      fps: 60, // Frames per second when using setTimeout() as a fallback in IE 9
      zIndex: 2e9, // The z-index (defaults to 2000000000)
      className: 'spinner', // The CSS class to assign to the spinner
      top: '50%', // Top position relative to parent
      left: '50%', // Left position relative to parent
      shadow: '', // Box-shadow for the lines
      position: 'absolute' // Element positioning
    };
    
    const target = document.getElementById('loading');
    new window.Spinner(opts).spin(target);
  }
});
