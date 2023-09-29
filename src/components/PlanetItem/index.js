// Write your code here
import './index.css'

const PlanetItem=props=>{
    const {planetDetails}=props
    const {name,imageUrl,description}=planetDetails
    return(
        <div className="planet-details-container">
        <h1 className="heading">PLANETS</h1>
        <img src={imageUrl} className="planets-images" alt={`planet ${name}`}/>
        <h1 className="planet-name">{name}</h1>
        <p className="desc">{description}</p>
        </div>
    )
}
export default PlanetItem
