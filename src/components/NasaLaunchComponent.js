import {useState, useEffect} from "react";

let Launches = () => {
    let [launches, editLaunches] = useState([]);
    useEffect(() => {
            fetch('https://api.spacexdata.com/v3/launches/', {})
                .then(value => value.json())
                .then(value => editLaunches(value))
        },[]
    )
    return (
        <div className={'launches'}>
            {launches.map(launch => <div className={'launch'}>
                <div>{launch.mission_name}</div>
                <div>{launch.launch_year}</div>
                <img src={launch.links.mission_patch} alt={launch.mission_name} className={'ship_img'}/>
            </div>)}
        </div>
    )
}

export default Launches;