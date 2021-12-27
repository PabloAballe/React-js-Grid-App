
import GridItem from './GridItem';
import React,{useState,useEffect} from 'react';

import RandomUserService from '../services/RandomUser.service';
import Loading from './Loading';

const Grids = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)


useEffect(() => {

  RandomUserService.getUsers(25)
    .then((res) => res.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => { setLoading(false);});

}, []);

if(loading){return <Loading/>}
else{
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 grids">
       {data && data.results.map(item => (
           <GridItem 
            key={item.login.uuid}
            name={`${item.name.first} ${item.name.last}`}
            address={`${item.location.street.name} ${item.location.street.number} ${item.location.city} ${item.location.postcode}`}
            image={item.picture.medium}
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum tincidunt mi in commodo. Nulla facilisi. Donec elementum sem dictum magna rutrum, at iaculis massa consequat. Nulla sit amet sodales urna. '
            phone={item.phone}
            email={item.email}
            />
        ))}
    </div>
  );
}
}

export default Grids;
