import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import "./user.css";

export default function User() {

  const location = useLocation();
  const userId = location.pathname.split("/")[2];

  const user = useSelector((state) => 
      state.user.user.currentUser.find((user) => user._id === userId)
  )

 console.log(user);


  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Editer les Utilisateursr</h1>
        <Link to="/newUser">
          <button className="userAddButton">Créer</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={user.img}
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.username}</span>
              <span className="userShowUserTitle">Développeur</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Détails de compte</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user.username}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{user.createdAt}</span>
            </div>
            <span className="userShowTitle">Détails Contact</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">77 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Douala | CMR</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Editer</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>{user.username}</label>
                <input
                  type="text"
                  placeholder="The_Process"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Nom complet</label>
                <input
                  type="text"
                  placeholder="The_Process"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="The_Process@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Tél:</label>
                <input
                  type="text"
                  placeholder="77 123 456 67"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Adresse</label>
                <input
                  type="text"
                  placeholder="Douala |CMR"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Mise à Jour</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
