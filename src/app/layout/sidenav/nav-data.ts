export enum MenuNavFunction {
  AddProvider,
}
export default class CustomMenuItem {
  routerLink?: string;
  label: string;
  Iconsrc?: string;
  icon?: string;
  selected?: boolean;
  active?: boolean;
  Permission?: string;
  items?: CustomMenuItem[];
  link?: string;
}
export const navbarData: CustomMenuItem[] = [

  {
    label: 'Providers Management',
    Iconsrc: '../../../assets/images/sidenavIcons/stethoscopei.svg',
    active: false,
    selected: false,
    Permission:'Providers ||  Doctors || ServiceFees || DoctorSchedules',

    items: [
      {
        label: 'Providers Management',
        routerLink: '/Provider',
        Permission: 'Providers',
      },
      {
        label: 'Doctor Management',
        routerLink: '/Doctors',
        Permission: 'Doctors',
      },
      {
        label: 'Services & Fees Management',
        routerLink: '/ServiceFees',
        Permission: 'ServiceFees',
      },
      {
        label: 'Schedule Management',
        routerLink: '/Schedule',
        Permission: 'DoctorSchedules',
      },
    ],
  },

  {
    label: 'Appointment Management',
    active: false,
    selected: false,
    Iconsrc: '../../../assets/images/sidenavIcons/handshake.svg',
    Permission: 'DoctorAppointments',

    items: [
      {
        label: 'Appointment Management',
        routerLink: 'appointment',
        Permission: 'DoctorAppointments',
      },
    ],
  },

  {
    label: 'Pateints Management',
    Iconsrc: '../../../assets/images/icons/output-onlinepngtools.png',
    active: false,
    selected: false,
    Permission: 'Patients',

    items: [
      {
        label: 'Pateints Management',
        routerLink: '/patient',
        Iconsrc: '',
        Permission: 'Patients',
      },
    ],
  },

  {
    label: 'Survey Management',
    Iconsrc: '../../../assets/images/icons/survey2.png',
    active: false,
    selected: false,
    Permission: 'Surveys',

    items: [
      {
        label: 'Survey Results Managment',
        routerLink: '/SurveySetup',
        Permission: 'Surveys',
      },
    ],
  },
  {
    label: 'Notification Management',
    icon: 'fa fa-bell',
    Iconsrc: '',
    active: false,
    selected: false,
    Permission: 'CommonLooKups ||  Notifications',

    items: [
      {
        label: 'Marketing Notification',
        routerLink: '/notification/marketing',
        Permission: 'Notifications',
      },
      {
        label: 'System Notification',
        routerLink: '/notification/system',
        Permission: 'Notifications',
      },
      {
        label: 'Notification Template Setup',
        routerLink: '/SetupScreen/notification-template',
        Iconsrc: '',
        Permission: 'CommonLooKups',
      },
    ],
  },

  {
    label: 'Promo Code Management',
    icon: 'fa fa-gift',
    Iconsrc: '',
    active: false,
    selected: false,
    Permission: 'PromoCodes',
    items: [
      {
        label: 'Promo Code Management',
        routerLink: '/promotion',
        Permission: 'PromoCodes',
      },
    ],
  },
  {
    label: 'Article Management',
    Iconsrc: '../../../assets/images/sidenavIcons/article2.png',
    active: false,
    selected: false,
    Permission: 'Articles ||  CommonLooKups',

    items: [
      {
        label: 'Article Management',
        routerLink: '/Article',
        Permission: 'Articles',
      },

      {
        label: 'Author Management',
        routerLink: '/Article/Author',
        Permission: 'CommonLooKups',
      },

      {
        label: 'Category Management',
        routerLink: '/Article/Category',
        Permission: 'CommonLooKups',
      },
    ],
  },
  {
    label: 'Setup',
    icon: 'fa fa-gears',
    active: false,
    Iconsrc: '',
    selected: false,
    Permission: 'CommonLooKups',

    items: [
      {
        label: 'Country Setup',
        routerLink: '/SetupScreen/CounrtrySetup',
        Iconsrc: '',
        Permission: 'CommonLooKups',
      },
      {
        label: 'City Setup',
        routerLink: '/SetupScreen/CitySetup',
        Iconsrc: '',
        Permission: 'CommonLooKups',
      },
      {
        label: 'Area Setup',
        routerLink: '/SetupScreen/AreaSetup',
        Iconsrc: '',
        Permission: 'CommonLooKups',
      },

      {
        label: 'Insurance Setup',
        routerLink: '/SetupScreen/InsuranceSetup',
        Iconsrc: '',
        Permission: 'CommonLooKups',
      },

      {
        label: 'Service Setup',
        routerLink: '/SetupScreen/ServiceSetup',
        Iconsrc: '',
        Permission: 'CommonLooKups',
      },

      {
        label: 'Specialty Setup',
        routerLink: '/SetupScreen/SpecialtySetup',
        Iconsrc: '',
        Permission: 'CommonLooKups',
      },

      {
        label: 'Subspecialty Setup',
        routerLink: '/SetupScreen/SubspecialtySetup',
        Iconsrc: '',
        Permission: 'CommonLooKups',
      },
    ],
  },
  {
    label: 'Identity Management',
    Iconsrc: '../../../assets/images/sidenavIcons/user.png',
    active: false,
    selected: false,
    Permission: 'AbpIdentity.Roles ||  AbpIdentity.Users',

    items: [
      {
        label: 'User Management',
        routerLink: '/identity/users',
        Permission: 'AbpIdentity.Users',
      },
      {
        label: 'Role Management',
        routerLink: '/identity/roles',
        Permission: 'AbpIdentity.Roles',
      },
      {
        label: 'Tanent Management',
        routerLink: '/tenant-management/tenants',
         Permission: 'AbpTenantManagement.Tenants',
      },
    ],
  },
  // will  work only on publish dev or staging mode
  {
    label: 'Analytics Management',
    icon: 'pi pi-chart-line',
    Iconsrc: '',
    active: false,
    selected: false,
    Permission: 'HangFire',
    items: [
      {
        label: 'HangFire Management',
        routerLink: '.',
        link:'https://unifieddotcare.httpapi.host.staging.ahbsdev.com/hangfire',
        Permission: 'HangFire',
      },
    ],
  },
];
