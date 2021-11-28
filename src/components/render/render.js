import { Button } from "antd";
import { Link } from "react-router-dom";
import configName from "setting/configNameTypeJob";

export const renderInputSkill = (skill) => {
  return (
    <div className="input-addnew-skill" style={{ display: "none" }}>
      <input
        className="values-addnew-skill"
        type="textarea"
        defaultValue={skill}
      />
      <button
        type="submit"
        onClick={(e) => {
          let valuesAddnew = document.querySelector(
            ".values-addnew-skill"
          ).value;
          const upload = valuesAddnew.split(",");
          const userLogin = JSON.parse(localStorage.getItem("fiverrUser"));
          userLogin.user = {
            ...userLogin.user,
            skill: upload,
          };
          localStorage.setItem("fiverrUser", JSON.stringify(userLogin));
          setTimeout(() => {
            window.location.reload();
          }, 0);
        }}
      >
        Done
      </button>
      <button
        className="ml-2"
        type="button"
        onClick={() => {
          document.querySelector(".input-addnew-skill").style.display = "none";
        }}
      >
        Cancel
      </button>
    </div>
  );
};

export const renderInputCert = (cert) => {
  return (
    <div className="input-addnew-cert" style={{ display: "none" }}>
      <input
        className="values-addnew-cert"
        type="textarea"
        defaultValue={cert}
      />
      <button
        type="submit"
        onClick={(e) => {
          let valuesAddnew = document.querySelector(
            ".values-addnew-cert"
          ).value;
          const upload = valuesAddnew.split(",");
          const userLogin = JSON.parse(localStorage.getItem("fiverrUser"));
          userLogin.user = {
            ...userLogin.user,
            certification: upload,
          };
          localStorage.setItem("fiverrUser", JSON.stringify(userLogin));
          setTimeout(() => {
            window.location.reload();
          }, 0);
        }}
      >
        Done
      </button>

      <button
        className="ml-2"
        type="button"
        onClick={() => {
          document.querySelector(".input-addnew-cert").style.display = "none";
        }}
      >
        Cancel
      </button>
    </div>
  );
};

export const renderAvatar = (imageUrl, currentUser) => {
  const nameAvatar = currentUser?.email
    .split("")
    .splice(0, 1)
    .toString()
    .toUpperCase();
  if (imageUrl) {
    return <img src={imageUrl} className="avatar-user" alt="" />;
  } else if (currentUser?.avatar) {
    return (
      <img
        className={imageUrl !== null ? "avatar-user" : "avatar-mini"}
        src={currentUser?.avatar}
        alt=""
      />
    );
  } else {
    return imageUrl !== null ? (
      <label>
        <span>{nameAvatar}</span>
      </label>
    ) : (
      <Button className="name-avatar">{nameAvatar} </Button>
    );
  }
};

export const renderCategoriesHeader = (mainJob, currentUser) => {
  return (
    <div className = "cagetories__menu" id={currentUser ? "category__content-loggedin" : "category__content"}>
      <ul>
        {mainJob?.map((mainjob, idx) => {
          const name = configName(mainjob.name);
          return (
            <li className="li-cate" key={mainjob._id}>
              <Link to={`/categories/${name}`}>{mainjob.name}</Link>
              <div
                className={
                  currentUser
                    ? "category__hover cate-active"
                    : "category__hover pos-right"
                }
              >
                <ul className="hover__item">
                  {mainjob.subTypeJobs.map((subjob, idx) => {
                    return (
                      <li key={subjob._id}>
                        <Link to={`/categories/${name}/${subjob._id}`}>
                          {subjob.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const renderPagination = (
  setPagination,
  pagination,
  totalPage,
  list
) => {
  return (
    <div className="pagination-app">
      <button
        disabled={pagination.page === 0}

        onClick={() => {
          setPagination({
            ...pagination,
            page: 0,
          });
        }}
      >
        {"<<"}
      </button>
      <button
        disabled={pagination.page === 0}
        onClick={() => {
          setPagination({
            ...pagination,
            page: pagination.page - 1,
          });
        }}
      >
        {"<"}
      </button>

      <button
        disabled
        style={{
          fontWeight: 700,
        }}
      >
        Page {pagination.page + 1}
      </button>

      <button
        disabled={pagination.page === totalPage - 1 || list?.length === 0}
        onClick={() => {
          setPagination({
            ...pagination,
            page: pagination.page + 1,
          });
        }}
      >
        {">"}
      </button>
    </div>
  );
};
