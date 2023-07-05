import logo from "../../assets/logo.png";
export default function Footer() {
    return (
        <div className="footer">
            <img className="footer-logo" src={logo} alt="logo de Kasa" />
            <p>©️ 2023 Kasa. All rights reserved</p>
        </div>
    )
}