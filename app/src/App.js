// Load libraries
import angular from 'angular'
import Users from 'src/users/Users'

export default angular
  .module( "UsersApp", [ 'ngMaterial', Users.name ] )
  .config(($mdIconProvider) => {
      const URL_AVATAR_ICONS = 'assets/svg/avatars.svg';

      $mdIconProvider
        .defaultIconSet( URL_AVATAR_ICONS, 128 );

    });







