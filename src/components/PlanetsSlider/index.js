// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetSlider =props=>{
    const {planetsList}=props
    return(
        <div className="planet-container" data-testid="planets">
        <Slider>
        {planetsList.map(eachPlanet=>(
            <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet}/>
        ))}
        </Slider>
        </div>
    )
}
export default PlanetSlider
