class LoginCtrl {
  constructor($state, UserService) {
    this.setAdmin = () => {
      UserService.set(1);
      $state.go('tab.map');
    };

    this.setPlayer = () => {
      UserService.set(2);
      $state.go('tab.map');
    };
  }
}

LoginCtrl.$inject = ['$state', 'UserService'];
export default LoginCtrl;

