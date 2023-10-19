import React, { useState } from "react";
import EducationCard from "../../../hooks/EducationCard";
import EducationEditForm from "./EducationEditForm";

function Education({ education, setEducations, isEditable }) {
  //useState로 isEditing 상태를 생성함.
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      {isEditing ? (
        <EducationEditForm
          currentEducation={education}
          setEducations={setEducations}
          setIsEditing={setIsEditing}
        />
      ) : (
        <EducationCard
            education={education}
          isEditable={isEditable}
          setIsEditing={setIsEditing}
        />
      )}
    </>
  );
}

export default Education;
