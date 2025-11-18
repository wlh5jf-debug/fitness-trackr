export default function ActivityList({ activities, token, activityDelete }) {
  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>{activity.name}
        
        {token &&
        (<button onClick={() => activityDelete(activity.id)}>Delete</button>)}
        
        </li>

      ))}
    </ul>
  );
}
