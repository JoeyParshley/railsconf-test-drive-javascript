var app = angular.module("app", []);
app.controller("gameCtrl", function($scope) {
    $scope.status = "You may fire when ready.";
    var ship = ["a1","a2","a3","a4"];
    var hits = [];

    $scope.fire = function (shot) {
        $scope.status = hit_or_miss(shot);
    }

    $scope.cell_status = function(coordinates){
        return coordinates;
    }

    hit_or_miss = function (coords) {
        var attempt = ship.indexOf(coords);
        var target = document.getElementById(coords);

        if (attempt > -1) {
            hits.push(coords);
            target.classList.remove("miss");
            target.className += " hit";
            if (hits.toString() == ship.toString()) {
                return "Sunk!"
            }
            return "HIT";
        }else{
            target.classList.remove("hit");
            target.className += " miss";
            return "MISS"
        }

    }

    $scope.columnHeaders = "1234567".split('')
    $scope.rowHeaders = "abcdefg".split('')
});