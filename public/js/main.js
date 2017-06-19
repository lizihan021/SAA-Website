$(document).ready(function(){
  
  
  //------------------------------------//
  //Wow Animation//
  //------------------------------------// 
  wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       true        // trigger animations on mobile devices (true is default)
        }
      );
      wow.init();

  //-----------------------------------//
  //Google Analytics//
  //-----------------------------------//
  (function(w,d,s,g,js,fs){
    g=w.gapi||(w.gapi={});g.analytics={q:[],ready:function(f){this.q.push(f);}};
    js=d.createElement(s);fs=d.getElementsByTagName(s)[0];
    js.src='https://apis.google.com/js/platform.js';
    fs.parentNode.insertBefore(js,fs);js.onload=function(){g.load('analytics');};
  }(window,document,'script'));

  gapi.analytics.ready(function() {

    /**
     * Authorize the user immediately if the user has already granted access.
     * If no access has been created, render an authorize button inside the
     * element with the ID "embed-api-auth-container".
     */
    gapi.analytics.auth.authorize({
      container: 'embed-api-auth-container',
      clientid: '1006812806761-e1pku9qn0i8pqiohcuhv7cur4r22hp5f.apps.googleusercontent.com'
    });


    /**
     * Create a ViewSelector for the first view to be rendered inside of an
     * element with the id "view-selector-1-container".
     */
    var viewSelector1 = new gapi.analytics.ViewSelector({
      container: 'view-selector-1-container'
    });

    /**
     * Create a ViewSelector for the second view to be rendered inside of an
     * element with the id "view-selector-2-container".
     */
    var viewSelector2 = new gapi.analytics.ViewSelector({
      container: 'view-selector-2-container'
    });

    // Render both view selectors to the page.
    viewSelector1.execute();
    viewSelector2.execute();


    /**
     * Create the first DataChart for top countries over the past 30 days.
     * It will be rendered inside an element with the id "chart-1-container".
     */
    var dataChart1 = new gapi.analytics.googleCharts.DataChart({
      query: {
        metrics: 'ga:sessions',
        dimensions: 'ga:country',
        'start-date': '30daysAgo',
        'end-date': 'yesterday',
        'max-results': 6,
        sort: '-ga:sessions'
      },
      chart: {
        container: 'chart-1-container',
        type: 'PIE',
        options: {
          width: '100%',
          pieHole: 4/9
        }
      }
    });


    /**
     * Create the second DataChart for top countries over the past 30 days.
     * It will be rendered inside an element with the id "chart-2-container".
     */
    var dataChart2 = new gapi.analytics.googleCharts.DataChart({
      query: {
        metrics: 'ga:sessions',
        dimensions: 'ga:country',
        'start-date': '30daysAgo',
        'end-date': 'yesterday',
        'max-results': 6,
        sort: '-ga:sessions'
      },
      chart: {
        container: 'chart-2-container',
        type: 'PIE',
        options: {
          width: '100%',
          pieHole: 4/9
        }
      }
    });

    /**
     * Update the first dataChart when the first view selecter is changed.
     */
    viewSelector1.on('change', function(ids) {
      dataChart1.set({query: {ids: ids}}).execute();
    });

    /**
     * Update the second dataChart when the second view selecter is changed.
     */
    viewSelector2.on('change', function(ids) {
      dataChart2.set({query: {ids: ids}}).execute();
    });

  });


});
