import { Helmet } from 'react-helmet-async';
import DashboardView from '../components/Dashboard';


// ----------------------------------------------------------------------

export default function DashboardPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard | DataBricks </title>
      </Helmet>
    <DashboardView />
    </>
  );
}
