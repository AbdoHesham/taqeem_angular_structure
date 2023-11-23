import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const userJson = localStorage.getItem('Access_user');
  const user = userJson ? JSON.parse(userJson) : {};

  if (user?.accessToken) {
    return true;
  } else {
    // Assuming 'auth/login' is your login route
    // You may need to adjust the route based on your application structure
    window.alert('Unauthorized access. Redirecting to login page.');
        // Inject the Router service in your guard
        const router: Router = (route as any).router;

        // Navigate to the login page
        router.navigate(['auth/login']);
    return false;
  }
};
