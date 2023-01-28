import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

let Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props }) => {
    return <div>
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
            onPageChanged={onPageChanged} />
            <div>
        {
            users.map(u => <User user={u}
                followingInProgress={props.followingInProgress}
                key={u.id}
                unfollow={props.unfollow}
                follow={props.follow}
            />
            )
        }
        </div>
    </div>
}

export default Users;