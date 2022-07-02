import './CompanyAddress.css';


export const CompanyAddress = () => {
   return(
       <div className="company-address">
           <h3>Kordas Sp z o.o.</h3>
           <h3>ul. Zakładowa 2</h3>
           <h3>57-215 Srebrna Góra</h3>
       </div>
   )
}

//ten komponent można na przyszlość wykorzystać do wstrzykiwania adresów firm - props