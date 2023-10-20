import React, { useState } from "react";
import CertificateCard from "../../../hooks/CertificateCard";
import CertificateEditForm from "./CertificateEditForm";

function Certificate({ certificate, setCertificates, isEditable }) {
  //useState로 isEditing 상태를 생성함.
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      {isEditing ? (
        <CertificateEditForm
          currentAward={certificate}
          setAwards={setCertificates}
          setIsEditing={setIsEditing}
        />
      ) : (
        <CertificateCard
          award={certificate}
          isEditable={isEditable}
          setIsEditing={setIsEditing}
        />
      )}
    </>
  );
}

export default Certificate;