egghead.io
thinkster.io
kepeli.com/dash
app
	var app = angular.module('gemStore', []);


Directives
	marcação colocada no html para dizer que determinado bloco html pertençe a aplicação angularJs,  apontam para um módulo js

	ng-controler
		comportamento da aplicaçao, funções etc


Modules
	onde ficam as funções js que podem ser usadas na págna

Expressions
	lógica de código para mostrar valores no html, com operadores etc...


*******************APP.JS***********************
(function(){
  var gem = { name: 'Azurite', price: 2.95 };
  var app = angular.module('gemStore', []);
  app.controller('StoreController', function(){
    this.product = gem;
  });
})();

*******************HTML*************************
<!DOCTYPE html>
<html ng-app="gemStore">
  <head>
    <link rel="stylesheet" type="text/css" href="bootstrap.min.css" />
    <script type="text/javascript" src="angular.min.js"></script>
    <script type="text/javascript" src="app.js"></script>
  </head>
  <body ng-controller="StoreController as store">
    <div class="product row">
      <h3>
        {{store.product.name}}
        <em class="pull-right">{{store.product.price}}</em>
      </h3>
    </div>
  </body>
</html>



exemplo de app mais completa

(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });

  app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(newGallery){
      this.current = newGallery || 0;
    };
  });

  var gems = [{
      name: 'Azurite',
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      shine: 8,
      price: 110.50,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: [
        "images/gem-02.gif",
        "images/gem-05.gif",
        "images/gem-09.gif"
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    }, {
      name: 'Bloodstone',
      description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
      shine: 9,
      price: 22.90,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      images: [
        "images/gem-01.gif",
        "images/gem-03.gif",
        "images/gem-04.gif",
      ],
      reviews: [{
        stars: 3,
        body: "I think this gem was just OK, could honestly use more shine, IMO.",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "Any gem with 12 faces is for me!",
        author: "gemsRock@example.org",
        createdOn: 1397490980837
      }]
    }, {
      name: 'Zircon',
      description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
      shine: 70,
      price: 1100,
      rarity: 2,
      color: '#000',
      faces: 6,
      images: [
        "images/gem-06.gif",
        "images/gem-07.gif",
        "images/gem-08.gif"
      ],
      reviews: [{
        stars: 1,
        body: "This gem is WAY too expensive for its rarity value.",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "BBW: High Shine != High Quality.",
        author: "LouisW407@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Don't waste your rubles!",
        author: "nat@example.org",
        createdOn: 1397490980837
      }]
    }];
})();


<!DOCTYPE html>
<html ng-app="gemStore">
  <head>
    <link rel="stylesheet" type="text/css" href="bootstrap.min.css" />
    <script type="text/javascript" src="angular.min.js"></script>
    <script type="text/javascript" src="app.js"></script>
  </head>
  <body ng-controller="StoreController as store">
    <header>
      <h1 class="text-center">Flatlander Crafted Gems</h1>
      <h2 class="text-center">– an Angular store –</h2>
    </header>
    <div class="list-group">
      <div class="list-group-item" ng-repeat="product in store.products">
        <h3>{{product.name}} <em class="pull-right">{{product.price | currency}}</em></h3>
        <div ng-controller="GalleryController as gallery"  ng-show="product.images.length">
          <div class="img-wrap">
            <img ng-src="{{product.images[gallery.current]}}" />
          </div>
          <ul class="img-thumbnails clearfix">
            <li class="small-image pull-left thumbnail" ng-repeat="image in product.images">
              <img ng-src="{{image}}" />
            </li>
          </ul>
        </div>
        <section ng-controller="TabController as tab">
          <ul class="nav nav-pills">
            <li ng-class="{ active:tab.isSet(1) }">
              <a href="" ng-click="tab.setTab(1)">Description</a>
            </li>
            <li ng-class="{ active:tab.isSet(2) }">
              <a href="" ng-click="tab.setTab(2)">Specs</a>
            </li>
            <li ng-class="{ active:tab.isSet(3) }">
              <a href="" ng-click="tab.setTab(3)">Reviews</a>
            </li>
          </ul>
          <div ng-show="tab.isSet(1)">
            <h4>Description</h4>
            <blockquote>{{product.description}}</blockquote>
          </div>
          <div ng-show="tab.isSet(2)">
            <h4>Specs</h4>
            <blockquote>Shine: {{product.shine}}</blockquote>
          </div>
          <div ng-show="tab.isSet(3)">
            <ul>
              <h4>Reviews</h4>
              <li ng-repeat="review in product.reviews">
                <blockquote>
                  <strong>{{review.stars}} Stars</strong>
                  {{review.body}}
                  <cite class="clearfix">—{{review.author}}</cite>
                </blockquote>
              </li>
            </ul>

            <!--  Review Form -->
            <form name="reviewForm">
              <!--  Live Preview -->
              <blockquote>
                <strong> Stars</strong>

                <cite class="clearfix">—</cite>
              </blockquote>

              <!--  Review Form -->
              <h4>Submit a Review</h4>
              <fieldset class="form-group">
                <select class="form-control" ng-options="stars for stars in [5,4,3,2,1]" ng-model="review.stars" title="Stars">
                  <option value="">Rate the Product</option>
                </select>
              </fieldset>
              <fieldset class="form-group">
                <textarea class="form-control" ng-model="review.body" placeholder="Write a short review of the product..." title="Review"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input type="email" ng-model="review.author" class="form-control" placeholder="jimmyDean@example.org" title="Email" />
              </fieldset>
              <fieldset class="form-group">
                <input type="submit" class="btn btn-primary pull-right" value="Submit Review" />
              </fieldset>
            </form>

          </div>
        </section>
      </div>
    </div>
  </body>
</html>

usando serviços embutidos - $http

  app.controller('StoreController', [ '$http',function($http){
    var store = this;
    store.products = [];
    $http.get('/store-products.json').success(function(data){
      store.products = data;
    });
  }]);

ADVANCED --------------------------------

APP STRUCTURE
	Note Wrangler
		index.html
		>css
		>js
		  routes.js //.config ( when, controller, otherwise)
		  >controllers
				notes-create-controller.js
				notes-show-controller.js
				notes-edit-controller.js
				users-show-controller.js

		>templates
			>pages
				>notes
					index.html
				>users
					index.html

ROUTES
  map urls to use templates
  1 using ngView - where the template will take place
    <div ng-view> </div>
  2 using ngRoute library
    <scritp src="/js/vendor/angular-route.js"></script>
  3 importing ngRout module
    angular.module("NoteWrangler",  ['ngRoute']);
  4 defining routes
    angular.module('NoteWrangler').config(['$routeProvider', function($routeProvider) {}]);

  .when(path, route); new definition of $route
  .otherwise(params); //in case of not find a ok route

  angular.module('NoteWrangler', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
      .when('/notes', {
        templateUrl: 'templates/pages/notes/index.html'
      })
      .otherwise();
    }]);

    $http service
      .get retrieve data
      .post create data
      .put update data
      .delete destroy data

      $http({method:'POST', url:'/resource/path.json', data: noteData});
      $http({method: 'POST', url: '/llamas.json', data: newLlamaRecruit});

  Linking controller in route
    1 inline
      routes.js
            .when(...
              templateUrl : 'value',
              controller: function(){} ou controller: myController
            )

    2 linking existing controller
      notes-index-controller.js
            angular.module('NoteWrangler')
              .controller('NotesIndexController', function(){


              });

      routes.js
          .when(...
            templateUrl : 'value',
            controller: 'NotesIndexController',
            controllerAs : 'indexController'
          )



  $routeParams service
    index.html
      <a class='card-notes'
         ng-repeat='note in notes'
         ng-href='#/notes/{{note.id}}'
      </a>

    routes.js
      .when('/notes/:id', {
        templateUrl:'templates/pages/notes/show.html',
        controller : 'NotesShowcontroller',
        controllerAs:'showController'
      });

    notes-show-controller.js
      angular.module('NoteWrangler')
      .controller('NotesShowController', ['$routeParams', '$http', function($routeParams, $http) {
        var controller = this;
        $http({method: 'GET', url:'/notes/' + $routeParams.id})
        .success(function(data){
          controller.note = data;
        });
      }]);

	$scope
		custom directive
		    html
					notes.html
						<div class="note-wrapper">
							<a clas="card-notes" ng-repeat="note in notes">
								<nw-card></nw-card>
							</a>
						</div>
 				sem $scope
						nw-card.html
							<div class="card">
								<h2 class="h3>{{note.header}}"></h2>
							</div>

							nw-card.js
										angular.module("NoteWrangler")
										.directive("nwCard", fuction(){
											return{
												restrict:"E",
												templateUrl:"templates/directives/nw-card.html",
												controller=function(){
													this.header = "Note Title";
												},
												controllerAs:"card"
											}
										});

					com $scope
							nw-card.html
								<div class="card">
									<h2 class="h3>{{header}}"></h2>
								</div>
							angular.module("NoteWrangler")
							.directive("nwCard", fuction(){
								return{
									restrict:"E",
									templateUrl:"templates/directives/nw-card.html",
									controller=function($scope){
										$scope.header = "Note Title";
									}
								}
							});
			flexible directive
				notes.html
					<div class="note-wrapper">
						<a clas="card-notes" ng-repeat="note in notes">
							<nw-card header="note.header" icon="node.icon"></nw-card>
						</a>
					</div>

			 nw-card.js
				angular.module("NoteWrangler")
					.directive("nwCard", fuction(){
						return{
							restrict:"E",
							templateUrl:"templates/directives/nw-card.html",
							scope:{
								header:"=",//@:string, =: two way binding, change in every place, &:
								icon:"="
							}
						}
					});

		Link function
			acess html within the directive
			run AFTER the compilation of directive
			angular.module('NoteWrangler')
			.directive('nwCard', function() {
			  return {...},
			    link: function(scope, element){
			      if (scope.tweeted){
			        element.addClass("tweeted");
			      }
			    }
			  };
			});

			Service for data call
					Service
						Factory

						js/services/note.js

									angular.module('NoteWrangler')
									.factory('Note', ['$http', function NoteFactory($http) {
									  return {
									     all: function(){
									        return $http({method: 'GET', url: '/notes'});
									     }
									  };
									}]);

						js/controllers/notes-index-controller.js

									angular.module('NoteWrangler')
									.controller('NotesIndexController', ['$scope', 'Note', function($scope, Note) {
									  Note.all().success(function(data) {
									    $scope.notes = data;
									  });
									}]);
       Services Recipes
			      value
						factory
						Service





Totorial - Application
nodejs, express, yeoman, bower, npm, grunt
create scaffolding using yeoman, not express

with nodejs, express and yeoman installed
	install angular generator to yaoman
	yo
	answer questions to configure the project
	
	
	create index.html
		set link to bootstratp, bootstrap theme, jquery, angular.js, angular-route.js, angular-resource.js
		put "ng-app="NoteWrangler"" in the html tag
		put "ng-view" in a tag inside body

	set routes
		app.js //create app, confgure dependencies and routes

	create controllers
		folder controllers, each one with the respective business modeling
		


db
    start server
	/api$ mongod --dbpath /data
	
	use service
	/api$ mongo
	use notewrangler
	db.user.insert({name:"Jonasta", bio:"jonasta lindo bio"})

api
	/api$npm start


