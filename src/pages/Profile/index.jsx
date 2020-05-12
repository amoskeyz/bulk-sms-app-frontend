import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import Avatar from 'react-avatar-edit';
import './Profile.scss';
import Verify from '../../Components/Verify';
import MenuTab from '../../Components/MenuTab';
import toast from '../../Components/Toast';
import { setProfileImage, cleanUpProfile } from '../../Store/actions/EditProfile';


const Profile = ({
  user, image, cleanUp, error, isCompleted,
}) => {
  const [userData, setUser] = useState({
    ...user,
    image: user.image || '../../assets/dummy.png',
  });

  const loadFilePath = async (file) => {
    const readPath = new FileReader();
    readPath.readAsDataURL(file);
    readPath.onload = e => setUser(prevState => ({ ...prevState, image: e.target.result }));
  };
  /* istanbul ignore next */
  const handleChange = (event) => {
    const [pictureFile] = event.target.files;
    image(pictureFile);
    loadFilePath(pictureFile);
  };

  useEffect(() => {
    if (isCompleted) {
      toast('update successful', 'success');
    }

    if (error) {
      if (error.data) {
        if (Array.isArray(error.data.error)) {
          for (let i = 0; i < error.data.error.length; i += 1) {
            toast(error.data.error[i], 'error');
          }
        } else toast(error.data.error, 'error');
      } else toast(error, 'error');
      // Notify(error);
    }

    return () => {
      cleanUp();
    };
  }, [isCompleted, error]);

  return (
    <>
      <Verify />
      <div className="pro">
        <div className="prof">
          <div className="profileImg position-relative">
            <img
              src={userData.image}
              alt=""
              className="pic shadow rounded-circle"
            />
            <div className={`upload position-absolute rounded-circle ${userData.username ? 'hide' : ''}`}>
              <label htmlFor="changePhoto">
                <img
                  className=" m-0 upper rounded-circle cursor-pointer border-2 border-solid border-white"
                  src="../../assets/upload.png"
                  alt=""
                />
              </label>
              <input
                id="changePhoto"
                className="d-none"
                type="file"
                onChange={handleChange}
                accept="image/*"
                data-max-size="50"
              />
            </div>
          </div>
          <div className="userer m-5">
            <h2 className="font-weight-bold">{userData.username}</h2>
            <h4>{`${userData.firstName} ${userData.lastName}`}</h4>
            <h6>{userData.email}</h6>
            {/* <h6>07084324266</h6> */}
          </div>
        </div>
        <MenuTab {...user} />
      </div>
    </>
  );
};

const mapStateToprops = state => ({
  isCompleted: state.profile.isCompleted,
  error: state.profile.error,
});

export default connect(mapStateToprops, {
  image: setProfileImage,
  cleanUp: cleanUpProfile,
})(Profile);
