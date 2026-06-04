const portals = {
  patient: '/patient/home',
  doctor: '/doctor/home',
  admin: '/admin/home',
};

export function routeToPortal(role) {
  return portals[role] || '/patient/home';
}
