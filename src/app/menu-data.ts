import { Menu } from './menu';

export const MENU: Menu[] = [
  { id: 1, title: 'Define', children: ['TBD'], icon: 'fa fa-arrows-alt', arrowUp: 'fa fa-arrow-up', arrowDown: 'fa fa-arrow-down', isOpen: false},
  { id: 2, title: 'Gather', children: ['Forms', 'Audit Results', 'Legacy Forms', 'Print Blank Form'], icon: 'fa fa-clipboard',arrowUp: 'fa fa-arrow-up', arrowDown: 'fa fa-arrow-down', isOpen: false},
  { id: 3, title: 'See', children: ['TBD'], icon: 'fa fa-calendar',arrowUp: 'fa fa-arrow-up', arrowDown: 'fa fa-arrow-down', isOpen: false},
  { id: 4, title: 'Act', children: ['TBD'], icon: 'fa fa-user',arrowUp: 'fa fa-arrow-up', arrowDown: 'fa fa-arrow-down', isOpen: false},
  { id: 5, title: 'Admin', children: ['TBD'], icon: 'fa fa-cogs',arrowUp: 'fa fa-arrow-up', arrowDown: 'fa fa-arrow-down', isOpen: false}
];
