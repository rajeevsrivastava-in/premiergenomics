var panelStatus = 'closed';
var myTimer;

window.addEvent('domready', function () {

  //var Tips1 = new Tips($$('.Tips1'));

  //Initialize Moosizer
  moosizer = new mooSizer({ bgElement: 'supersize' });

  //Initialize Footer Panel
  var tabs, contents;

  tabs = $$('.tabs');
  contents = $$('.contents');

  var tabView = new MooTabs(tabs, contents, {autoPlayWait: 5000});
  tabView.stop();


  //Sliding Panel
  /* ****************************************** */


  openFx = new Fx.Tween('footer', {
    transition: 'expo:in:out',
    duration: 900,
    property: 'margin-bottom'
  });

  closeFx = new Fx.Tween('footer', {
    transition: 'expo:in:out',
    duration: 900,
    property: 'margin-bottom'
  });

  $('close-wrapper').addEvent('click', function () {

    if (panelStatus == 'open') {

      closeFx.start(460, 0);
      panelStatus = 'closed';

    }


  });

  $$('.tab-link').addEvent('click', function (e) {


    if (panelStatus == 'closed') {

      openFx.start(0, 460);
      panelStatus = 'open';

    }
    /*else {

     closeFx.start(250, 0);
     panelStatus = 'closed';

     }*/


  });

  /* ****************************************** */

  setTimeout(function () {

    var contentPosition = $('content-wrapper').getPosition();
    $('dna').setPosition({x: contentPosition.x + 148 });


  }, 300);


  //Set Mesh Height
  setTimeout(function () {

    var documentHeight = getDocHeight();
    $('mesh').setStyles({ height: documentHeight });

    var windowHeight = window.getSize().y;
    //var doctorImageHeight = $('secondary-doctor').getSize().y;

    //alert(windowHeight);
    $$('.doctor-image').set('morph', {duration: 950, transition: 'expo:out'});

    //alert(doctorImageHeight);
    if (windowHeight < 750) {

      $$('.doctor-image').morph({ "bottom": "-250px" });


    }

  }, 800);


  //alert(windowHeight);

  /****************************************************************/

  var navigationStatus = "closed";

  $('open-button').addEvent('click', function (e) {

    if (navigationStatus == "closed") {

      slide(25, 15, 250, .8, 0);
      setTimeout(function () {
        navigationStatus = "open";
      }, 1000);

    } else {


      slide(25, 15, 250, .8, -240)
      navigationStatus = "closed";

    }

  });


  var links = $("navigation").getElements('div.parent');


  links.each(function (e) {

    var divHeight = e.getSize().y;

    e.morph({"height": "16px"});

    var firstLink = e.getFirst('* a');

    e.addEvents({

      mouseenter: function () {

        if (navigationStatus == "open") {

          var element = $(this);
          element.set('morph', {duration: 450, transition: 'expo:out'});


          firstLink.morph({ "color": "#FFF" });
          element.morph({ "background-color": "#09adea", "height": divHeight - 22 });

        }//END navigationStatus


      },
      mouseleave: function () {

        if (navigationStatus == "open") {

          var element = $(this);
          element.set('morph', {duration: 450, transition: 'expo:out'});


          firstLink.morph({ "color": "#696969" });
          element.morph({ "background-color": "#FFFFFF", "height": "16px" });


        }//END navigationStatus


      }//END mouseleave

    });//END addEvents


  });//END each

  /****************************************************************/


});

window.addEvent('resize', function () {

  var contentPosition = $('content-wrapper').getPosition();
  $('dna').setPosition({x: contentPosition.x + 148 });

  var documentHeight = getDocHeight();

  $('mesh').setStyles({ height: documentHeight });


  //Reposition Doctor Image
  var windowHeight = window.getSize().y;

  $$('.doctor-image').set('morph', {duration: 950, transition: 'expo:out'});

  if (windowHeight < 750) {

    //$('secondary-doctor').setStyle('bottom', '-250px');
    $$('.doctor-image').morph({ "bottom": "-250px" });

  } else {


    //$('secondary-doctor').setStyle('bottom', '0px');
    $$('.doctor-image').morph({ "bottom": "0px" });
  }


});

function getDocHeight() {
  var D = document;
  return Math.max(
      Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
      Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
      Math.max(D.body.clientHeight, D.documentElement.clientHeight)
  );
}


//**************************************************************************//

function slide(pad_out, pad_in, time, multiplier, margin) {

  // creates the target paths
  var list_elements = $("navigation").getElements('div.parent');
  //var link_elements = $("sliding-navigation").getElements('li.sliding-element a');

  var timer = 0;

  list_elements.each(function (e, index) {

    //e.setStyle('margin-left', '-240px');

    // updates timer
    timer = (timer * multiplier + time);
    e.set('morph', {duration: timer, transition: 'circ:in:out'});

    e.morph({ "margin-left": margin + "px"  });


  });

}

//**************************************************************************//
  
  
  
  
  					
  
