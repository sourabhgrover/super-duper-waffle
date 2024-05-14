import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSchemas } from "./rtk/schemas";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSchemas())
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
