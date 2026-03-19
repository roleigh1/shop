import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

export default function CustomAlert({ voucherLinkData, voucherStatus }) {
  const [show, setShow] = useState(true);

  if (!show) return null;

  let headline = "";
  let text = "";
  let variant = "info";

  if (Object.values(voucherStatus).every(v => v === false)) {
    headline = "Thank you for your order";
    text = "You gonna receive an Email soon with your order";
    variant = "success";

  } else if (voucherStatus.active) {
    headline = voucherLinkData?.bannerHeadline;
    text = voucherLinkData?.bannerText;

    if (voucherLinkData?.bannerColor === "default") {
      variant = "warning";
    } else if (voucherLinkData?.bannerColor === "green") {
      variant = "success";
    } else {
      variant = "primary";
    }

  } else if (voucherStatus.soonActive) {
    headline = voucherLinkData?.bannerHeadline;
    text = voucherLinkData?.bannerText;
    variant = "light";

  } else if (voucherStatus.expired) {
    headline = voucherLinkData?.bannerHeadline;
    text = voucherLinkData?.bannerText;
    variant = "danger";
  }
  console.log("alert", voucherLinkData)
  return (
    <div className="pt-4">
      <Alert className="custom-alert" variant={variant} onClose={() => setShow(false)} dismissible>
        <Alert.Heading className="text-lg font-bold mb-2">{headline}</Alert.Heading>
        <hr className="border-2 border-black " />
        <p className="text-base">{text}</p>
      </Alert>
    </div>
  );
}