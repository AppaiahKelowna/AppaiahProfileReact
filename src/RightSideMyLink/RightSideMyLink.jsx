import ProfileLink from "../ProfileLinkUI/ProfileLink";
import "./RightSideLink.css";

const RightSideMyLink = () => {
    return (
        <>
            <div className="right-side-wrapper">
                <h1>My Links</h1>
                <ProfileLink></ProfileLink>
                <button>Add new Link</button>
            </div>
        </>
    )
};

export default RightSideMyLink;