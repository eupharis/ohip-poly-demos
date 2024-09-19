/* eslint-disable quotes */
/* eslint-disable comma-dangle */
import poly, { vari } from "polyapi";

async function createOhipReservation(): Promise<any> {
  const hostName: string = await vari.ohip.hostUrl.get();
  const hotelId = "SAND01CN";
  const appKey: string = await vari.ohip.sclient.envSettings.inject("appKey");
  const accessToken: string = await poly.ohip.utilities.getOhipToken();

  const reservationPayload = {
    reservations: {
      reservation: [
        {
          sourceOfSale: {
            sourceType: "PMS",
            sourceCode: hotelId,
          },
          roomStay: {
            roomRates: [
              {
                total: {
                  amountBeforeTax: "200",
                },
                rates: {
                  rate: [
                    {
                      base: {
                        amountBeforeTax: "200",
                        currencyCode: "USD",
                      },
                      shareDistributionInstruction: "Full",
                      total: {
                        amountBeforeTax: "200",
                      },
                      start: "2023-11-17",
                      end: "2023-11-19",
                    },
                  ],
                },
                guestCounts: {
                  adults: "1",
                  children: "0",
                },
                roomType: "SUP",
                ratePlanCode: "BAR",
                start: "2023-11-17",
                end: "2023-11-19",
                suppressRate: true,
                marketCode: "LEISURE",
                marketCodeDescription: "Leisure",
                sourceCode: "PHONE",
                sourceCodeDescription: "Phonee",
                numberOfUnits: "1",
                pseudoRoom: false,
                roomTypeCharged: "SUP",
                houseUseOnly: false,
                complimentary: false,
                fixedRate: true,
                discountAllowed: false,
                bogoDiscount: false,
              },
            ],
            guestCounts: {
              adults: "1",
              children: "0",
            },
            arrivalDate: "2024-11-17",
            departureDate: "2024-11-19",
            guarantee: {
              guaranteeCode: "6PM",
              shortDescription: "6PM Hold",
            },
            roomNumberLocked: false,
            printRate: false,
          },
          reservationGuests: [
            {
              profileInfo: {
                profile: {
                  customer: {
                    personName: [
                      {
                        givenName: "Sarah",
                        middleName: "",
                        surname: "Smith",
                        nameType: "Primary",
                      },
                    ],
                    language: "E",
                  },
                  addresses: {
                    addressInfo: [
                      {
                        address: {
                          addressLine: [
                            "Riverside Corporate Park",
                            "4 Julius Avenue",
                          ],
                          cityName: "North Ryde",
                          postalCode: "2113",
                          state: "NSW",
                          country: {
                            value: "AU",
                            code: "AU",
                          },
                          language: "EN",
                          type: "HOME",
                          primaryInd: true,
                        },
                      },
                    ],
                  },
                  profileType: "Guest",
                },
              },
              primary: true,
            },
          ],
          reservationPaymentMethods: [
            {
              paymentMethod: "CA",
              folioView: "1",
            },
          ],
          comments: [
            {
              comment: {
                text: {
                  value: "Please ensure I have coffee in my room",
                },
                commentTitle: "General Notes",
                notificationLocation: "RESERVATION",
                type: "GEN",
                internal: false,
              },
            },
          ],
          hotelId: hotelId,
          roomStayReservation: true,
          reservationStatus: "Reserved",
          computedReservationStatus: "DueIn",
          walkIn: false,
          preRegistered: false,
          upgradeEligible: false,
          allowAutoCheckin: false,
          hasOpenFolio: false,
          allowMobileCheckout: false,
          allowMobileViewFolio: false,
          allowPreRegistration: false,
          optedForCommunication: false,
        },
      ],
    },
  };

  return await poly.OOB.ohip.reservations.create(
    hostName,
    hotelId,
    appKey,
    accessToken,
    reservationPayload
  );
}

createOhipReservation().then((response) => {
  console.log(response);
});
