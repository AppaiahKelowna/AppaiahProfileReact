import "./ProfileLink.css";

const ProfileLink = () => {
    return (
             <div className="my-link">
                <i class="fab fa-youtube"></i>
                <a>My profile Website</a>
                <span id="remove-link" class="remove-link">&times;</span>
            </div>
    )
};

export default ProfileLink