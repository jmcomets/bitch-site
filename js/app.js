// AngularJS app
(function() {
  var app = angular.module('app', []);

  app.controller('DetailsCtrl', function($scope) {
    // Maximum number of actors
    $scope.maxActors = 3;

    // Current data
    $scope.currentActors = [];
    $scope.currentMethod = '';
    $scope.currentPeriod = '';

    // Add a new (empty) actor
    $scope.addActor = function() {
      $scope.currentActors.push(null);
    };

    // Remove an existing actor by it's index
    $scope.removeActor = function(i) {
      $scope.currentActors.splice(i, 1);
    };

    // TODO load from json
    $scope.possibleActors = [
      { code: "Bitch",           name: "Bitch" },
      { code: "OFFICIAL",        name: "OFFICIAL" },
      { code: "Copiiiiine",      name: "Copiiiiine" },
      { code: "PunkRandomGirl",  name: "Punk Random Girl" },
      { code: "MirrorMan",       name: "Mirror Man" },
      { code: "WhinyEx",         name: "Whiny Ex" },
      { code: "CursedPoet",      name: "Cursed Poet" },
      { code: "BFF",             name: "BFF" },
      { code: "AltBFF",          name: "Alt BFF" },
      { code: "RandomClassmate", name: "Random Classmate" },
      { code: "InTheFridge",     name: "In The Fridge" },
      { code: "AltClassmate",    name: "Alt Classmate" },
      { code: "DickheadEx",      name: "Dickhead Ex" },
      { code: "exsBrother",      name: "ex's Brother" },
      { code: "MotherFriend",    name: "Mother             (or Friend, you don't know)" },
      { code: "AnotherPoet",     name: "Another Poet" },
      { code: "CyberFriend",     name: "Cyber Friend" },
      { code: "Tutoring",        name: "Tutoring" },
      { code: "CybersexRandom",  name: "Cybersex Random" },
      { code: "CreepyCousin",    name: "Creepy Cousin" },
      { code: "Daddy           (issues)",         name: "Daddy  (issues)" },
      { code: "Stalker",         name: "Stalker" },
      { code: "SomeClassmate",   name: "Some Classmate" },
      { code: "Underage",        name: "Underage" },
      { code: "SomeGuy",         name: "Some Guy" },
      { code: "Brice2Nice",      name: "Brice de Nice" }
    ];

    $scope.possiblePeriods = [
      { code: "MonthInYear", text: "Mois dans l'année" },
      { code: "DayInWeek",   text: "Jour dans la semaine" },
      { code: "DayInMonth",  text: "Jour dans le mois" },
      { code: "HourInDay",   text: "Heure dans la journée" },
    ];

    $scope.possibleMethods = [
      { code: "count", text: "Nombre de messages" },
      { code: "length", text: "Longueur des messages" }
    ];
  });

  app.directive('errSrc', function() {
    return {
      link: function(scope, element, attrs) {
        scope.$watch(function() {
          return attrs['ngSrc'];
        }, function (value) {
          if (!value) {
            element.attr('src', attrs.errSrc);
          }
        });

        element.bind('error', function() {
          element.attr('src', attrs.errSrc);
        });
      }
    };
  });
})();

// Panzoom
(function() {
  (function($) {
    $(function() {
      var $panzoom = $('#map').panzoom();
      $panzoom.parent().on('mousewheel.focal', function(e) {
        e.preventDefault();
        var delta = e.delta || e.originalEvent.wheelDelta;
        var zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;
        $panzoom.panzoom('zoom', zoomOut, {
          increment: 0.1,
          animate: false,
          focal: e
        });
      });
    });
  }) (jQuery);
})();
