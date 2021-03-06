angular.module('app')

.directive('integer', function() {
	return {
		require: 'ngModel',
		link: function(scope, ele, attr, ctrl) {
			ctrl.$parsers.unshift(function(viewValue) {
				if (viewValue === '' || viewValue === null || typeof viewValue === 'undefined') {
					return null;
				}
				return parseInt(viewValue, 10);
			});
		}
	};
})

.controller('MainCtrl', function($scope) {

	$scope.gridsterOpts = {
		margins: [20, 20],
		outerMargin: false,
		pushing: true,
		floating: true,
		columns: 60,
		draggable: {
			enabled: false
		},
		resizable: {
			enabled: false,
			handles: ['n', 'e', 's', 'w', 'se', 'sw']
		}
	};

	// these map directly to gridsterItem options
	$scope.standardItems = [{
		sizeX: 20,
		sizeY: 10,
		row: 00,
		col: 00
	}, {
		sizeX: 20,
		sizeY: 20,
		row: 00,
		col: 20
	}, {
		sizeX: 20,
		sizeY: 10,
		row: 20,
		col: 10
	}, {
		sizeX: 10,
		sizeY: 10,
		row: 20,
		col: 30
	}, {
		sizeX: 10,
		sizeY: 10,
		row: 20,
		col: 40
	}, {
		sizeX: 10,
		sizeY: 10,
		row: 00,
		col: 40
	}, {
		sizeX: 10,
		sizeY: 10,
		row: 00,
		col: 50
	}, {
		sizeX: 20,
		sizeY: 10,
		row: 10,
		col: 00
	}, {
		sizeX: 10,
		sizeY: 10,
		row: 10,
		col: 40
	}, {
		sizeX: 10,
		sizeY: 20,
		row: 10,
		col: 50
	}, {
		sizeX: 10,
		sizeY: 10,
		row: 20,
		col: 00
	}];

	// these are non-standard, so they require mapping options
	$scope.customItems = [{
		size: {
			x: 2,
			y: 1
		},
		position: [0, 0]
	}, {
		size: {
			x: 2,
			y: 2
		},
		position: [0, 2]
	}, {
		size: {
			x: 1,
			y: 1
		},
		position: [1, 4]
	}, {
		size: {
			x: 1,
			y: 2
		},
		position: [1, 5]
	}, {
		size: {
			x: 1,
			y: 1
		},
		position: [2, 0]
	}, {
		size: {
			x: 2,
			y: 1
		},
		position: [2, 1]
	}, {
		size: {
			x: 1,
			y: 1
		},
		position: [2, 3]
	}, {
		size: {
			x: 1,
			y: 1
		},
		position: [0, 4]
	}, {
		size: {
			x: 1,
			y: 1
		},
		position: [0, 5]
	}, {
		size: {
			x: 2,
			y: 1
		},
		position: [1, 0]
	}, {
		size: {
			x: 1,
			y: 1
		},
		position: [2, 4]
	}];

	$scope.emptyItems = [{
		name: 'Item1'
	}, {
		name: 'Item2'
	}, {
		name: 'Item3'
	}, {
		name: 'Item4'
	}];

	// map the gridsterItem to the custom item structure
	$scope.customItemMap = {
		sizeX: 'item.size.x',
		sizeY: 'item.size.y',
		row: 'item.position[0]',
		col: 'item.position[1]'
	};

});
