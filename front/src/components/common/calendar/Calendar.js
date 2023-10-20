import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form";
import { ko } from "date-fns/esm/locale";

const Calendar = () => {
  const [getDate, setGetDate] = useState();
  return (
    <DatePicker 
    placeholderText="년-월-일"    	
    selected={getDate}
      onChange={(date) => setGetDate(date)}
      locale={ko}                   // 한글로 변경
      dateFormat="yyyy년 MM월 dd일" // 시간 포맷 변경
      // label={"년-월-일"}
      showPopperArrow={true}       // 화살표 변경
      maxDate={new Date()}    // 오늘 날짜 전은 선택 못하게
      // 오늘 날짜 전은 선택 못하게
      customInput={		      // 날짜 또는 인풋 커스텀
        <Form.Control  as="textarea"  rows={1}  style={{width:"250px"}}/> 
      }
      />
  );
};
export default Calendar;