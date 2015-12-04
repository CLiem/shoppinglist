var nameApp = angular.module('nameApp', []);
nameApp.controller('NameCtrl', function ($scope) {
    
    $scope.newName = '';
    $scope.newAmount = 0;
    $scope.newPrice = 0;

    $scope.items = [                        //setting an array instead of each variables
        {
            "name": "Brot",
            "amount": 2,
            "price": 2.7,
        },
        {
            "name": "Milch",
            "amount": 6,
            "price": 1.2,
        },
        {
            "name": "Wasser",
            "amount": 5,
            "price": 0.6,
        },
        {
            "name": "Äpfel",
            "amount": 4,
            "price": 0.6,
        }
    ]
    $scope.checked = [];

    $scope.addName = function () { //defined an addname fkt. in the scope 
        $scope.items.push({name: $scope.newName, amount: $scope.newAmount, price: $scope.newPrice});//pushes a next element on to the names array and uses $scope.enteredName
        $scope.newName = '';
        $scope.newAmount = 0;
        $scope.newPrice = 0; //that the typed word goes of
    };

    $scope.removeName = function (name) {
        var i = $scope.items.indexOf(name); //this function removes it from the array on the model
        $scope.items.splice(i, 1);
        $scope.checked.push(name);
    };

    $scope.onAmountChange = function (arrayItem, oldAmount) {
        //calucalte difference
        var difference = arrayItem.amount - parseFloat(oldAmount);
        if(differenc > 0)
            return;


        if(arrayItem exists in selectedArray){
            //change amount
        }else{
        // selectedArray.push
        }
}

});