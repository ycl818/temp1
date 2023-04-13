import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const VariableAccordion = () => {
  const variablesArray = useSelector((state) => {
    return state.variable.variableArray;
  });

  return (
    <Box sx={{ marginTop: "1rem" }}>
      <Accordion>
        <AccordionSummary expandIcon={">"}>
          <Typography>Variables</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ backgroundColor: "#323232", display: "flex", flexWrap: "wrap" }}
        >
          {variablesArray.map((variable) => {
            return (
              <Box sx={{ marginLeft: "1rem" }}>
                <Button
                  disableRipple
                  disableFocusRipple
                  disableElevation
                  sx={{
                    color: "#5B9AFF",
                    backgroundColor: "#181B1F",
                    width: "10%",
                    textTransform: "none",

                    "&:hover": { backgroundColor: "#181B1F" },
                  }}
                  variant="contained"
                >
                  {variable.variableName}
                </Button>

                <TextField
                  sx={{
                    width: { sm: 50, md: 100 },
                    marginBottom: "1rem",
                  }}
                  variant="outlined"
                  size="small"
                  defaultValue={`${variable.defaultValue}`}
                />
              </Box>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default VariableAccordion;
