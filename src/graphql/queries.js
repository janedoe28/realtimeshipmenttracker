/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getShipment = /* GraphQL */ `
  query GetShipment($id: ID!) {
    getShipment(id: $id) {
      id
      trackingNumber
      status
      estimatedArrival
      __typename
    }
  }
`;
export const listShipments = /* GraphQL */ `
  query ListShipments {
    listShipments {
      id
      trackingNumber
      status
      estimatedArrival
      __typename
    }
  }
`;
