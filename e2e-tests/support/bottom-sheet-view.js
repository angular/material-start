var BottomSheetView = function() {
  this.actionButtons = element.all(by.css('[ng-click="vm.performAction(item)"]'));
};

module.exports = new BottomSheetView();

