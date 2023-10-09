type CardProps = {
    name: string;
    role: string;
    avatar: string;
};

export function Card({ name, role, avatar }: CardProps) {
    return (
        <div className="card">
            <div className="card__image">
                <img src={avatar} alt="avatar-login.png" />
            </div>

            <div className="card__name">{name}</div>
            <div className="card__role">{role}</div>
            <div className="card__icons">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-square-youtube"></i>
                <i className="fa-brands fa-tiktok"></i>
                <i className="fa-brands fa-github"></i>
            </div>
            <div className="card__contact-me">
                <div className="card__contact-me__button">Contact me</div>
            </div>
        </div>
    );
}
