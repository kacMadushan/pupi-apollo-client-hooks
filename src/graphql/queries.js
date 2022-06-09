import { gql } from '@apollo/client';

const PET_FIELDS = gql`
  fragment PetFields on Pet {
    id
    name
    weight
    category
    petImage: photo {
      full
    }
  }
`;

export const PET_DETAILS_BY_ID = gql`
  ${PET_FIELDS}
  query PetDetailsById($id: ID!) {
    petById(id: $id) {
      ...PetFields
    }
  }
`;

export const ALL_PETS = gql`
  ${PET_FIELDS}
  query AllPets {
    allPets {
      ...PetFields
    }
  }
`;



