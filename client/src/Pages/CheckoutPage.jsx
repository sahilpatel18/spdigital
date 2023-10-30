import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "../Components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const CheckoutPage = () => {
  const [solution, setSolution] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchSolution = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/solutions/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setSolution(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchSolution();
  }, [id]);

  console.log(process.env.REACT_APP_STRIPE_PK);
  return <div>CheckoutPage</div>;
};

export default CheckoutPage;
