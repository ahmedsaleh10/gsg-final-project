import React from 'react'
import CircularProgress from "@mui/material/CircularProgress";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";

const Loading = () => {
  return (
    <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={2}
        my={4}
        width={"100%"}
        height={"100vh"}
      >
        <CircularProgress />
        <Typography variant="body1">Loading...</Typography>
      </Stack>
  )
}

export default Loading