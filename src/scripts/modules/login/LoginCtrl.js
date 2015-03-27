class LoginCtrl {
  constructor($state, UserService) {
    this.setAdmin = () => {
      UserService.set(1);
      $state.go('tab.map', {}, {reload:true, cache:false});
    };

    this.setPlayer = () => {
      UserService.set(2);
      $state.go('tab.map', {}, {reload:true, cache:false});
    };
  }
}

LoginCtrl.$inject = ['$state', 'UserService'];
export default LoginCtrl;

