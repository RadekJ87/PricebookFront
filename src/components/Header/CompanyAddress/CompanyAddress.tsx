import './CompanyAddress.css';


export const CompanyAddress = () => {
   return(
       <div className="company-address">
           <h3>Nazwa firmy</h3>
           <h3>ulica i numer lokalu</h3>
           <h3>Kod pocztowy oraz miejscowość</h3>
       </div>
   )
}

//ten komponent można na przyszlość wykorzystać do wstrzykiwania adresów firm - props