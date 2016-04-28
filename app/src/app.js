// Load libraries
import angular from 'angular'
import Users from 'src/users/Users'

export default angular
  .module( "UsersApp", [ 'ngMaterial', Users.name ] )
  .config(($mdIconProvider, $mdThemingProvider) => {
    const URL_AVATAR_ICONS = 'assets/svg/avatars.svg';
    const URL_ICON_MENU     = 'assets/svg/menu.svg';
    const URL_ICON_SHARE    = 'assets/svg/share.svg';

    $mdIconProvider
      .defaultIconSet( URL_AVATAR_ICONS, 128 )
      .icon('menu' ,URL_ICON_MENU, 24)
      .icon('share',URL_ICON_SHARE, 24);

    // $mdThemingProvider
    //   .theme('default')
    //   .primaryPalette('brown');

  });







