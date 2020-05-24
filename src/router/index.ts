import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

import CreateScheduling from '../components/scheduling/CreateScheduling.vue';
import CreatePatient from '../components/patient/CreatePatient.vue';
import CreateClerk from '../components/functionaries/clerk/CreateClerk.vue';
import CreateDoctor from '../components/functionaries/doctor/CreateDoctor.vue';
import CreateSpecialty from '../components/specialties/CreateSpecialty.vue';
import CreateHealthInsurance from '../components/health-insurance/CreateHealthInsurance.vue';


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/create-scheduling',
    name: 'CreateScheduling',
    component: CreateScheduling,
  },
  {
    path: '/register',
    children: [
      {
        path: 'patient',
        name: 'CreatePatient',
        component: CreatePatient,
      },
      {
        path: 'clerk',
        name: 'CreateClerk',
        component: CreateClerk,
      },
      {
        path: 'doctor',
        name: 'CreateDoctor',
        component: CreateDoctor,
      },
      {
        path: 'specialties',
        name: 'CreateSpecialties',
        component: CreateSpecialty,
      },
      {
        path: 'health-insurance',
        name: 'CreateHealthInsurance',
        component: CreateHealthInsurance,
      },
    ]

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
