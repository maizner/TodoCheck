import React from "react";
import { Avatar } from "../Avatar/Avatar";
import { TodoSearch } from "../TodoSearch/TodoSearch";

function TodoNav() {

    return(
        <div className="flex flex-row items-center justify-between w-full h-full ">
            <Avatar />
            <TodoSearch />
        </div>
    );
}

export { TodoNav };

