import React, { useState } from "react";

const UserForm = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ firstName: "", lastName: "" });

  const submitHandler = () => {
    const clonedUsers = [...users];
    clonedUsers.push(user);
    setUsers(clonedUsers);
    setUser({ firstName: "", lastName: "" });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "45%",
          justifyContent: "space-between",
          marginBottom: "2rem",
        }}
      >
        <label>First Name :</label>
        <input
          type="text"
          placeholder="Enter your first name"
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
        <label>Last Name:</label>
        <input
          type="text"
          placeholder="Enter your last name"
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
      </div>
      <button
        type="submit"
        onClick={() => submitHandler()}
        style={{ marginBottom: "1rem" }}
      >
        Submit
      </button>

      <table style={{ border: "1px solid black" }}>
        <tr>
          <th style={{ border: "1px solid black" }}>First Name</th>
          <th style={{ border: "1px solid black" }}>Last Name</th>
        </tr>
        {users.length > 0 &&
          users.map((singleUser) => (
            <tr>
              <td style={{ border: "1px solid black" }}>
                {singleUser.firstName}
              </td>
              <td style={{ border: "1px solid black" }}>
                {singleUser.lastName}
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default UserForm;
