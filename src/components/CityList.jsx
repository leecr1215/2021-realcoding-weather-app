import './CityList.css';
import CityImage from './architect.png';

function CityList(props) {
    // const cities = props.cities;
    const { cities } = props;
    return (
        <div>
            <hr></hr>
            <h1>CityList<img id="img" src = {CityImage}/></h1>


            <ul className="CityListUl">
                {cities.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
            <div>Icons made by <a href="https://www.flaticon.com/authors/nikita-golubev" title="Nikita Golubev">Nikita Golubev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
    );
}
export default CityList;