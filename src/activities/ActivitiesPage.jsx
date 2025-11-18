import { useState, useEffect } from "react";
import { getActivities, deleteActivity } from "../api/activities";
import { useAuth } from "../auth/AuthContext";
import ActivityList from "./ActivityList";
import ActivityForm from "./ActivityForm";

export default function ActivitiesPage() {
  const { token } = useAuth();
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState("");

  const syncActivities = async () => {
    const data = await getActivities();
    setActivities(data);
  };

  useEffect(() => {
    syncActivities();
  }, []);

  const activityDelete = async (activityId) => {
    try {await deleteActivity(token, activityId);
      syncActivities();
    } catch (err) {
      setError(err.message);
  }

  return (
    <>
      <h1>Activities</h1>
      <ActivityList activities={activities}
      token={token}
      activityDelete={activityDelete} />
      <ActivityForm syncActivities={syncActivities} />
    </>
  );
}}
