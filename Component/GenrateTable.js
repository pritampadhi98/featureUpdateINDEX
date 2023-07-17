import React, { useState, useEffect } from "react";
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
} from "@mui/material";
import { experienceData } from "./NewData";

import ImageModal from "./ImageModal";

const TableComponent = ({ tableData }) => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => {
        setBrands(data.response);
      })
      .catch((error) => console.error(error));
  }, []);

  const renderTableHeader = () => {
    return (
      <TableHead>
        <TableRow>
          <TableCell
            style={{
              border: "1px solid #ddd",
              backgroundColor: "#b5b3b3",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "600",
              width: "260px !important",
            }}
          >
            Category
          </TableCell>
          <TableCell
            style={{
              border: "1px solid #ddd",
              backgroundColor: "#b5b3b3",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "600",
              width: "260px !important",
            }}
          >
            Sub Category
          </TableCell>
          <TableCell
            style={{
              border: "1px solid #ddd",
              backgroundColor: "#b5b3b3",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "600",
              width: "260px !important",
            }}
          >
            Parameter
          </TableCell>
        </TableRow>
      </TableHead>
    );
  };

  const renderTableRows = () => {
    return tableData?.map((item, index) => {
      return (
        <React.Fragment key={index}>
          {item.categoryVal?.map((subItem, subIndex) => {
            return (
              <React.Fragment key={subIndex}>
                <TableRow>
                  {subIndex === 0 ? (
                    <TableCell
                      rowSpan={item.categoryVal.length}
                      style={{
                        border: "1px solid #ddd",
                        width: 250,
                        padding: "8px",
                        textAlign: "center",
                        fontSize: "14px",
                        fontWeight: "400",
                        margin: 0,
                      }}
                    >
                      {item.category}
                    </TableCell>
                  ) : null}
                  <TableCell
                    style={{
                      border: "1px solid #ddd",
                      width: 250,
                      padding: "8px",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "400",
                      margin: 0,
                    }}
                  >
                    {subItem.sub_cat_val}
                  </TableCell>
                  {subItem?.Parameter?.map((vals, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px !important",
                            textAlign: "center",
                            fontSize: "14px",
                            fontWeight: "400",
                            width: "300px !important",
                            minWidth: "300px ",
                          }}
                        >
                          {vals.usability_key}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableRow>
              </React.Fragment>
            );
          })}
        </React.Fragment>
      );
    });
  };

  const renderBrandTables = () => {
    return brands?.map((vals, index) => {
      return (
        <Table
          id="experience-data-brandTables"
          key={index}
          style={{ minWidth: "150px" }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  border: "1px solid #ddd",
                  backgroundColor: "#b5b3b3",
                  textAlign: "center",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
                key={index}
              >
                {vals?.brandName}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData?.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {item.categoryVal?.map((subItem, subIndex) => {
                    return (
                      <React.Fragment key={subIndex}>
                        {subItem?.Parameter?.map((paramVal, index) => {
                          return (
                            <TableRow key={index}>
                              <TableCell
                                className="table-cell"
                                style={{
                                  border: "1px solid #ddd",

                                  padding: "14px",
                                  textAlign: "center",
                                  fontSize: "14px",
                                  fontWeight: "400",
                                  display: "flex",

                                  justifyContent: "center",
                                  gap: "10px",

                                  backgroundColor: vals?.Data.hasOwnProperty(
                                    paramVal.usability_key
                                  )
                                    ? vals?.Data[paramVal.usability_key]
                                        ?.rating > 4
                                      ? "limegreen"
                                      : "white"
                                    : "white",
                                }}
                              >
                                {vals?.Data.hasOwnProperty(
                                  paramVal.usability_key
                                ) &&
                                vals?.Data[paramVal.usability_key]?.rating
                                  ?.length > 0
                                  ? vals?.Data[paramVal.usability_key]?.rating
                                  : 0}
                                <ImageModal
                                  value={vals?.Data[paramVal.usability_key]}
                                />
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </React.Fragment>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </TableBody>
        </Table>
      );
    });
  };

  return (
    <div style={{ padding: "2% 12%" }}>
      {brands?.length === 0 ? (
        <>Loading...</>
      ) : (
        <TableContainer
          className="experience-data-table"
          id="experience-data-tables"
          sx={{ display: "flex" }}
        >
          <Table id="experience-data-brandTables">
            {renderTableHeader()}
            <TableBody>{renderTableRows()}</TableBody>
          </Table>
          {renderBrandTables()}
        </TableContainer>
      )}
    </div>
  );
};

const YourComponent = () => {
  return (
    <div>
      <TableComponent tableData={experienceData} />
    </div>
  );
};

export default YourComponent;
