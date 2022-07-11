import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";




export default function WidgetSm() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      } catch{

      }
    }
    getUsers();
  }, []);
  

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Nouveaux Membres</span>
      <ul className="widgetSmList">
      {users.map((user) => (
            <li className="widgetSmListItem" key={user._id}>
            <img src={
              user.img || "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
            }
              alt=""
              className="widgetSmImg"
              
              />
            <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Montrer
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}
