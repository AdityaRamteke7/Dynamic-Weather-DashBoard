import React from "react";

const UserGroup = ({ userGroup, setUserGroup }) => {
  return (
    <div className="option">
      <label htmlFor="userGroup">Select User Group:</label>
      <select
        id="userGroup"
        value={userGroup}
        onChange={(e) => setUserGroup(e.target.value)}
      >
        <option className="options" value="traveler">
          Traveler
        </option>
        <option value="eventPlanner">Event Planner</option>
        <option value="farmer">Farmer</option>
      </select>
    </div>
  );
};

export default UserGroup;
