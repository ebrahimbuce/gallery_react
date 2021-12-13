import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { Typography, Chip } from "@mui/material";

import Masoryn from "react-masonry-css";

import style from "./style.module.css";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export default function CardImage({ data }) {
  return (
    <Masoryn
      breakpointCols={breakpointColumnsObj}
      className={style.my_masonry_grid}
      columnClassName={style.my_masonry_grid_column}
    >
      {data.map((item, index) => (
        <div key={index}>
          <div className={style.card_image}>
            <img
              src={item.urls.small}
              alt={item.alt_description}
              loading="lazy"
            />
            <a
              href={item.links.download}
              target="_blank"
              rel="noopener noreferrer"
              className={style.icon_dowloand}
            >
              <DownloadRoundedIcon sx={{ color: "white" }} />
            </a>
          </div>
          <Chip
            label={`@${item.user.username}`}
            component="a"
            clickable
            sx={{ marginTop: "5px", marginBottom: "5px" }}
            target="_blank"
            href={item.user.portfolio_url}
            size="small"
          />
          <span className={style.content_span_likes}>
            <FavoriteIcon color="error" sx={{ marginRight: "3px" }} />

            <Typography variant="caption" fontWeight="bold">
              {item.likes}
              {item.likes > 1000 && "K"}
              {item.likes > 1 ? " Likes" : " Like"}
            </Typography>
          </span>
        </div>
      ))}
    </Masoryn>
  );
}
