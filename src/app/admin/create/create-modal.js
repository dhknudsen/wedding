angular.module( "dhWedding.admin" )
	.controller( "CreateModalCtrl", function CreateModalController( $scope, $uibModalInstance ) {

		var invitationTmpl = {
			profile: {
				name: null,
				email: null,
				pass: null
			},
			people: [],
			role: {
				level: 20,
				title: "user"
			}
		};
		var modal 	= {};
		var newUser = angular.copy( invitationTmpl );
		var profile = newUser.profile;
		var people 	= newUser.people;

		modal.emailpostfix = "@mogd.dk";
		modal.statusOptions = [
			{ value: "accepted", 	label: "Kommer" },
			{ value: "rejected", 	label: "Kommer ikke" },
			{ value: "tentative", label: "Ikke svaret endnu" }
		];

		modal.isEmpty = function( array ) {
			return !( !!array.length );
		};

		modal.addPerson = function() {
			people.push({
				id: people.length,
				name: null,
				desc: null,
				status: "tentative",
				showOnPage: false
			});
		};

		modal.removePerson = function( index ) {
			return people.slice( index, 1 );
		};

	  modal.create = function() {
	  	//add email prefix to username
	  	profile.email = profile.email.trim() + modal.emailpostfix;
	    $uibModalInstance.close( newUser );
	  };

	  modal.cancel = function() {
	    $uibModalInstance.dismiss( "cancel" );
	  };

	  //expose to view
	  $scope.modal = modal;
	  $scope.profile = profile;
	  $scope.people = newUser.people;
	})

;
