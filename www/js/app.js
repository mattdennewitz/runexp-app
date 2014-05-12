angular.module('re', ['ionic'])
.controller('ReCtrl', function($scope) {
    /* model representing game state */
    $scope.game_state = {
        count: {balls: 0, strikes: 0},
        bases: {
            _1b: false,
            _2b: false,
            _3b: false
        },
        game: {
            outs: 0,
            inning: 1
        }
    };

    /* the run expectancy value */
    $scope.runexp = {value: 0.529};

    /* fired each time a widget is updated */
    $scope.updateRunExp = function() {
        var bases_key = '';

        for(var i=1; i<=3; i++) {
            var checked = document.getElementById('b' + i).checked;
            bases_key += (checked) ? '1': '0';
        }

        var base_state = window.base_states[bases_key];

        var count = $scope.game_state.count.balls + '' + $scope.game_state.count.strikes;

        var key = [$scope.game_state.game.inning,
                   $scope.game_state.game.outs,
                   base_state,
                   count].join(':');

        $scope.runexp.value = window.runexp_data[key];
    }
});
