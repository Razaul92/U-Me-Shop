import Currency from "react-currency-formatter";
import { StarIcon } from "@heroicons/react/solid";

function FilterData(props) {
  return (
    <div className="absolute z-50 bg-gray-100 space-y-2 sm:ml-40 ml overflow-y-scroll h-96 rounded-lg max-w-3xl px-1">
      {props.filterData?.slice(0, 10).map((val, key) => {
        return (
          <div
            className="flex"
            key={val.id}
            onClick={() => props.onClick(val.title)}
          >
            <div className="h-24">
              <img src={val.image} className="h-20 w-20 object-contain" />
            </div>
            <div className="flex-1 flex flex-col pl-8 pt-1 h-24">
              <h3 key={val.id} className="line-clamp-2">
                {val.title}
              </h3>

              <div className="flex mt-1">
                <p className="text-sm text-gray-700">
                  {val.rating.rate.toFixed(1)}
                </p>
                {Array(Number(val.rating.rate.toPrecision(1)))
                  .fill()
                  .map((_, i) => (
                    <StarIcon className="h-4 text-yellow-500" key={i} />
                  ))}
              </div>
              <p className="text-red-600 font-bold">
                <Currency quantity={val.price * 68} currency="INR" />
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FilterData;
