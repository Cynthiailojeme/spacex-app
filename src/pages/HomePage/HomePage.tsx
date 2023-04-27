import React from "react";
import { GET_PAST_LAUNCHES } from "../../queries/homepage";
import { useQuery } from "@apollo/client";
import styles from "./homepage.module.css";
import SkeletonLoader from "../../components/Loader/SkeletonLoader";
import { formatDate } from "../../utils/functions";
import { Launch } from "../../gql/graphql";

const HomePage = () => {
  const { data, loading } = useQuery(GET_PAST_LAUNCHES);

  const headers = [
    "Mission name",
    "Date of the launch",
    "Name of Rocket",
    "Article Link",
    "Video Link",
  ];

  const launches = data?.launchesPast;

  return (
    <div className={styles.home}>
      <div className={styles.home__information}>
        <div className={styles.home__nav}>
          <h1 className={styles.home__header}>Past Launches</h1>
        </div>
      </div>

      <div className={styles.home__launches}>
        {loading ? (
          <div className={styles.home__launches}>
            <SkeletonLoader />
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                {headers &&
                  headers.map((header, index) => <th key={index}>{header}</th>)}
              </tr>
            </thead>

            <tbody>
              {launches &&
                launches.map((item: Launch) => (
                  <tr key={item.id}>
                    <td>{item.mission_name || "Nil"}</td>
                    <td>{formatDate(item?.launch_date_utc) || "Nil"}</td>
                    <td>{item?.rocket?.rocket_name || "Nil"}</td>
                    <td>
                      {item?.links?.article_link ? (
                        <a
                          href={item?.links?.article_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Article link
                        </a>
                      ) : (
                        "Nil"
                      )}
                    </td>
                    <td>
                      {item?.links?.video_link ? (
                        <a
                          href={item?.links?.video_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Video link
                        </a>
                      ) : (
                        "Nil"
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default HomePage;
