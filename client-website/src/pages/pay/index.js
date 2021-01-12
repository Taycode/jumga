import React, { useContext, useEffect, useState } from "react";
import Section from "../../components/Section";
import { Row, Col } from "react-bootstrap";
import { Context as OrderContext } from "../../contexts/orderContext";
import PageLoader from "../../components/PageLoader";
import PaymentCard from "../../components/PaymentCard";
import OrderDetails from "../../components/OrderDetails";
import { useRouter } from "../../util/router";

const PaymentPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [paymentStep, setPaymentStep] = useState(1);
  const { match } = props;
  const router = useRouter();

  const {
    state: { order },
    fetchOrderDetails,
  } = useContext(OrderContext);

  useEffect(() => {
    match.params.orderId && fetchOrderDetails(match.params.orderId);
  }, [match?.params?.orderId]);

  const handleCancleOrder = () => {
    localStorage.removeItem("orderId");
    router.push("/products");
  };

  return (
    <Section className="p-3">
      <Row className="p-5">
        {loading ? (
          <Col>
            {" "}
            <PageLoader />{" "}
          </Col>
        ) : (
          <>
            <Col>
              <OrderDetails
                handleCancleOrder={handleCancleOrder}
                order={order}
                paymentStep={paymentStep}
              />
            </Col>
            <Col>
              <PaymentCard
                order={order}
                paymentStep={paymentStep}
                setPaymentStep={setPaymentStep}
              />
            </Col>
          </>
        )}
      </Row>
    </Section>
  );
};

export default PaymentPage;
