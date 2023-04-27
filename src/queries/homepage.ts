import { gql } from "@apollo/client";

export const GET_PAST_LAUNCHES = gql`
  query PastLaunches {
    launchesPast {
      id
      launch_date_utc
      mission_name
      rocket {
        rocket_name
      }
      links {
        video_link
        article_link
      }
    }
  }
`;
