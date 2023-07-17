import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Layout from "./Layout";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";

const AccordionComponent = ({ accordionData, brandData, setBrandData }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    accordionData?.categoryVal[0]?.sub_cat_val
  );
  const [selectedIndexVal, setSelectedIndexVal] = useState(0);
  const [selectSubCat, setSelectSubCat] = useState(
    accordionData?.categoryVal[0]?.Parameter[0]?.usability_key
  );
  const [selectContentVal, setSelectContentVal] = useState(
    accordionData?.categoryVal[0]?.Parameter[0]?.contentVal
  );
  const handleCategoryClick = (subCatVal, indexVal) => {
    setSelectedCategory(subCatVal);
    setSelectedIndexVal(indexVal);
  };
  const handleSubCategoryClick = (subCatVal, contentVal) => {
    setSelectSubCat(subCatVal);
    setSelectContentVal(contentVal);
  };

  return (
    <div>
      <Accordion sx={{ marginBottom: "20px" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            {accordionData?.category}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={6} md={6}>
                <div
                  style={{
                    maxHeight: "320px",
                    minHeight: "320px",
                    overflowY: "auto",
                    display: "flex",
                  }}
                >
                  <Table>
                    <TableBody>
                      {accordionData?.categoryVal?.map(
                        (categoryData, index) => (
                          <TableRow key={index}>
                            <TableCell
                              sx={{
                                border: "1px solid black",
                                backgroundColor:
                                  categoryData.sub_cat_val === selectedCategory
                                    ? "lightblue"
                                    : "transparent",
                                cursor: "pointer",
                              }}
                              onClick={() =>
                                handleCategoryClick(
                                  categoryData?.sub_cat_val,
                                  index
                                )
                              }
                            >
                              {categoryData?.sub_cat_val}
                            </TableCell>
                          </TableRow>
                        )
                      )}
                    </TableBody>
                  </Table>
                  <Table>
                    <TableBody>
                      {accordionData?.categoryVal?.length > 0 &&
                        accordionData?.categoryVal[
                          selectedIndexVal
                        ]?.Parameter?.map((param_val, index) => {
                          return (
                            <TableRow key={index}>
                              <TableCell
                                sx={{
                                  height: "50px !important",
                                  border: "1px solid black",
                                  backgroundColor:
                                    param_val?.usability_key === selectSubCat
                                      ? "lightblue"
                                      : "transparent",
                                }}
                                onClick={() =>
                                  handleSubCategoryClick(
                                    param_val?.usability_key,
                                    param_val?.contentVal
                                  )
                                }
                              >
                                {brandData[param_val?.usability_key]?.rating
                                  ?.length && (
                                  <TaskAltOutlinedIcon
                                    sx={{ color: "green", marginRight: "5px" }}
                                  />
                                )}

                                {param_val?.usability_key}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </div>
              </Grid>
              <Grid item xs={6} md={6}>
                <Layout
                  usability_key={selectSubCat}
                  contentVal={selectContentVal}
                  brandData={brandData}
                  setBrandData={setBrandData}
                />
              </Grid>
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionComponent;
