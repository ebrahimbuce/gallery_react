import React from "react";
import CardImage from "../components/CardImage/Card_Image";
import useFetchQuery from "../hook/useFetchQuery";
import InfiniteScroll from "react-infinite-scroll-component";
import { Box, Chip, CircularProgress } from "@mui/material";
import { CategoryPictures } from "../constant/CategoryChip";

import "./styles.css";

const propsChip = {
  sx: {
    marginRight: "1rem",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  variant: "outlined",
  component: "a",
};

const propsContentChip = {
  sx: { marginBottom: "1rem", overflow: "hidden", overflowX: "scroll" },
};

export default function Home() {
  const { results, hasMore, updatePage, handleSearch } = useFetchQuery();

  return (
    <div>
      <Box className="scroll-X" {...propsContentChip}>
        <div className="content_chip">
          {CategoryPictures.map((category, index) => (
            <Chip
              key={index}
              {...propsChip}
              label={category.label}
              onClick={() => handleSearch(category.label.toLocaleLowerCase())}
            />
          ))}
        </div>
      </Box>
      <InfiniteScroll
        style={{ overflowY: "hidden" }}
        dataLength={results.length}
        next={updatePage}
        hasMore={hasMore}
        loader={<CircularProgress />}
      >
        <CardImage data={results} />
      </InfiniteScroll>
    </div>
  );
}
