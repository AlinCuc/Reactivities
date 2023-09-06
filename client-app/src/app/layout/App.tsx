import { Container } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import NavBar from './navBar';
import HomePage from '../../features/home/HomePage';
import { Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import ActivitiesDashboard from '../../features/activities/dashboard/ActivitiesDashboard';
import ActivityForm from '../../features/form/ActivityForm';
import ActivityDetails from '../../features/details/ActivityDetails';
import TestErrors from '../../features/errors/TestError';
import { ToastContainer } from 'react-toastify';
import NotFound from '../../features/errors/NotFound';


function App() {
  
  const location = useLocation();

  // List of paths where NavBar should be rendered
  const navBarPaths = ['/activities', '/activities/:id', '/createActivity', '/manage/:id', '/errors'];

  const shouldRenderNavBar = navBarPaths.some(path => location.pathname.includes(path));

  return (
    <>
      <ToastContainer position='bottom-right' hideProgressBar/>

      {shouldRenderNavBar && <NavBar />}
      <Container style={{ marginTop: '7em' }}>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/activities" element={<ActivitiesDashboard />} />
        <Route path="/activities/:id" element={<ActivityDetails />} />
        <Route path="/createActivity" element={<ActivityForm />} />
        <Route path="/manage/:id" element={<ActivityForm />} />
        <Route path="/errors" element={<TestErrors />} />
        <Route element={<NotFound/>} />
      </Routes>
      </Container>
      
    </>
  );
  }

export default observer(App);