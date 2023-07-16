import React, { useEffect, useRef, useState } from "react";
import './FetchGoogleReviews.css';

const FetchGoogleReviews = ({ apiKey, placeId }) => {
  const reviewsRef = useRef(null);
  const [hideReviews, setHideReviews] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.google) {
        const service = new window.google.maps.places.PlacesService(reviewsRef.current);

        service.getDetails(
          { placeId, fields: ["reviews"] },
          (place, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              const reviews = place.reviews || [];

              const limitedReviews = reviews.slice(0, 5);

              limitedReviews.forEach((review) => {
                const reviewElement = document.createElement("div");
                reviewElement.classList.add("review-card");

                const profilePicture = document.createElement("img");
                profilePicture.src = review.profile_photo_url;
                profilePicture.alt = "Profile Picture";
                profilePicture.classList.add("review-profile-picture");

                const reviewContent = document.createElement("div");
                reviewContent.classList.add("review-content");
                reviewContent.innerHTML = `
                  <h4 class="review-author">${review.author_name}</h4>
                  <p class="review-rating">${review.rating} stars</p>
                  <p class="review-text">${review.text}</p>
                `;

                reviewElement.appendChild(profilePicture);
                reviewElement.appendChild(reviewContent);

                reviewsRef.current.appendChild(reviewElement);
              });
            }
          }
        );
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, [apiKey, placeId]);

  const toggleReviews = () => {
    setHideReviews((prevHideReviews) => !prevHideReviews);
  };

  return (
    <div className="review-container">
      <label className="label-reviews" onClick={toggleReviews}>
        {hideReviews ? "What others have said on Google reviews" : "Hide Reviews"}
      </label>
      <div className={`reviews-container ${hideReviews ? 'hide-reviews' : ''}`} ref={reviewsRef}>
        <h3>Google Reviews</h3>
      </div>
    </div>
  );
};

export default FetchGoogleReviews;
