import './Header.css';
import companyLogoImage from '../../images/company_logo.png';
import {CompanyAddress} from "./CompanyAddress/CompanyAddress";

export const Header = () => {
    return(
        <header className="pricebook-header">
            <div className="company-logo">
                <a href="/"><img src={companyLogoImage} alt=""/></a></div>
            <h1>Cennik</h1>
            <CompanyAddress/>
        </header>
    )
}