import React, { useContext, useEffect, useState } from "react";
import Section from "../../components/Section";
import { Row, Col } from "react-bootstrap";
import { Context as OrderContext } from "../../contexts/orderContext";
import PageLoader from "../../components/PageLoader";
import PaymentCard from "../../components/PaymentCard";
import OrderDetails from "../../components/OrderDetails";
import { useRouter } from "../../util/router";
import Emptycomponent from "../../components/Empty";

const PaymentPage = (props) => {
  const [paymentStep, setPaymentStep] = useState(1);

  const { match, mediaQuery } = props;
  const router = useRouter();

  const {
    state: { order, loading },
    fetchOrderDetails,
  } = useContext(OrderContext);

  useEffect(() => {
    match.params.orderId && fetchOrderDetails(match.params.orderId);
  }, [match?.params?.orderId]);

  // Pull this outta here later
  const handleCancleOrder = () => {
    localStorage.removeItem("orderId");
    router.push("/products");
  };

  return (
    <Section className="p-3">
      <Row className={mediaQuery === "isMobile" ? "p-1" : "p-4"}>
        {loading ? (
          <Col>
            {" "}
            <PageLoader />{" "}
          </Col>
        ) : (
          <>
            {!order && <Emptycomponent type="ORDER" />}
            {order && (
              <>
                <Col>
                  <OrderDetails
                    handleCancleOrder={handleCancleOrder}
                    order={order}
                    paymentStep={paymentStep}
                    mediaQuery={mediaQuery}
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
          </>
        )}
      </Row>
    </Section>
  );
};

export default PaymentPage;
