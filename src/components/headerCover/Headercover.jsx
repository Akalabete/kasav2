import headercovergallery from "../../assets/headercovergallery.png"
/*import headercoverabout from "../../assets/headercoverabout.png";*/

/*
export default function Headercover( rootToHeadercover){
    
    return (
        <div className="header-img">
            {rootToHeadercover=== []?
                (<img src={headercoverabout} alt="bandeau représentant une vallée en montagne" className="gallery-cover" />)
            :(<>
                <img src={headercovergallery}  alt="bandeau représentant une falaise et la mer" className="gallery-cover" />
                <p>Chez vous, partout et ailleurs</p>
            </>
            ) }
                    
           
               
           
        </div>
    );
}
 */
export default function HeaderCover() {
    return (
        <div className="header-img">
            <>
                <img src={headercovergallery}  alt="bandeau représentant une falaise et la mer" className="gallery-cover" />
                <p>Chez vous, partout et ailleurs</p>
            </>
        </div>
    )

}