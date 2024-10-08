import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
      } = resData;
      console.log(resData)
    return (
        <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg" alt="res-logo" src={CDN_URL +cloudinaryImageId}></img>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRating} Star</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
};

export const withVegLabel = (RestaurantCard) =>{
    return (props)=>{
        return(
            <div>
               <label className="absolute bg-white text-green-400 m-2 p-2 rounded-lg">veg</label> 
               <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;