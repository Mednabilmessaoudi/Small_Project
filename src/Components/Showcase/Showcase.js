import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { deletearticle, getarticle } from "../../Api/Api";
import { setArticle } from "../../Store/Articleslice";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

export const Showcase = () => {
  const dispatch = useDispatch();
  let articles = useSelector((state) => state.Article);

  console.log("article", articles);

  const getdata = async () => {
    const { data } = await getarticle();
    console.log(data, "data");
    dispatch(setArticle(data));
  };

  const handleDelete = (id) => {
    toast.promise(
      deletearticle(id),

      {
        loading: "Saving...",
        success: <b>deleted!</b>,
        error: <b>Could not found.</b>,
      }
    );
  };
 

  useEffect(() => {
    getdata();
  }, [getdata]);

  let count = 1;
  return (
    <div>
      <Toaster position="top-right" />
      <Table striped bordered hover>
        <thead>
          <tr>
            
            <th>Number</th>
            <th>Category</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Color</th>
            <th>Size</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((e, key) => (
            <tr key={key}>
              <td>{count++}</td>
              <td>{e.category}</td>
              <td>{e.type}</td>
              <td>{e.color}</td>
              <td>{e.size}</td>
              <td>{e.quantity}</td>
              <td>{e.price}</td>
              <td>
                <button onClick={() => handleDelete(e._id)}>Delete</button><br/>
                <button >Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Showcase;
