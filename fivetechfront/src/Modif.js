import Header from "./Header";
import "../src/css/Modif.css";

const Modif = () => {
    return (

        <>

            <Header />
            <div className="modif">
                <form id="modiForm">
                    <div className="TitleModif">
                        <h2>Modifiez vos informations :</h2>
                    </div>
                    
                        <input name="adresse" id="adress" type="text" placeholder="Adresse.." />
                        <input name="codePostal" id="zipcode" type="text" placeholder="Code Postal.." />
                        <input name="ville" id="city" type="text" placeholder="City.." />
                        <input name="pays" id="country" type="text" placeholder="Country.." />
                        <button name="modifier" type="submit">Modifier</button>
            

                </form>
            </div>


        </>

    );
}

export default Modif;