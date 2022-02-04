import React from "react";
import { PRODUCE_IMAGES } from "../../images/produce-table-images";
import "../../styles/landing/TableVisual.css";

const TableVisual = () => {
  return (
    <section class="produce-table-example-section">
      <div class="table-data-heading">
        <h3>Find the current best locations for affordable produce</h3>
        <p>Utilize our user-filled tables to see the current prices of produce available in local stores</p>
      </div>
      <div class="store-data-tables">
        <table class="fruit-table">
          <caption>Fruits from Fruit Store</caption>
          <tr>
            <th>Produce Name</th>
            <th>Produce Image</th>
            <th>Produce Price</th>
            <th>Date Posted</th>
          </tr>
          <tr>
            <td>Pomegranate</td>
            <td>
              <img src="../resources/images/produce-table-images/pomegranate.jpg" />
            </td>
            <td>$3.00/2pcs</td>
            <td>10-14-2021</td>
          </tr>
          <tr>
            <td>Mango</td>
            <td>
              <img src="../resources/images/produce-table-images/mango.jpg" />
            </td>
            <td>$5.00/3pcs</td>
            <td>10-14-2021</td>
          </tr>
          <tr>
            <td>Honeydew</td>
            <td>
              <img src="../resources/images/produce-table-images/honeydew.jpg" />
            </td>
            <td>$4.99/each</td>
            <td>10-14-2021</td>
          </tr>
        </table>

        <table class="veggie-table">
          <caption>Veggies from Veggie Store</caption>

          <tr>
            <th>Produce Name</th>
            <th>Produce Image</th>
            <th>Produce Price</th>
            <th>Date Posted</th>
          </tr>
          <tr>
            <td>String Bean</td>
            <td>
              <img src="../resources/images/produce-table-images/stringBeans.jpg" />
            </td>
            <td>$1.69/lbs</td>
            <td>10-14-2021</td>
          </tr>
          <tr>
            <td>Cilantro</td>
            <td>
              <img src="../resources/images/produce-table-images/cilantro.jpg" />
            </td>
            <td>$0.89/each</td>
            <td>10-14-2021</td>
          </tr>
          <tr>
            <td>Artichoke</td>
            <td>
              <img src="../resources/images/produce-table-images/artichoke.jpg" />
            </td>
            <td>$5.00/2pcs</td>
            <td>10-14-2021</td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default TableVisual;
