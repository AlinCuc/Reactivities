import { Container } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import NavBar from './navBar';
import HomePage from '../../features/home/HomePage';
import { Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import ActivitiesDashboard from '../../features/activities/dashboard/ActivitiesDashboard';
import ActivityForm from '../../features/form/ActivityForm';
import ActivityDetails from '../../features/details/ActivityDetails';



function App() {
  
  return (
<>
            <NavBar />
            <Container style={{ marginTop: '7em' }}>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/activities" element={<ActivitiesDashboard />} />
              <Route path="/activities/:id" element={<ActivityDetails />} />
              <Route path={'/createActivity'} element={<ActivityForm />} />
              <Route path={'/manage/:id'} element={<ActivityForm />} />
          </Routes>
            </Container>
</>
  );
}


export default observer(App);