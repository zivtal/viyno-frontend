import moment from "moment";
import React from "react";
import { tryRequire } from "../../../../services/require.service";
import { getImgSrcFromBase64 } from "../../../../services/media/media.service";

export const PostUserInfo = ({ review, isMinimal }) => {
  return (
    <div className="community-user-info">
      <img
        src={
          getImgSrcFromBase64(review.photoData, review.photoType) ||
          tryRequire("imgs/icons/user-profile.svg")
        }
        onError={(ev) =>
          (ev.target.src = tryRequire("imgs/icons/user-profile.svg"))
        }
        alt="Reviewer profile"
      />
      <p style={isMinimal ? { flexDirection: "column" } : {}}>
        <span className="user-fullname">{review.userName} </span>
        {!isMinimal && review.ratings ? (
          <span className="user-ratings">({review.ratings} ratings)</span>
        ) : null}
        <span className="post-date">
          {" "}
          {moment(review.createdAt).format("ll")}
        </span>
      </p>
    </div>
  );
};
