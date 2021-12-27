

const GridItem = ({name, address, image, description , phone,email }) => {
  return (
      <div className="bg-white rounded-lg p-6 grid-item shadow-xl">
          <div className="flex items-center space-x-6 mb-4">
              <img className="h-28 w-28 object-cover object-center rounded-full" 
              src={image} alt={name} />
              <div>
                  <p className="text-xl text-gray-700 font-normal mb-1 break-all">{name}</p>
                  <p className="text-base text-blue-600 font-normal break-all">{address}</p>
                  <p className="text-base font-normal break-all">{phone}</p>
                  <p className="text-base font-normal break-all">{email}</p>
              </div>
          </div>
          <div>
              <p className="text-gray-400 leading-loose font-normal text-base text-justify break-all">{description}</p>
          </div>
      </div>
  );
}

export default GridItem;
