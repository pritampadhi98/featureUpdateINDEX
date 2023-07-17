import React, { useState, useEffect } from "react";
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { experienceData } from "./NewData";

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
  return (
    <>
      {brands?.length > 0 && (
        <Table id="table-to-xls" style={{ display: "none" }}>
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
                Sub-category
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
              {brands?.map((brand_val, index) => {
                return (
                  <TableCell
                    style={{
                      border: "1px solid #ddd",
                      backgroundColor: "#b5b3b3",
                      textAlign: "center",
                      fontSize: "16px",
                      fontWeight: "600",
                      width: "260px !important",
                    }}
                    key={index}
                  >
                    {brand_val?.brandName}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((category) =>
              category?.categoryVal?.map((subCategory) =>
                subCategory?.Parameter.map((parameter, index) => (
                  <TableRow key={index}>
                    <TableCell
                      style={{
                        border: "1px solid #ddd",
                        width: 250,
                        padding: "8px",
                        textAlign: "center",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      {category.category}
                    </TableCell>
                    <TableCell
                      style={{
                        border: "1px solid #ddd",
                        width: 250,
                        padding: "8px",
                        textAlign: "center",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      {subCategory.sub_cat_val}
                    </TableCell>
                    <TableCell
                      style={{
                        border: "1px solid #ddd",
                        width: 250,
                        padding: "8px",
                        textAlign: "center",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      {parameter.usability_key}
                    </TableCell>
                    {brands?.map((brand_val, index) => {
                      return (
                        <TableCell
                          style={{
                            border: "1px solid #ddd",
                            width: 250,
                            padding: "8px",
                            textAlign: "center",
                            fontSize: "14px",
                            fontWeight: "400",
                            backgroundColor: brand_val?.Data.hasOwnProperty(
                              parameter.usability_key
                            )
                              ? brand_val?.Data[parameter.usability_key]
                                  ?.rating > 4
                                ? "limegreen"
                                : "white"
                              : "white",
                          }}
                          key={index}
                        >
                          {brand_val?.Data.hasOwnProperty(
                            parameter.usability_key
                          ) &&
                          brand_val?.Data[parameter.usability_key]?.rating
                            ?.length > 0
                            ? brand_val?.Data[parameter.usability_key]?.rating
                            : 0}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))
              )
            )}
          </TableBody>
        </Table>
      )}
      {brands?.length > 0 && (
        <div
          style={{
            backgroundColor: "#f2f2f2",

            padding: "10px",
            width: "180px",
            marginLeft: "46%",
            textAlign: "center",
            backgroundColor: "#598ad4",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="download-table-xls-button"
            table="table-to-xls"
            filename="tablexls"
            sheet="tablexls"
            buttonText="Download Excel File"
          />
        </div>
      )}
    </>
  );
};

const DownloadExcel = () => {
  return (
    <div>
      <TableComponent tableData={experienceData} />
    </div>
  );
};

export default DownloadExcel;
