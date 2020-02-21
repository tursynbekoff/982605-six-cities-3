import {City, OFFER_FEATURES, RentalFeature, RentalType} from '../consts';

export const TEST_OFFERS = [
  {
    location: {
      city: City.AMSTERDAM,
      cityCoordinates: [52.38333, 4.9],
    },
    offers: [
      {
        id: 0,
        coordinates: [52.3909553943508, 4.85309666406198],
        rentalHost: {
          hostName: `Angelina`,
          hostAvatar: `img/avatar-angelina.jpg`,
          isSuper: true,
        },
        rentalTitle: `Beautiful & luxurious apartment at great location`,
        rentalImages: [
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-small-03.jpg`,
          `img/apartment-small-04.jpg`,
        ],
        rentalPrice: 120,
        rentalRating: 3.4,
        rentalType: RentalType.APARTMENT,
        isPremium: true,
        isBookmark: true,
        rentalDescription: [
          `A bright and charming apartment with 1 bedroom, located close to Museum Square in one of the most cosmopolitan and vibrant districts of Amsterdam "de PIJP".`,
          `Perfect for short holidays, business trips.`,
        ],
        rentalRoomsQuantity: 3,
        rentalMaxGuestsQuantity: 3,
        rentalFeatures: [RentalFeature.DRYER, RentalFeature.WASHINGMACHINE],
      },
      {
        id: 1,
        coordinates: [52.369553943508, 4.85309666406198],
        rentalHost: {
          hostName: `Max`,
          hostAvatar: `img/avatar-max.jpg`,
          isSuper: false,
        },
        rentalTitle: `Wood and stone place`,
        rentalImages: [
          `img/apartment-02.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-small-03.jpg`,
          `img/apartment-small-04.jpg`,
        ],
        rentalPrice: 80,
        rentalRating: 4.1,
        rentalType: RentalType.HOTEL,
        isPremium: false,
        isBookmark: true,
        rentalDescription: [
          `This package is special opportunity to connect accommodation in a traditional Dutch cottage located in a birch forest, taste the local food, and snowshoeing/hiking experience.`,
        ],
        rentalRoomsQuantity: 2,
        rentalMaxGuestsQuantity: 2,
        rentalFeatures: [
          RentalFeature.DRYER,
          RentalFeature.WASHINGMACHINE,
          RentalFeature.CABLETV,
          RentalFeature.KITCHEN,
          RentalFeature.KITCHEN,
        ],
      },
      {
        id: 2,
        coordinates: [52.3909553943508, 4.929309666406198],
        rentalHost: {
          hostName: `Angelina`,
          hostAvatar: `img/avatar-angelina.jpg`,
          isSuper: true,
        },
        rentalTitle: `Stylish and cozy place`,
        rentalImages: [
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-small-03.jpg`,
          `img/apartment-small-04.jpg`,
        ],
        rentalPrice: 132,
        rentalRating: 4.75,
        rentalType: RentalType.HOUSE,
        isPremium: true,
        isBookmark: false,
        rentalDescription: [
          `Spacious apartment situated in the city centre (oud-West) of Amsterdam.`,
          `Walking distance to the Jordaan, Museum Quarter, Anne Frank house and Leidseplein.`,
          `Supermarket right on the corner.`,
        ],
        rentalRoomsQuantity: 4,
        rentalMaxGuestsQuantity: 7,
        rentalFeatures: OFFER_FEATURES,
      },
      {
        id: 3,
        coordinates: [52.3809553943508, 4.939309666406198],
        rentalHost: {
          hostName: `Max`,
          hostAvatar: `img/avatar-max.jpg`,
          isSuper: false,
        },
        rentalTitle: `Excellent location and free parking`,
        rentalImages: [
          `img/room.jpg`,
          `img/room-small.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-small-03.jpg`,
          `img/apartment-small-04.jpg`,
        ],
        rentalPrice: 180,
        rentalRating: 4.5,
        rentalType: RentalType.APARTMENT,
        isPremium: false,
        isBookmark: false,
        rentalDescription: [
          `The studio apartments at Wittenberg have been carefully-designed to embrace and enhance the building’s timeless authentic features, whilst incorporating striking yet traditional Dutch interiors.`,
        ],
        rentalRoomsQuantity: 2,
        rentalMaxGuestsQuantity: 4,
        rentalFeatures: [
          RentalFeature.DRYER,
          RentalFeature.WASHINGMACHINE,
          RentalFeature.PARKING,
        ],
      },
    ],
  },
];