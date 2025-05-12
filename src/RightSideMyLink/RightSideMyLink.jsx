import ProfileLink from "../ProfileLinkUI/ProfileLink";
import "./RightSideLink.css";
import { useState } from "react";

const RightSideMyLink = () => {
    const [_list, setList] = useState([]);

    const addNewLink = () => {
        // add <ProfileLink/> to the list below
        setList([_list,"new item"]);
    }
    console.log(_list);
    return (
        <>
            <div className="right-side-wrapper">
                <h1>My Links</h1>
                {/* 1. append ProfileLink list here  */}
                <button onClick={addNewLink}>Add new Link</button>
            </div>
        </>
    )
};

export default RightSideMyLink;