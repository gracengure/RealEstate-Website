import React from "react";
import { Link } from "react-router-dom";

function PropertyListing({ properties, onDelete }) {
  if (!properties || properties.length === 0) {
    return <div>Loading ...</div>;
  }

  const categories = ["Apartments", "Villas", "Condos", "Commercials"];

  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <div>
      {categories.map((category) => (
        <div key={category} className="container">
          <h1 id={category}></h1>
          {properties
            .filter((property) => property.category === category)
            .map((property) => (
              <div key={property.id} className="card">
                <h2 className="property-name">{property.name}</h2>
                <Link to={`/properties/${property.id}`}>
                
                  <img
                    src={property.image}
                    alt={property.name}
                    className="property-img"
                  />
                </Link>
                <div className="property-details">
                  

                  <p>Price: ${property.price}</p>
                  <p>Location: {property.location}</p>
                  <br />
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(property.id)}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default PropertyListing;