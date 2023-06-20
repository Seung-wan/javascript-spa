import { Design } from '../pages/Design.js';
import { Tech } from '../pages/Tech.js';

export const ROUTES = [
  { path: '/', element: Tech() },
  { path: 'design', element: Design() },
  { path: 'tech', element: Tech() },
];
