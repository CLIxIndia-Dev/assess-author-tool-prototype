import Login from './screens/Login';
import Main from './components/Main';
import Dashboard from './screens/Dashboard';
import ClixDash from './screens/ClixDash';
import ClixNewAssess from './screens/ClixNewAssess';
import ClixEditAssess from './screens/ClixEditAssess';
import ClixEnglish from './screens/ClixEnglish';
import Tasks from './screens/Tasks';
import Task from './screens/Task';
import NotFound from './screens/NotFound';

export default {
  path: '/',
  component: Main,
  childRoutes: [
    { path: 'login', component: Login },
    { path: 'clixdash', component: ClixDash },
    { path: 'clixnewassess', component: ClixNewAssess },
    { path: 'clixeditassess', component: ClixEditAssess },
    { path: 'clixenglish', component: ClixEnglish },
    { path: 'dashboard', component: Dashboard },
    { path: 'tasks/:id', component: Task },
    { path: 'tasks', component: Tasks },
    { path: '*', component: NotFound },
  ],
  indexRoute: { component: ClixDash }
};
