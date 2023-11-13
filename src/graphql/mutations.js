/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createShipment = /* GraphQL */ `
  mutation CreateShipment(
    $trackingNumber: String!
    $status: String!
    $estimatedArrival: String!
  ) {
    createShipment(
      trackingNumber: $trackingNumber
      status: $status
      estimatedArrival: $estimatedArrival
    ) {
      id
      trackingNumber
      status
      estimatedArrival
      __typename
    }
  }
`;
export const updateShipment = /* GraphQL */ `
  mutation UpdateShipment(
    $id: ID!
    $status: String!
    $estimatedArrival: String!
  ) {
    updateShipment(
      id: $id
      status: $status
      estimatedArrival: $estimatedArrival
    ) {
      id
      trackingNumber
      status
      estimatedArrival
      __typename
    }
  }
`;
export const deleteShipment = /* GraphQL */ `
  mutation DeleteShipment($id: ID!) {
    deleteShipment(id: $id) {
      id
      trackingNumber
      status
      estimatedArrival
      __typename
    }
  }
`;
