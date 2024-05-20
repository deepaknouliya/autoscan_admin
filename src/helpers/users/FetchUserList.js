import { useRef, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import delete_icon from "../../assets/images-new/delete-icon.svg";
import edit_icon from "../../assets/images-new/edit.svg";

export const FecthUserList = () => {
  const abortControllerRef = useRef(new AbortController());
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserList = useCallback(async () => {
    // let config = {
    //   headers: {
    //     Authorization: `Bearer ${getAuthToken()}`,
    //   },
    // };

    axios
      .get(`${process.env.REACT_APP_API_URL}/user/fetch-user`)
      .then(res => {
        let { userList, success } = res.data;

        if (success) {
          setUserList(userList);
        }

        setIsLoading(false);
      })
      .catch(err => {
        setError("No Users Available");
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const controller = abortControllerRef.current;
    fetchUserList();

    return () => {
      controller.abort();
    };
  }, [fetchUserList]);

  return { userList, isLoading, error };
};

export const GetUserListColumns = () => {
  let history = useHistory();

  const handleUserDelete = userId => {
    if (window.confirm("Are you sure you want to delete this User?")) {
      axios
        .delete(
          `${process.env.REACT_APP_API_URL}/user/delete-user/${userId}`
        )
        .then(response => {
          let { success } = response.data;
          if (success) {
            window.location.reload();
          }
        })
        .catch(err => {
          console.log("Error while deleting the user list:::", err);
        });
    }
  };

  return [
    {
      dataField: "role",
      text: "Role",
    },
    {
      dataField: "name",
      text: "Name",
    },
    {
      dataField: "email",
      text: "Email",
      classes: "row-actions1 text-left", // Add custom classes here
      headerClasses: "row-actions1 text-left",
    },
    {
      dataField: "phone",
      text: "Mobile",
    },
    {
      dataField: "id",
      text: "Actions",
      formatter: cell => {
        return (
          <div className="action-application">
            <div className="action-one">
              <Link to={`/edit-user/${cell}`} title="Edit User">
                <img src={edit_icon} alt="" />
                <span>Edit User</span>
              </Link>
            </div>

            {/* <Link className="text-success" to="#" title="Disapprove User">
              <i
                className="mdi mdi-thumb-up-outline font-size-18"
                id="edittooltip"
                style={{ color: "black" }}
              ></i>
            </Link> */}

            <div
              className="action-one"
              onClick={() => handleUserDelete(cell)}
              style={{ cursor: "pointer" }}
              title="Delete User"
            >
              <Link to="#">
                <img src={delete_icon} alt="" />
                <span>Delete User</span>
              </Link>
            </div>
          </div>
        );
      },
    },
  ];
};
