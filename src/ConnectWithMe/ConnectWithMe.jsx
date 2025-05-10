import "./ConnectWithMe.css";

const ConnectWithMe = () => {
    return (
        <div className="wrapper-connectMe">
            <h1>Connect With Me</h1>
            <div className="connect-with-me-line"></div>
            <div className="connect-Me-body">
                <a><i class="fab fa-github fa-2x"></i></a>
                <a><i class="fab fa-linkedin fa-2x"></i></a>
                <a><i class="fab fa-twitter fa-2x"></i></a>
                <a><i class="fab fa-instagram fa-2x"></i></a>
                <a><i class="fab fa-youtube fa-2x"></i></a>
            </div>
        </div>
    )
}

export default ConnectWithMe;