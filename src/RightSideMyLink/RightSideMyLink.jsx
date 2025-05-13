import ProfileLink from "../ProfileLinkUI/ProfileLink";
import "./RightSideLink.css";
import { useState } from "react";

const RightSideMyLink = () => {
    const [_list, setList] = useState([]);

    const addNewLink = () => {
        // 1) difference between _list vs ..._list 
        setList([..._list,"new item"]);
    }
    console.log(_list);
    return (
        <>
            <div className="right-side-wrapper">
                <h1>My Links</h1>
                <div className="linkContainer">
                    {/* 2. How to append ProfileLink list here  */}
                </div>
                <template id="template-link-wrapper">
                    <div class="link-wrapper">
                        <a class="my-link"><i class="fas fa-globe"> </i>My Portfolio Website</a>
                        <span id="remove-link" class="remove-link">&times;</span>
                    </div>
                </template>
                <button onClick={addNewLink}>Add new Link</button>
            </div>
        </>
    )
};

export default RightSideMyLink;