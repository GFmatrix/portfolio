var bar = new ProgressBar.Circle(prg, {
  color: '#000',
  strokeWidth: 8,
  trailWidth:4,
  easing: 'easeInOut',
  duration: 2000,
  text: {
    autoStyleContainer: false
  },
  style:{
    borderRadius: '30px'
  },
  from: { color: '#f16529', width: 4 },
  to: { color: '#f16529', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value+' %');
    }

  }
});
var bar2 = new ProgressBar.Circle(prg2, {
  color: '#000',
  strokeWidth: 8,
  trailWidth:4,
  easing: 'easeInOut',
  duration: 2000,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#1af', width: 4 },
  to: { color: '#1af', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value+' %');
    }

  }
});
var bar3 = new ProgressBar.Circle(prg3, {
  color: '#000',
  strokeWidth: 8,
  trailWidth:4,
  easing: 'easeInOut',
  duration: 2000,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#f7e018', width: 4 },
  to: { color: '#f7e018', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value+' %');
    }

  }
});
var bar4 = new ProgressBar.Circle(prg4, {
  color: '#f00',
  strokeWidth: 8,
  trailWidth:4,
  easing: 'easeInOut',
  duration: 2000,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#0868ac', width: 4 },
  to: { color: '#0868ac', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value+' %');
    }

  }
});
bar.text.style.fontFamily = '"M1", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';
bar.text.style.color = '#fff';
bar.animate(0.9);  // Number from 0.0 to 1.0
bar2.text.style.fontFamily = '"M1", Helvetica, sans-serif';
bar2.text.style.fontSize = '2rem';
bar2.text.style.color = '#fff';
bar2.animate(0.8);  // Number from 0.0 to 1.0
bar3.text.style.fontFamily = '"M1", Helvetica, sans-serif';
bar3.text.style.fontSize = '2rem';
bar3.text.style.color = '#fff';
bar3.animate(0.5);  // Number from 0.0 to 1.0
bar4.text.style.fontFamily = '"M1", Helvetica, sans-serif';
bar4.text.style.fontSize = '2rem';
bar4.text.style.color = '#fff';
bar4.animate(0.7);  // Number from 0.0 to 1.0

var typed = new Typed('#typed', {
  strings: [
    'Welcome to my website^500 <br>My name is'
  ],
  typeSpeed:20,
  backSpeed:20,
  onComplete: function () {
    var typed = new Typed('#name', {
      strings:['Davlatbek'],
      typeSpeed:100,
      onComplete: function () {
        $('.ddd').css({
              'opacity':'1'
        });
        var typed = new Typed('#thh', {
              strings:['.^100.^100.^100', ' '],
              typeSpeed:20,
              showCursor: false,
              loop:true
        });
        var typed = new Typed('#typed2', {
          strings: [
            'Web developer',
            'Proger',
            'Freelancer',
            'Designer',
            'Good friend',
            'And etc^200.^200.^200.'
          ],
          waitUntilVisible: true,
          cursorChar: '<span style="color: white;height:50px">|<\/span>',
          typeSpeed:60,
          backSpeed:40,
          loop:true
        });
      }
    })
  }
});