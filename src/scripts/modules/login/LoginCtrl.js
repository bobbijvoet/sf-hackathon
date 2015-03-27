class LoginCtrl {
  constructor(UserService) {
    this.setAdmin = () => {
      UserService.set(1);
    };

    this.setPlayer = () => {
      UserService.set(2);
      console.log(UserService.role());
    };
  }
}

LoginCtrl.$inject = ['UserService'];
export default LoginCtrl;

