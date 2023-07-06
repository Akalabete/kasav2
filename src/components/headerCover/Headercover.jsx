import headercovergallery from "../../assets/headercovergallery.png"
import headercoverabout from "../../assets/headercoverabout.png";


export default function HeaderCover( { rootToHeaderCover }) {
    return (
        <div className="header-img">
            {rootToHeaderCover=== 'about'?
                (<img src={headercoverabout} alt="bandeau représentant une vallée en montagne" className="gallery-cover" />)
            :(<>
                <img src={headercovergallery}  alt="bandeau représentant une falaise et la mer" className="gallery-cover" />
                <p>Chez vous, partout et ailleurs</p>
            </>
            ) }
                    
           
               
           
        </div>
    );

}